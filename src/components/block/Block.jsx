import React from "react";
import { Link } from "react-router-dom";

function Block(props) {
  const handle = () => {
    if (props.name == "Placements")
      window.open("https://rvce.edu.in/placement-statistics");
  };
  return (
    <div
      onClick={handle}
      className="lg:w-1/5 lg:h-2/5 sm:w-1/2 sm:h-3/4  bg-black rounded-xl py-6 lg:mx-12 mt-12 mx-auto shadow-lg shadow-black animate__bounceIn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer "
    >
      {props.name == "Placements" && (
        <div>
          <img
            className="lg:h-32 lg:w-32 h-48 w-48 border-2 mx-auto rounded-lg cursor-pointer"
            src={props.src}
            alt="Workflow"
          />

          <h1 className="italic font-bold md:text-xl text-center text-white mt-6 rounded-xl cursor-pointer">
            {props.name}
          </h1>
        </div>
      )}
      {props.name != "Placements" && (
        <Link to={props.name}>
          <div>
            <img
              className="lg:h-32 lg:w-32 h-48 w-48 border-2 mx-auto rounded-lg cursor-pointer"
              src={props.src}
              alt="Workflow"
            />

            <h1 className="italic font-bold md:text-xl text-center text-white mt-6 rounded-xl cursor-pointer">
              {props.name}
            </h1>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Block;
