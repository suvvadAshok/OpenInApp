import downArrow from "../assets/downArrow.svg";
import React from "react";

export function Dropdown({ addList, setAddList }) {
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <>
      <div
        className="flex relative border-[1px] border-[#f2f2f2] justify-around rounded-lg p-2"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p>Select Tags</p>
        <img src={downArrow} alt="down arrow" />
      </div>

      {showOptions && (
        <ul className="absolute z-10 p-2 w-40 bg-white rounded-lg h-40 cursor-pointer overflow-y-auto">
          {addList &&
            addList.map((opt) => (
              <li
                className="hover:bg-[#F5F5F5] p-1 rounded-lg  ease-out delay-75 transition-all"
                value={opt.option}
                key={opt.option}
                onClick={() => {
                  const updatedList = addList.map((item) =>
                    item.option === opt.option ? { ...item, state: true } : item
                  );
                  setAddList(updatedList);
                }}
              >
                {opt.option}
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
