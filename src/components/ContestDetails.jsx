import React from "react";

function ContestDetails(props) {
  const handleClick = () => {
    window.open(props.url);
  };

  const time = (time) => {
    const date = time.split("T");
    return date;
  };
  return (
    <div className=" bg-blue-300 border-black border-2 w-2/3 mt-4 mx-auto rounded-lg p-2">
      <h1 className="bg-slate-700 text-white text-center text-xl">
        {props.site}
      </h1>
      <div className="text-lg bg-blue-200 text-center font-bold">
        {props.name}
      </div>
      <div className="italic md:pl-32">
        <h1 className="font-bold inline-block">Start Time: </h1>
        {time(props.start)[0]}
        <br />
        {time(props.start)[1].slice(0, 5)}
      </div>
      <div className="italic md:pl-32">
        <h1 className="font-bold inline-block">End Time: </h1>

        {time(props.end)[0]}
        <br />
        {time(props.end)[1].slice(0, 5)}
      </div>
      <div className="italic font-bold  md:pl-32">
        Status:{props.status == "CODING" ? "Started" : "Upcoming"}
      </div>

      <button
        onClick={handleClick}
        className=" inline-block border-2 border-black p-1 rounded-md text-white bg-slate-600 mt-2"
      >
        Go to Contest
      </button>
    </div>
  );
}

export default ContestDetails;
