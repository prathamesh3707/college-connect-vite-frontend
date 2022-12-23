import React from "react";

function Event() {
  return (
    <div className="flex bg-blue-50 border-2 gap-x-4 my-1 rounded-md py-2 pl-2 border-slate-500 ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mqpyZlsPfnmFCjSux93QSWqnSFuuIgcfHDD8-1V6pfqoxw6om3CycNnuttpIt40aYQ0&usqp=CAU"
        className="rounded-full border-2 border-black h-16 w-16"
      ></img>
      <div>
        <h1 className="font-semibold">Google Hackathon for Hiring</h1>
        <div className="text-sm">
          Google is organising a hackathon to hire interns for Web Devlopment
          and related fields.There will be two rounds.
        </div>
        <p className="text-sm">10/06/22</p>
      </div>
    </div>
  );
}

export default Event;
