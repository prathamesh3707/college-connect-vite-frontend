import { Fragment } from "react";
import Events from "./Events";
import Workshops from "./Workshops";
import Branches from "./Branches";
import Blocks from "./block/Blocks";

function Home() {
  return (
    <Fragment>
      <Blocks />

      <div className="bg-[url('/bg1.jpg')] bg-cover overflow-y-scroll no-scrollbar">
        <div className="flex lg:flex-row flex-col lg:p-16 ">
          <Events />
          <Workshops />
        </div>
        <div className="p-6 ">
          <Branches />
        </div>
      </div>

      <div className="h-1/2 hover:underline cursor-pointer p-4 text-center text-2xl bg-black text-white">
        Developed by PK
      </div>
    </Fragment>
  );
}

export default Home;
