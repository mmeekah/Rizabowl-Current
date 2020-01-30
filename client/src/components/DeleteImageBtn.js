import React from "react";
import axios from "axios";

export default function DeleteProductBtn({ id, imageNumber, loadProduct }) {
  const remove = async () => {
    await axios.delete(`/api/image/${imageNumber}/${id}`);
    loadProduct();
  };

  return (
    <button onClick={remove} className="delete-top">
      <h6>X</h6>
    </button>
  );
}
