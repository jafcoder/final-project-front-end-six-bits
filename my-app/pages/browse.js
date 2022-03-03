import { useEffect, useState } from "react";
import Vegcard from "../Components/Card";
// import css from "../styles/browse.module.css";

 import OptionsBar from "../Components/OptionsBar";

// const URL = process.env.NEXT_PUBLIC_API_URL;

 function Browse() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(`${URL}/posts`);
//       const data = await res.json();
//       setData([...data.payload]);
//     }
//     fetchData();
//   }, []);
  return (
    <div>
      <OptionsBar />
      <Vegcard />
    </div>
  );
}

export default Browse;

// date, description, email, full_name, phone_number, title
