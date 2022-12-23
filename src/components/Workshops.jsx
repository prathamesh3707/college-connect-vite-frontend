import React from "react";
import Workshop from "./Workshop";

function Workshops() {
  return (
    <div className="shadow-black shadow-md rounded-md h-96 lg:w-1/3 md:w-2/3 w-3/4 mt-6 mx-auto overflow-y-scroll no-scrollbar">
      <h1 className="bg-white top-0 text-center sticky rounded-md border-4 text-lg font-semibold border-slate-700">
        Workshops and Webinars
      </h1>
      <div className="text-lg">
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
      </div>
    </div>
  );
}

export default Workshops;
