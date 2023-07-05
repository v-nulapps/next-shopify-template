import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { CartContext } from "context/shopContext";

function ProductDetails({ productData }) {
  const { addToCart } = useContext(CartContext);

  const allVariantOptions = productData.variants.edges?.map((variant) => {
    const allOptions = {};

    //Custom objekat sa opcijama koje moraju da budu selektovane za odredjenu varijantu
    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: productData.title,
      handle: productData.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.price.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  productData.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });
  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="ProductDetails">
      <div className="wrapper flex">
        <Image
          src={productData.featuredImage.url}
          alt={productData.featuredImage.altText}
          width={600}
          height={600}
          className="w-1/2"
          priority
        />
        <div className="details w-1/2">
          <h1>{productData.title}</h1>
          <p>{productData.descripotion}</p>

          <div className="my-10 flex gap-10 flex-col">
            <h3>
              {productData.priceRange.minVariantPrice.amount}{" "}
              {productData.priceRange.minVariantPrice.currencyCode}
            </h3>

            {productData.options &&
              productData.options.map((option) => {
                return (
                  <div key={`key-${option.name}`}>
                    <h3 className="mb-2">{option.name}</h3>
                    <div className="flex gap-4">
                      {option.values.map((value, index) => {
                        const checked = selectedOptions[option.name] === value;
                        return (
                          <button
                            key={index}
                            className={`link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-300 min-w-[55px] h-[55px] px-2 ${
                              checked ? "border-[--accent] text-[--accent]" : ""
                            }`}
                            onClick={() => {
                              setOptions(option.name, value);
                            }}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

            <button
              data-cursor="pointer"
              className="py-3 link flex-grow border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-300 w-1/2"
              onClick={() => {
                addToCart(selectedVariant);
              }}
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
