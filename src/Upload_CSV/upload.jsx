import excel from "../assets/excel.svg";
import upload from "../assets/uploadIcon.svg";
import React from "react";
import Papa from "papaparse";

import { UploadDataTable } from "./uploadDataTable";

export function Upload() {
  const [csvData, setCSVData] = React.useState(null);
  const [fileName, setFileName] = React.useState("");

  function handleFileupload(event) {
    const file = event.target.files[0];
    setFileName(event.target.value);

    Papa.parse(file, {
      complete: (result) => {
        setCSVData(result.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  }

  return (
    <div className="grow flex flex-col justify-center bg-[#FAFAFB] items-center">
      <main className="h-[90vh] grow flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold max-sm:hidden">Upload CSV</h1>
        <div className="w-[596px] h-[360px] bg-white p-4 rounded-xl flex flex-col gap-4">
          <div className="border-dotted border-2 rounded-lg grow flex justify-center items-center flex-col gap-8">
            <img src={excel} alt="excel logo" className="w-8 h-8" />
            {!fileName ? (
              <p>
                drop your excel sheet here or{" "}
                <label htmlFor="excelFile" className="text-[#605BFF]">
                  browse
                </label>
              </p>
            ) : (
              <p>{fileName}</p>
            )}
            <input
              type="file"
              accept=".csv"
              id="excelFile"
              className="hidden"
              onChange={(e) => handleFileupload(e)}
            />
          </div>
          <button
            onClick={() => setFileName(!fileName)}
            className="flex bg-[#605BFF] p-4 gap-2 text-white rounded-lg w-full items-center justify-center"
          >
            <img src={upload} alt="upload" />
            <p>Upload</p>
          </button>
        </div>
      </main>
      {csvData && <UploadDataTable csvData={csvData} />}
    </div>
  );
}
