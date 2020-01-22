import React from "react";

export default function AddProductBtn({ creating, setCreating }) {
  const handleClick = () => {
    setCreating(!creating);
  };

  return (
    <button className="addBtn" onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
}
