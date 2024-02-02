import React from "react";
import { addListData } from "./data";
import { Dropdown } from "./dropdown";
import cross from "../assets/cross.svg";

export function LastTwoColumn() {
  const [addList, setAddList] = React.useState(addListData);

  return (
    <>
      <td className="py-4">
        <Dropdown addList={addList} setAddList={setAddList} />
      </td>
      <td className="py-4 pr-4 rounded-r-xl overflow-x-auto">
        {addList && (
          <div className="flex gap-1 rounded-r-xl">
            {addList
              .filter((i) => i.state)
              .map((tag, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 bg-[#605BFF] p-2 px-3  rounded-lg text-white"
                  onClick={() => {
                    const updatedList = addList.map((item) =>
                      item.option === tag.option
                        ? { ...item, state: false }
                        : item
                    );
                    setAddList(updatedList);
                  }}
                >
                  <p>{tag.option}</p>
                  <img src={cross} alt="cross" className="h-4 w-4" />
                </button>
              ))}
          </div>
        )}
      </td>
    </>
  );
}
