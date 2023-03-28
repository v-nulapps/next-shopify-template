import "../styles/globals.css";
import { Cursor } from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Cursor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
