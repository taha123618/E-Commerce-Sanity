import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            alt="product_image"
            className="product-image"
          />
          {/* name  */}
          <div className="product-name">{name}</div>
          <div className="product-price">${price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
