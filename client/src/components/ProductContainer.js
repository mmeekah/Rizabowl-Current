import React, { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { withProductConsumer } from "../context";
import Loading from "./Loading";
import AddProductBtn from "./AddProductBtn";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import CreateProduct from "./CreateProduct";

function ProductContainer({ context }) {
  const { loading, sortedProducts, products, fetchData } = context;

  const [creating, setCreating] = useState(false);

  const [user, setUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await axios.get("/api/user/load");
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {creating ? (
        <CreateProduct
          fetchData={fetchData}
          setCreating={setCreating}
          creating={creating}
        />
      ) : null}
      <ProductFilter products={products} />
      <ProductList products={sortedProducts} />
      {user ? (
        <AddProductBtn setCreating={setCreating} creating={creating} />
      ) : null}
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
