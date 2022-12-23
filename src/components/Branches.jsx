import React from "react";
import Branch from "./Branch";

function Branches() {
  return (
    <div className="rounded-full no-scrollbar overflow-auto mx-auto w-11/12 lg:h-32 h-64 border-2 bg-blue-700 border-slate-500 flex flex-col lg:flex-row">
      <div className="flex mx-auto flex-row">
        <Branch name="CSE" />
        <Branch name="ISE" />
        <Branch name="ECE" />
        <Branch name="ET" />
        <Branch name="EI" />
        <Branch name="EE" />
      </div>
      <div className="flex mx-auto flex-row">
        <Branch name="ME" />
        <Branch name="CVL" />
        <Branch name="IEM" />
        <Branch name="AE" />
        <Branch name="BT" />
        <Branch name="AI" />
      </div>
    </div>
  );
}

export default Branches;
