import React from "react";
import Event from "./Event";

function Events() {
  return (
    <div className="shadow-black shadow-md rounded-md h-96 lg:w-1/3 md:w-2/3 w-3/4 mt-6 mx-auto overflow-y-scroll no-scrollbar">
      <h1 className="bg-white top-0 text-center sticky rounded-md border-4 text-lg font-semibold border-slate-700">
        Events
      </h1>
      <div className="text-lg">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}

export default Events;
