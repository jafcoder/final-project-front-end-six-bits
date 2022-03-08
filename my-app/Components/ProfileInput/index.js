import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import css from "../../styles/profile.module.css";
import Image from "next/image";
import carrots from "../../public/images/carrots.jpg";

const URL = process.env.NEXT_PUBLIC_API_URL;

const ProfileInput = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phoneNumber: "",
  });

  const { firstName, secondName, phoneNumber } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      auth_id: user.sub,
      first_name: formData.firstName,
      last_name: formData.secondName,
      phone_number: formData.phoneNumber,
      email: user.email,
      user_created: calculateDate(),
    };
    async function createUser() {
      const response = await fetch(`${URL}/users`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newUser),
      });
      const responseMessage = await response.json();
      console.log(responseMessage);
    }
    if (firstName && secondName && phoneNumber) {
      createUser();
    } else {
      alert("Please insert all the required fields.");
    }
  };

  function calculateDate() {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1);
    const yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  }

  return (
    <div className={css.container}>
      <div className={css.infoSubmit}>
        <h2 className={css.submitTitle}>
          We need more information about you<br></br> before creating a new
          post.
        </h2>
        <form onSubmit={onSubmit}>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Enter first name *"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type="text"
              id="secondName"
              name="secondName"
              value={secondName}
              placeholder="Enter second name *"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Enter phone number *"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <div className={css.btnContainer}>
            <button type="submit">Update Profile</button>
          </div> 
        </form>
      </div>
    </div>
  );
};

export default ProfileInput;
