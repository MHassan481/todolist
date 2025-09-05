import React from "react";

const FormikFormData = () => {
  const formDataList = JSON.parse(localStorage.getItem("formDataList")) || [];

  if (formDataList.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">No data submitted yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Submitted Entries
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Street</th>
                <th className="px-4 py-2 border">City</th>
                <th className="px-4 py-2 border">Skills</th>
              </tr>
            </thead>
            <tbody>
              {formDataList.map((data, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{data.name}</td>
                  <td className="px-4 py-2 border">{data.email}</td>
                  <td className="px-4 py-2 border">{data.address.street}</td>
                  <td className="px-4 py-2 border">{data.address.city}</td>
                  <td className="px-4 py-2 border">
                    <ul className="list-disc list-inside space-y-1">
                      {data.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FormikFormData;
