import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { withProductConsumer } from "../context";
import Loading from "./Loading";

function ProductContainer({ context }) {
  const { loading, sortedProducts, products } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProductFilter products={products} />
      <ProductList products={sortedProducts} />
    </>
  );
}

export default withProductConsumer(ProductContainer);

// import React from "react";
// import ProductFilter from "./ProductFilter";
// import ProductList from "./ProductList";
// import { ProductConsumer } from "../context";
// import Loading from "./Loading";

// export default function ProductContainer() {
//   return (
//     <ProductConsumer>
//       {value => {
//         const { loading, sortedProducts, products } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello From Products Container
//             <ProductFilter products={products} />
//             <ProductList products={sortedProducts} />
//           </div>
//         );
//       }}
//     </ProductConsumer>
//   );
// }
