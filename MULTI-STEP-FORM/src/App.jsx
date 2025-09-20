import { useState } from "react";
import "./App.css";
import { MdFormatOverline } from "react-icons/md";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MdFormatOverline className="text-2xl text-purple-600" />
          <h1 className="text-2xl font-bold text-center">Multi-Step Form</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {step === 1 && (
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
          )}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
