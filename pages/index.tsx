import type { NextPage } from "next";
import { useEffect } from "react";

import { fireworks } from "../Extras";

const Home: NextPage = () => {
  useEffect(() => {
    fireworks()
  }, []);
  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-100 flex h-screen bg-blue-200 justify-center items-center">
      <div className="bg-gradient-to-l from-lime-100 to-white h-1/3 w-6/12 flex flex-col justify-center items-center rounded-lg">
        <h1 className="font-mono text-3xl md:text-5xl lg:text-7xl text-amber-400">COMING</h1>
        <h1 className="font-mono text-3xl md:text-5xl lg:text-7xl">SOON</h1>
      </div>
    </div>
  );
};

export default Home;
