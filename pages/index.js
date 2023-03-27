import Head from "next/head";
import s from "../styles/Home.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import ProductList from "../components/ProductList";
import { getAllProducts } from "../utils/shopify";

function Home({ products }) {
  return (
    <div className={s.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactLenis root options={{ duration: 1.2 }}>
        <div className="wrapper">
          <main className={s.main}>
            <h1 className={s.title}>Next Shopify Template</h1>
            <ProductList products={products} />
          </main>
        </div>
      </ReactLenis>
    </div>
  );
}
export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products },
  };
}

export default Home;
