import React from "react";
import Block from "./Block";

function BLocks() {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar bg-[url('/gif1.gif')] bg-cover">
      <div className="lg:space-x-52 flex flex-col lg:flex-row">
        <Block
          name="Contests"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZzwNJTIIlFsO9fwkfZTZFniOrLjSfld0rAM1rz3Yap71fZrozre9S3klTRZMKxn1doI&usqp=CAU"
        />
        <Block
          name="Clubs"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZzwNJTIIlFsO9fwkfZTZFniOrLjSfld0rAM1rz3Yap71fZrozre9S3klTRZMKxn1doI&usqp=CAU"
        />
        <Block
          name="Placements"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZzwNJTIIlFsO9fwkfZTZFniOrLjSfld0rAM1rz3Yap71fZrozre9S3klTRZMKxn1doI&usqp=CAU"
        />
      </div>
      <div className="lg:space-x-52 flex flex-col lg:flex-row">
        <Block
          name="Alumni"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZzwNJTIIlFsO9fwkfZTZFniOrLjSfld0rAM1rz3Yap71fZrozre9S3klTRZMKxn1doI&usqp=CAU"
        />
        <Block
          name="Projects"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZzwNJTIIlFsO9fwkfZTZFniOrLjSfld0rAM1rz3Yap71fZrozre9S3klTRZMKxn1doI&usqp=CAU"
        />
        <Block
          name="Internships"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZzwNJTIIlFsO9fwkfZTZFniOrLjSfld0rAM1rz3Yap71fZrozre9S3klTRZMKxn1doI&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default BLocks;
