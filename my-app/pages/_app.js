import Layout from "../Components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
