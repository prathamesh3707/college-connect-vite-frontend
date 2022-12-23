import React from "react";
import Product from "./Product";

function Marketplace() {
  return (
    <div className="bg-dark pt-8">
      {/* header */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-500 flex my-2 sm:flex-row flex-col border-2 border-slate-500 w-5/6 mx-auto rounded-md">
        <select className="mx-auto w-3/5 sm:w-1/5 border-2 border-slate-500 p-1 my-4 cursor-pointer">
          <option value="" disabled selected hidden>
            Filter
          </option>
          <option>Hostel necessities</option>
          <option>College necessities</option>
          <option>Electronics</option>
          <option>others</option>
        </select>
        <div className="flex flex-row -space-x-3 overflow-hidden mx-auto">
          <input
            className=" border-2 border-slate-500 w-40 sm:w-3/4 rounded-lg p-1 my-4"
            placeholder="Search..."
          ></input>
          <img
            src="https://iconarchive.com/download/i85638/graphicloads/100-flat/zoom-seach.ico"
            className="rounded-full z-1  my-auto  h-10 w-10 "
          ></img>
        </div>
        {/* <input
            className="mx-auto border-2 border-slate-500 w-3/5 sm:w-1/5 rounded-lg p-1 my-4"
            placeholder="Search..."
          ></input> */}

        <input
          type="number"
          placeholder="Max Price"
          className="mx-auto border-2 border-slate-500 w-3/5 sm:w-1/5 rounded-lg p-1 my-4"
        ></input>
      </section>
      {/* products */}
      <div
        className=" bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500
        bg-contain rounded-md mx-auto w-5/6 border-2 border-slate-500 h-1/2 overflow-y-auto"
      >
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Marketplace;
