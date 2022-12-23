import React from "react";
import Resources from "./Resources";
import Study from "./Study";
// route to study and resources

function AllResources() {
  return (
    <div className="bg-dark py-2">
      <div className="bg-white/10 text-center text-white text-xl md:text-2xl font-bold my-2 border-blue-200 border-2 p-4 rounded-lg md:rounded-full">
        Study Resources
        <p className="text-sm md:text-lg font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <Study />
      <div className="bg-white/10 text-center text-white text-xl md:text-2xl font-bold my-2 border-blue-200 border-2 p-4 rounded-lg md:rounded-full">
        Skill Section
        <p className="text-sm md:text-lg font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <Resources />
    </div>
  );
}

export default AllResources;
