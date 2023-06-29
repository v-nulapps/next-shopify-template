import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import ProductList from "@/components/ProductList";
import s from "styles/Home.module.css";
import { getAllProducts } from "utils/shopify";

function Products({ products }) {
  return (
    <div className={s.container}>
      <Head>
        <title>Ecom43 | Shop</title>
        <meta name="description" content="Ecom43 shop page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactLenis root options={{ duration: 1.2 }}>
        <div className="wrapper">
          <main className={s.main}>
            <h1 className={s.title}>Shop</h1>
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

export default Products;
