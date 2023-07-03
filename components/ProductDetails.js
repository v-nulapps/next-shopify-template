import Image from "next/image";

function ProductDetails({ productData }) {
  return (
    <div className="ProductDetails">
      <div className="wrapper flex">
        <Image
          src={productData.featuredImage.url}
          alt={productData.featuredImage.alt}
          width={600}
          height={600}
          className="w-1/2"
        />
        <div className="details w-1/2">
          <h1>{productData.title}</h1>
          <p>{productData.descripotion}</p>

          <div className="my-10 flex gap-10 items-center">
            <h3>
              {productData.priceRange.minVariantPrice.amount}{" "}
              {productData.priceRange.minVariantPrice.currencyCode}
            </h3>
            <button
              data-cursor="pointer"
              className="py-3 link flex-grow border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-300"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
