import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { accordionData } from "../Data/accordionData";

const Accordions = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const onMultiSelction = (id) => {
    const copyMultiple = [...multiSelected];
    const indexOfSelected = copyMultiple.indexOf(id);
    if (indexOfSelected === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(indexOfSelected, 1);
    }
    setMultiSelected(copyMultiple);
  };
  const singleAccordionOpen = (idToOpen) => {
    selectedId === idToOpen ? setSelectedId(null) : setSelectedId(idToOpen);
  };

  return (
    <div className="flex flex-col items-center w-full text-white  ">
      <div className="w-full flex justify-center py-3">
        <button
          className="bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-40 text-white text-semibold text-sm px-3 py-2 rounded-lg shadow-md shadow-black"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "Enable Single Selection"
            : "Enable Multi Selection"}
        </button>
      </div>
      {accordionData?.map((data) => (
        <div
          className="bg-red w-3/4 shadow-md shadow-orange-800 my-3 p-3"
          key={data?._id}
        >
          <div className="flex items-center ">
            <h1 className="">{data?.question}</h1>{" "}
            <span
              className="mx-4 p-2 rounded-full cursor-pointer hover:bg-orange-500 hover:bg-opacity-25"
              onClick={
                enableMultiSelection
                  ? () => onMultiSelction(data._id)
                  : () => singleAccordionOpen(data._id)
              }
            >
              <FaAngleDown className="text-xl" />
            </span>
          </div>
          {enableMultiSelection && multiSelected.indexOf(data._id) !== -1 && (
            <p className="py-3 ">{data?.answer}</p>
          )}
          {selectedId === data?._id && <p className="py-3 ">{data?.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
