import React from "react";
import Navbar from "../../components/navbar/Navbar";

const LinksCrud = () => {
  return (
    <div>
      <Navbar
        handleCreate={() => console.log("link card")}
        handleDelete={() => console.log("link card")}
        onSortGrid={() => console.log('sort grid')}
      />
    </div>
  );
};

export default LinksCrud;
