import "../styles/globals.css";
import { Cursor } from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopProvider from "context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <main>
        <Cursor />
        <Header />
        <Component {...pageProps} key={router.asPath} />
        <Footer />
      </main>
    </ShopProvider>
  );
}

export default MyApp;
