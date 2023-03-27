import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/components/ProductList.module.css";

function ProductList(props) {
  return (
    <div className={styles.ProductList}>
      {props.products.map((product) => {
        return <ProductCard product={product.node} key={product.node.id} />;
      })}
    </div>
  );
}

export default ProductList;
