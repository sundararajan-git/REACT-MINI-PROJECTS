import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    experiences: [{ company: "", role: "", years: "" }],
  });

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const updateExp = (i, k, v) => {
    const ex = [...data.experiences];
    ex[i][k] = v;
    setData((d) => ({ ...d, experiences: ex }));
  };
  const addExp = () =>
    setData((d) => ({
      ...d,
      experiences: [...d.experiences, { company: "", role: "", years: "" }],
    }));

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl mb-4">📑 Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold mb-2">Edit</h2>
          <input
            placeholder="Name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full p-2 mb-2 rounded border dark:bg-gray-700"
          />
          <input
            placeholder="Title"
            value={data.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full p-2 mb-2 rounded border dark:bg-gray-700"
          />
          <input
            placeholder="Email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full p-2 mb-2 rounded border dark:bg-gray-700"
          />
          <input
            placeholder="Phone"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full p-2 mb-2 rounded border dark:bg-gray-700"
          />
          <textarea
            placeholder="Summary"
            value={data.summary}
            onChange={(e) => update("summary", e.target.value)}
            className="w-full p-2 mb-2 rounded border dark:bg-gray-700"
          />

          <h3 className="font-semibold mt-3">Experience</h3>
          {data.experiences.map((exp, i) => (
            <div key={i} className="mb-2">
              <input
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateExp(i, "company", e.target.value)}
                className="w-full p-2 mb-1 rounded border dark:bg-gray-700"
              />
              <input
                placeholder="Role"
                value={exp.role}
                onChange={(e) => updateExp(i, "role", e.target.value)}
                className="w-full p-2 mb-1 rounded border dark:bg-gray-700"
              />
              <input
                placeholder="Years"
                value={exp.years}
                onChange={(e) => updateExp(i, "years", e.target.value)}
                className="w-full p-2 mb-2 rounded border dark:bg-gray-700"
              />
            </div>
          ))}
          <button
            onClick={addExp}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Add Experience
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold mb-2">Preview</h2>
          <div className="pb-4 border-b mb-4">
            <h1 className="text-xl font-bold">{data.name || "Your Name"}</h1>
            <p className="text-sm text-gray-500">{data.title}</p>
            <p className="text-sm">
              {data.email} • {data.phone}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Summary</h3>
            <p className="text-sm">
              {data.summary || "Brief summary about you."}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Experience</h3>
            {data.experiences.map((e, i) => (
              <div key={i} className="mb-2">
                <div className="font-medium">{e.role || "Role"}</div>
                <div className="text-sm text-gray-500">
                  {e.company} • {e.years}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
