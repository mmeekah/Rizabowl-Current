import React from "react";
import { ProductContext } from "../context";

export default function DeleteProductBtn({ id, removeProduct }) {
  //   const update = async e => {
  //     e.preventDefault();
  //     const newWeb = {
  //       _id: params.wid,
  //       name: name,
  //       description: description,
  //       developerId: params.uid
  //     };
  //     await axios.put("/api/website", newWeb);
  //     history.push(`/user/${params.uid}/website`);
  //   };

  const remove = () => {
    removeProduct(id);
  };

  return (
    <button className="delete-top" onClick={remove}>
      <h6>X</h6>
    </button>
  );
}
