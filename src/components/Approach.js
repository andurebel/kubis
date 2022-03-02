import React from "react";
import { Hexagon } from "./Hexagon";

export const Approach = () => {
  return (
    <>
      <div className="w-full bg-orange-100 ">
        <div className="container mx-auto py-20">
          <h3 className="max-w-2xl text-xl text-center mx-auto font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s',when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h3>
        </div>
        <div className="container mx-auto py-20 flex flex-col md:flex-row items-center justify-between px-10">
          <Hexagon title="What is Lorem Ipsum?" />
          <Hexagon title="Why do we use it?" />
          <Hexagon title="Where does it come from?" />
        </div>
      </div>
    </>
  );
};

export default Approach;
