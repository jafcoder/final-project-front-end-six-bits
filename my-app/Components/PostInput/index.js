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
    quantity: "",
    location: "",
    price: 0,
    date: "",
  });

  const [posts, setPosts] = useState([]);

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
  }, []);

  const { title, description, quantity, location, price, date } = formData;

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
      setPosts([...posts, { ...responseMessage.payload[0] }]);
    }
    postData();
    // console.log(formData);
  };

  const deletePost = (post_id) => {
    async function remove() {
      const response = await fetch(`${URL}/posts/${post_id}`, {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });
      const responseMessage = await response.json();
      console.log(responseMessage);
    }
    remove();
    const newList = posts.filter((post) => post.post_id !== post_id);
    setPosts([...newList]);
  };

  // console.log(formData);

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
            <label htmlFor="title">Choose a vegetable:</label>
            <br></br>
            <select
              name="title"
              id="title"
              defaultValue={""}
              onChange={onChange}
              required
              className={css.dropdown}
            >
              <option value="" disabled></option>
              <option value="Cucumber">Cucumber</option>
              <option value="Potato">Potato</option>
              <option value="Carrot">Carrot</option>
              <option value="Broccoli">Broccoli</option>
              <option value="Tomato">Tomato</option>
              <option value="Onion">Onion</option>
              <option value="Peas">Peas</option>
              <option value="Peppers">Peppers</option>
              <option value="Spinach">Spinach</option>
              <option value="Sprouts">Sprouts</option>
            </select>
            <br></br>
          </div>{" "}
          <br />
          <br />
          <label htmlFor="Description">
            Description{" "}
            <span className={css.freeText}>100 characters maximum</span>
          </label>
          <br></br>
          <div className={css.inputContainer}>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              placeholder="Description *"
              autoComplete="off"
              required
              onChange={onChange}
              maxLength="100"
            ></input>
          </div>
          <br />
          <br />
          <label htmlFor="Description">
            Quantity <span className={css.freeText}>(e.g 4, 100g, 1kg)</span>
          </label>
          <br></br>
          <div className={css.inputContainer}>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              placeholder="Enter the quantity *"
              required
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <div className={css.inputContainer}>
            <label htmlFor="location">Where is your nearest location?</label>
            <br></br>
            <select
              className={css.dropdown}
              name="location"
              id="location"
              defaultValue={""}
              onChange={onChange}
              required
            >
              <option value="" disabled></option>
              <option value="London">London</option>
              <option value="Torquay">Torquay</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Manchester">Manchester</option>
              <option value="Edinburgh">Edinburgh</option>
              <option value="Liverpool">Liverpool</option>
            </select>
            <br></br>
          </div>
          <br />
          <br />
          <label htmlFor="location">
            Price{" "}
            <span className={css.freeText}>
              (In £ - Leave as 0 if your post is free)
            </span>
          </label>
          <br></br>
          <div className={css.inputContainer}>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              placeholder="Enter the price"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <label htmlFor="start">
            <span className={css.date}>Date: </span>
          </label>
          <input
            className={css.calendar}
            type="date"
            id="date"
            name="date"
            value={date}
            min="2018-01-01"
            max="2022-12-31"
            required
            onChange={onChange}
          />
          {/* {"*"} */}
          <button className={css.addPost} type="submit">
            Add
          </button>
        </form>
      </div>
      <div className={css.postDisplay}>
        <h1>Your posts</h1>
        <UserPost data={posts} action={deletePost} />{" "}
      </div>
    </div>
  );
};

export default PostInput;
