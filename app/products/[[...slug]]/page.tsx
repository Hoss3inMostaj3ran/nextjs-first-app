import React from "react";

interface Params {
  params: { slug: string[] };
  searchParams: { sort_order: string };
}

const Products = ({
  params: { slug },
  searchParams: { sort_order },
}: Params) => {
  return (
    <div>
      Products
      <p>{slug}</p>
      <p>{sort_order}</p>
    </div>
  );
};

export default Products;
