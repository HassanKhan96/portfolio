import "../styles/globals.css";
import firebaseInit from "../components/graphics/helpers/firebaseInit";

function MyApp({ Component, pageProps }) {
  const app = firebaseInit;

  return <Component {...pageProps} />;
}

export default MyApp;
