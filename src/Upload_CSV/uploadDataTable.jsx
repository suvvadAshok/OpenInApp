
import { Link } from "react-router-dom";
import { LastTwoColumn } from "./LastTwoColumns";

export function UploadDataTable({ csvData }) {
  return (
    <div className="w-[90%]">
      <h2 className="text-lg font-semibold">Uploads</h2>

      <div className="border w-full mt-8 bg-[#F5F5F5] p-8 table border-separate border-spacing-y-4">
        <thead className="p-4">
          <tr>
            <th className="w-[10%] text-start py-2 pl-4">Sl No.</th>
            <th className="w-[20%] text-start py-2">Links</th>
            <th className="w-[15%] text-start py-2">Prefix</th>
            <th className="w-[15%] text-start py-2">Add Tags</th>
            <th className="w-[40%] text-start py-2">Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((data) => (
            <tr key={data.id} className="bg-white">
              <td className="py-4 rounded-l-xl pl-4">{data.id}</td>
              <td className="py-4">
                <Link to={data.links} className="underline text-[#5B93FF]">
                  {data.links}
                </Link>
              </td>
              <td className="py-4">{data.prefix}</td>
              <LastTwoColumn />
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
