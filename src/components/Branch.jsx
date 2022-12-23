import React from "react";

function Branch(props) {
  return (
    <div className="hover:w-24 bg-blue-100 cursor-pointer border-2 border-white p-4 rounded-full w-16 text-center  font-semibold mx-8 my-6">
      {props.name}
    </div>
  );
}

export default Branch;
