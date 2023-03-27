import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/ProductCard.module.css";

function ProductCard(props) {
  return (
    <Link
      href={`/products/${props.product.handle}`}
      className={styles.ProductCard}
    >
      <div className={styles.thumbnail}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={props.product.images.edges[0].node.altText}
          src={props.product.images.edges[0].node.url}
        />
      </div>
      <div className={styles.namePrice}>
        <h2 className={styles.name}>{props.product.title}</h2>
        <p className={styles.price}>
          {props.product.priceRange.minVariantPrice.amount}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
