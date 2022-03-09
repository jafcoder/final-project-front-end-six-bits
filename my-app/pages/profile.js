import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import PostInput from "../Components/PostInput";
import ProfileInput from "../Components/ProfileInput";
import Head from "next/head";

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function Profile() {
  const { user } = useUser();
  const [userData, setUserData] = useState([]);
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    async function getUserData() {
      const resp = await fetch(`${URL}/users/${user?.sub}`);
      const data = await resp.json();
      if (data.payload.length > 0) {
        setUserData([...userData, ...data.payload]);
      }
      setArrived(true);
    }
    getUserData();
  }, [user?.sub]);

  return (
    <div>
      <Head>
        <title>SalVeg | Profile</title>
      </Head>
      {arrived ? (
        <div>
          {userData[0]?.first_name === undefined ? (
            <ProfileInput />
          ) : (
            <PostInput />
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );

  // if (!arrived) {
  //   return <div>Loading...</div>;
  // }

  // return (
  //   <div>
  //     <Head>
  //       <title>SalVeg | Profile</title>
  //     </Head>

  //     {userData[0]?.first_name === undefined ? <ProfileInput /> : <PostInput />}
  //   </div>
  // );
}

export const getServerSideProps = withPageAuthRequired();
