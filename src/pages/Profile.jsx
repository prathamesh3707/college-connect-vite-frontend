import React from "react";

function Profile() {
  return (
    <div className="h-3/4 w-5/6 mx-auto my-4 border-2 border-black hover:bg-blue-50">
      {/* basic info */}
      <div className="flex flex-col lg:flex-row">
        <img
          src="data:image/jpeg;base64,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"
          className="rounded-full border-2 border-black h-32 ml-4 w-32 lg:ml-8 mt-6"
        ></img>
        <div className="mx-auto mt-10 text-xl lg:text-3xl lg:border-l-2 border-slate-400">
          <p>Elon Musk</p>
          <p>1RV20EC007</p>
          <p>Electronics and Communication Engineering</p>
        </div>
      </div>
      {/* bio */}
      <div className="mt-8 px-8 mx-auto border-b-2 border-slate-200">
        <p>Heart_Hacker</p>
        <p>Tesla Ka Don</p>
        <p>Single by Choice</p>
        <p>Cake Murder 28th June</p>
      </div>
      {/* clubs */}
      <div className="flex my-4 md:flex-row flex-col  border-b-2 border-slate-200">
        <div className="inline-block bg-blue-500 text-white mb-2 mx-4 rounded-md p-2 ">
          Ecell
        </div>
        <div className="inline-block bg-blue-500 text-white mb-2 mx-4 rounded-md p-2 ">
          Coding
        </div>
        <div className="inline-block bg-blue-500 text-white mb-2 mx-4 rounded-md p-2 ">
          Ashwa Racing
        </div>
        <div className="inline-block bg-blue-500 text-white mb-2 mx-4 rounded-md p-2 ">
          Frequency
        </div>
        <div className="inline-block bg-blue-500 text-white mb-2 mx-4 rounded-md p-2 ">
          Jatayu
        </div>
      </div>
      {/* contributions */}
      <div className="w-5/6 mx-auto border-2 border-slate-400 rounded-lg my-4 ">
        <h1 className="font-semibold text-2xl mb-2 mx-auto p-4">
          Contributions
        </h1>
        <p className="text-lg underline lg:ml-12 p-2">Articles:5</p>
        <p className="text-lg underline lg:ml-12 p-2">Projects:2</p>
        <p className="text-lg underline lg:ml-12 p-2">Courses/Content:1</p>
      </div>
      {/* contact */}
      <div className="p-4">
        <p>Email: elonmusk.ec20@rvce.edu.in</p>
        <p>Phone: 9355472926</p>
      </div>
    </div>
  );
}

export default Profile;
