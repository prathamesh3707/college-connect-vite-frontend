import React from "react";

function Club(props) {
  return (
    <div className="h-80 shadow-md text-white bg-black shadow-black mt-8 rounded-md w-1/2 mx-auto overflow-y-auto no-scrollbar">
      <div className="flex flex-row">
        <img
          src="https://cdn.stumagz.com/images/5c5fe06e19739profilepic"
          className="rounded-full border-2 border-black h-16 ml-2 w-16 lg:ml-8 mt-6"
        ></img>
        <h1 className="font-bold text-4xl italic mt-8 ml-2 lg:ml-12">
          {props.name}
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <p className="mt-4">Since 2007</p>
        <p className="text-base">
          The Entrepreneurship Cell of RVCE, founded in 2007, stands tall as a
          student-run body with the goal of fostering an entrepreneurial culture
          and providing the most unique opportunities to the student community.
          The Cell stands out as a pioneering organization, having mentored a
          myriad of startups over the years. We, at E-Cell, also provide
          opportunities for our members to gain a better understanding of the
          startup community by facilitating regular interactions with them.
        </p>
      </div>
    </div>
  );
}

export default Club;
