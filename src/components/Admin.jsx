import React from "react";

function Admin() {
  return (
    <div>
      <div className="border-black border-2 rounded-md h-full w-5/6 mt-5 mx-auto bg-blue-500">
        <div>
          <select className="rounded-lg ring-4 ring-black mx-64 my-8">
            <option value="" disabled selected hidden>
              Choose a Post type
            </option>
            <option classname="border-black border-2 rounded-lg" value="event">
              Event
            </option>
            <option
              classname="border-black border-2 rounded-lg"
              value="workshop"
            >
              Workshop
            </option>
            <option classname="border-black border-2 rounded-lg" value="notice">
              Notice
            </option>
          </select>

          <h1 className="mx-12 font-bold">Heading</h1>
          <textarea className="mx-12 border-black border-2 h-12 w-96 rounded-md"></textarea>

          <h1 className="mx-12 font-bold">Description</h1>
          <textarea
            className="mx-12 border-black border-2 h-16 w-96 rounded-md"
            name="w3review"
            rows="3"
            cols="50"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Admin;
