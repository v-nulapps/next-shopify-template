import Head from "next/head";
import { getProduct } from "utils/shopify";
import ProductDetails from "@/components/ProductDetails";

function Product({ productData }) {
  return (
    <>
      <Head>
        <title>Ecom43 | {productData.title}</title>
      </Head>
      <div className="ProductPage py-40">
        <ProductDetails productData={productData} />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { product } = context.query;

  const productData = await getProduct(product);
  return {
    props: {
      productData,
    },
  };
};

export default Product;
