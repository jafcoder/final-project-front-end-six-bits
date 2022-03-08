import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import UserPost from "../UserPosts";
import css from "../../styles/signedInProfile.module.css";

const URL = process.env.NEXT_PUBLIC_API_URL;

const PostInput = () => {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    auth_id: user.sub,
    title: "",
    description: "",
    location: "",
    free: null,
    price: 0,
    date: "",
  });

  const [posts, setPosts] = useState([]);
  const [update, setUpdate] = useState(false);

  async function getUserData() {
    const resp = await fetch(`${URL}/posts/${user.sub}`);
    const data = await resp.json();
    if (data.payload.length > 0) {
      return data.payload;
    }
  }

  useEffect(async () => {
    const data = await getUserData();
    setPosts([...data]);
  }, [update]);

  const { title, description, location, price, date } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    async function postData() {
      const response = await fetch(`${URL}/posts`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const responseMessage = await response.json();
      console.log(responseMessage);
    }
    if (
      formData.title &&
      formData.description &&
      formData.location &&
      formData.date &&
      formData.free
    ) {
      postData();
      setUpdate(!update);
    } else {
      alert("Please insert all the required fields.");
    }
  };
  return (
    <div className={css.container}>
      <div className={css.postInput}>
        <p className={css.inputTitle}>
          Name:{" "}
          {posts.length > 0
            ? posts[0].first_name + " " + posts[0].last_name
            : ""}
        </p>
        <p className={css.inputTitle}>
          Email: {posts.length > 0 ? posts[0].email : ""}
        </p>
        <form onSubmit={onSubmit}>
          <div className={css.inputContainer}>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Title *"
              autoComplete="off"
              onChange={onChange}
            ></input>
          </div>{" "}
          <br />
          <br />
          <div className={css.inputContainer}>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              placeholder="Description *"
              autoComplete="off"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <div className={css.inputContainer}>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              placeholder="Location *"
              autoComplete="off"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <p>Is it free? *</p>
          <input
            type="radio"
            id="true"
            name="free"
            value="true"
            onChange={onChange}
          />
           <label htmlFor="free">Yes</label>
          <input
            type="radio"
            id="false"
            name="free"
            value="false"
            onChange={onChange}
          />
           <label htmlFor="free">No</label>
          <br />
          <br />
          <p>Price:</p>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            placeholder="Enter the price"
            onChange={onChange}
          ></input>
          <br />
          <br />
          <label htmlFor="start">
            <span>Date: </span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            min="2018-01-01"
            max="2022-12-31"
            onChange={onChange}
          />
          {"*"}
          <br />
          <br />
          <button type="submit">Post data</button>
        </form>
      </div>
      <div className={css.postDisplay}>
        <h1>Your posts</h1>
        <UserPost data={posts} />
      </div>
    </div>
  );
};

export default PostInput;
