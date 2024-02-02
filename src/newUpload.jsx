import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import excel from "./assets/excel.svg";
import upload from "./assets/uploadIcon.svg";
import React from "react";
import Papa from "papaparse";
import downArrow from "./assets/downArrow.svg";
import { AddListProvider, useAddListContext } from "./uploadUseContext";

const addListData = [
  { option: "Technology", state: false },
  { option: "Fashion", state: false },
  { option: "Food", state: false },
  { option: "Travel", state: false },
  { option: "Sports", state: false },
  { option: "Music", state: false },
  { option: "Art", state: false },
  { option: "Health", state: false },
  { option: "Education", state: false },
  { option: "Finance", state: false },
];

export function Upload() {
  const [csvData, setCSVData] = React.useState(null);
  const [addList, setAddList] = React.useState(addListData);

  function handleFileupload() {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        setCSVData(result.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  }

  return (
    <AddListProvider>
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="grow">
          <Navbar />

          <main className="bg-[#FAFAFB] flex flex-col justify-center items-center">
            <div className="max-w-[596px] w-full bg-white p-4 rounded-xl">
              <div className="border-dotted border-2 flex justify-center items-center flex-col">
                <img src={excel} alt="excel logo" className="w-8 h-8" />
                <p>
                  drop your excel sheet here or{" "}
                  <label htmlFor="excelFile">browse</label>
                </p>
                <input
                  type="file"
                  accept=".csv"
                  id="excelFile"
                  className="hidden"
                  onChange={handleFileupload}
                />
              </div>
              <button className="flex bg-[#605BFF] w-full items-center justify-center">
                <img src={upload} alt="upload" />
                <p>Upload</p>
              </button>
            </div>

            {csvData && (
              <div>
                <h2>Uploads</h2>
                {/* <pre>{JSON.stringify(csvData, null, 2)}</pre> */}

                <table>
                  <thead>
                    <tr>
                      {Object.keys(csvData[0]).map((id, index) => (
                        <th key={index}>{id}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {csvData.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                          <a href={data.links}>{data.links}</a>
                        </td>
                        <td>{data.prefix}</td>
                        <td>
                          <Dropdown />
                        </td>
                        <td>
                          {addList && (
                            <div className="flex">
                              {addList
                                .filter((i) => i.state)
                                .map((tag, i) => (
                                  <p key={i}>{tag.option}</p>
                                ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </main>
        </div>
      </div>
    </AddListProvider>
  );
}

function Dropdown() {
  const { addList, setAddList } = useAddListContext();
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <>
      <div className="flex" onClick={() => setShowOptions(!showOptions)}>
        <p>Select Tags</p>
        <img src={downArrow} alt="down arrow" />
      </div>

      {showOptions && (
        <ul>
          {addList &&
            addList.map((opt) => (
              <li
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
