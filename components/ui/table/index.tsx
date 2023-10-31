import { Medicine } from "@/types/type";

type Props = {
  medicines: Medicine[];
};

export default async function Table({ medicines }: Props) {
  const headers = medicines.length > 0 ? Object.keys(medicines[0]) : [];
  const headerMapping: { [key: string]: string } = {
    title: "薬剤名",
    efficacy: "効能",
    sideEffect: "副作用",
  };

  return (
    <div className="flex justify-center bg-white mx-4 my-2 p-4 shadow-lg rounded-lg">
      <div className="w-full overflow-x-auto">
        <table className="table-fixed w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              {headers?.map((header, index) => (
                <th
                  key={index}
                  className="w-1/4 py-2 px-4 border border-gray-300 text-gray-600"
                >
                  {headerMapping[header] || header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {medicines?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-2 px-4 border border-gray-300"
                  >
                    {row[header as keyof Medicine]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
