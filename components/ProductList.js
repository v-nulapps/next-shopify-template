import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="gap-7 tablet:grid-cols-4 grid grid-cols-2 w-full max-w-7xl">
      {props.products.map((product) => {
        return <ProductCard product={product.node} key={product.node.id} />;
      })}
    </div>
  );
}

export default ProductList;
