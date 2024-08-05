import React from "react";
import { features } from "../components/Data/Features";

const Home = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <div class="da relative flex min-h-screen flex-col justify-center overflow-hidden ">
        {features?.map((feature) => (
          <>
            <div class="absolute inset-0 bg-center  "></div>
            <div
              class="group relative m-0 flex h-72 w-96 my-10 rounded-xl shadow-xl ring-gray-900/5 bg-[#030b26]  hover:bg-opacity-25 sm:mx-auto sm:max-w-lg"
              key={feature?._id}
            >
              <div class="z-10 h-full w-full overflow-hidden rounded-xl border  transition duration-300 ease-in-out group-hover:opacity-100 border-gray-700 opacity-70">
                <div className="bg-orange-500 h-20 w-20 opacity-40 absolute right-12 bottom-8 rounded-full" />
                <div className="bg-yellow-500 h-20 w-20 opacity-40 absolute left-24 bottom-40 rounded-full" />

                <div class="absolute  top-28 left-20 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <h1 class="font-serif text-2xl font-bold text-white shadow-xl transition-all duration-200 hover:rotate-6 ease">
                    {feature?.name.toUpperCase()}
                  </h1>

                  <a
                    href={`/${feature?.name}`}
                    class="relative items-center justify-center inline-block p-4 px-5 py-3 my-5 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500 rounded-full blur-md"></span>
                      <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span class="relative text-white ">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
