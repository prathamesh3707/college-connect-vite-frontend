import React from "react";

function Workshop() {
  return (
    <div className="flex bg-blue-50 border-2 gap-x-4 my-1 rounded-md py-2 pl-2 border-slate-500 ">
      <img
        src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg"
        className="rounded-full border-2 border-black h-16 w-16"
      ></img>
      <div>
        <h1 className="font-semibold">
          Tesla worksop on AI/ML for transport Automation
        </h1>
        <div className="text-sm">
          Tesla is organising a free workshop for giving experience to students
          in the field of AI/ML.This workshop is open for all
          branches.Registrations started.
        </div>
        <p className="text-sm">11/09/22</p>
      </div>
    </div>
  );
}

export default Workshop;
