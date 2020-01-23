import React from "react";
import Product from "./Product";

export default function ProductList({
  products,
  fetchData,
  removeProduct,
  user
}) {
  if (products.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no products matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {products.map(item => {
          return (
            <Product
              user={user}
              key={item._id}
              product={item}
              fetchData={fetchData}
              removeProduct={removeProduct}
            />
          );
        })}
      </div>
    </section>
  );
}
