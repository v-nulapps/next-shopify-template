import Head from "next/head";

import { ReactLenis } from "@studio-freight/react-lenis";
import ProductListFeatured from "components/ProductListFeatured";
import Cart from "@/components/MiniCart";
import { getAllProducts } from "utils/shopify";

function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Ecom43</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <main className="py-40">
          <h1 className="mb-16">Home</h1>
          <ProductListFeatured products={products} />
        </main>
      </div>
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
