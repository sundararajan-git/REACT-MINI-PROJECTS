import { useReducer } from "react";
import "./App.css";
import { MdOutlineFormatAlignLeft } from "react-icons/md";

const update = (initialstate, action) => {
  switch (action.type) {
    case "name":
      return { ...initialstate, name: action.data.target.value };
    case "email":
      return { ...initialstate, email: action.data.target.value };
    case "age":
      return { ...initialstate, age: action.data.target.value };
    case "comment":
      return { ...initialstate, comment: action.data.target.value };
  }
};
let initialstate = {
  id: 1,
  name: "",
  email: "",
  age: "",
  Comment: "",
};
let details = { id: 2, name: "", email: "", age: "", comment: "" };
const outupdate = (details, action) => {
  switch (action) {
    case "name":
      return { ...details, name: "plese enter your name..." };
    case "namestring":
      return { ...details, name: "" };
    case "email":
      return { ...details, email: "plese enter your email..." };
    case "emailstring":
      return { ...details, email: "" };
    case "age":
      return { ...details, age: "Plese enter your age..." };
    case "agestring":
      return { ...details, age: "" };
    case "comment":
      return { ...details, comment: "plese enter your comment..." };
    case "commentstring":
      return { ...details, comment: "" };
  }
};

const App = () => {
  const [user, setuser] = useReducer(update, initialstate);
  const [out, setout] = useReducer(outupdate, details);
  const validation = (e) => {
    e.preventDefault();
    if (user.name === undefined || user.name === "") {
      setout("name");
    } else {
      setout("namestring");
    }
    if (user.email === undefined || user.email === "") {
      setout("email");
    } else {
      setout("emailstring");
    }
    if (user.age === undefined || user.age === "") {
      setout("age");
    } else {
      setout("agestring");
    }
    if (user.comment === undefined || user.comment === "") {
      setout("comment");
    } else {
      setout("commentstring");
    }
    console.log(user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <form className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MdOutlineFormatAlignLeft className="text-3xl text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Survey Form
          </h1>
        </div>

        <label
          htmlFor="name"
          className="block text-gray-700 dark:text-gray-300  mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          onChange={(e) => setuser({ type: "name", data: e })}
          className="w-full mb-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <p className="text-sm text-red-500 mb-4">{out.name}</p>

        <label
          htmlFor="email"
          className="block text-gray-700 dark:text-gray-300  mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="sample@gmail.com"
          onChange={(e) => setuser({ type: "email", data: e })}
          className="w-full mb-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <p className="text-sm text-red-500 mb-4">{out.email}</p>

        <label
          htmlFor="age"
          className="block text-gray-700 dark:text-gray-300  mb-2"
        >
          Age
        </label>
        <input
          type="text"
          id="age"
          placeholder="Your age"
          onChange={(e) => setuser({ type: "age", data: e })}
          className="w-full mb-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <p className="text-sm text-red-500 mb-4">{out.age}</p>

        <label
          htmlFor="select"
          className="block text-gray-700 dark:text-gray-300  mb-2"
        >
          Which option best describes you?
        </label>
        <select
          id="select"
          className="w-full mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option>Student</option>
          <option>Professional</option>
          <option>Freelancer</option>
          <option>Others</option>
        </select>

        <label className="block text-gray-700 dark:text-gray-300  mb-2">
          Would you recommend this website to a friend?
        </label>
        <div className="mb-4 space-y-2 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recommend"
              className="form-radio text-purple-500 accent-current"
            />
            <span className="ml-2 text-gray-900 dark:text-gray-100">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recommend"
              className="form-radio text-purple-500 accent-current"
            />
            <span className="ml-2 text-gray-900 dark:text-gray-100">No</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recommend"
              className="form-radio text-purple-500 accent-current"
            />
            <span className="ml-2 text-gray-900 dark:text-gray-100">Maybe</span>
          </label>
        </div>

        <label className="block text-gray-700 dark:text-gray-300  mb-2">
          Languages and Frameworks known (Check all that apply)
        </label>
        <div className="mb-4 flex flex-col">
          {["C", "C++", "C#", "Python", "Java", "Ruby", "JavaScript"].map(
            (lang) => (
              <label key={lang} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-purple-500 accent-current"
                />
                <span className="ml-2 text-gray-900 dark:text-gray-100">
                  {lang}
                </span>
              </label>
            )
          )}
        </div>

        <label
          htmlFor="comment"
          className="block text-gray-700 dark:text-gray-300  mb-2"
        >
          Any comments or suggestions
        </label>
        <textarea
          id="comment"
          placeholder="Comments..."
          onChange={(e) => setuser({ type: "comment", data: e })}
          className="w-full mb-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
        />
        <p className="text-sm text-red-500 mb-4">{out.comment}</p>

        <button
          type="submit"
          onClick={validation}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
