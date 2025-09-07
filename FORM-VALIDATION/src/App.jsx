import React, { useReducer, useState } from "react";
import "./App.css";

// set user ------------
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
    <>
      <div className="container">
        <form>
          <h1>Survey Form</h1>
          <label htmlFor="name" className="ti">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="your name"
            onChange={(e) => {
              setuser({ type: "name", data: e });
            }}
          />
          <p>{out.name}</p>
          <label htmlFor="email" className="ti">
            Eamil
          </label>
          <input
            type="email"
            id="email"
            placeholder="sample@gamil.com"
            onChange={(e) => setuser({ type: "email", data: e })}
          />
          <p>{out.email}</p>
          <label htmlFor="age" className="ti">
            Age
          </label>
          <input
            type="text"
            id="age"
            placeholder="your age"
            onChange={(e) => setuser({ type: "age", data: e })}
          />
          <p>{out.age}</p>
          <label htmlFor="select" className="ti">
            Which option best describes you?
          </label>
          <select id="select">
            <option>Student</option>
            <option>Professtional</option>
            <option>Freelancer</option>
            <option>Others</option>
          </select>
          <label htmlFor="radio1" className="ti">
            Would you recommend this website to a friend?
          </label>
          <div className="radio">
            <label htmlFor="radio1">
              <input type="radio" name="yes" id="radio1" />
              Yes
            </label>
            <br />
            <label htmlFor="radio2">
              <input type="radio" id="radio2" name="yes" />
              No
            </label>
            <br />
            <label htmlFor="radio3">
              <input type="radio" id="radio3" name="yes" />
              May be
            </label>
            <br />
          </div>
          <label htmlFor="c" className="ti">
            Anguages and Frameworks known (Check all that apply)
          </label>
          <div className="checkbox">
            <input type="checkbox" id="c" />
            <label htmlFor="c"> C</label>
            <br />
            <input type="checkbox" id="c++" />
            <label htmlFor="c++"> C+</label>
            <br />
            <input type="checkbox" id="c#" />
            <label htmlFor="c#"> C#</label>
            <br />
            <input type="checkbox" id="python" />
            <label htmlFor="python"> Python</label>
            <br />
            <input type="checkbox" id="java" />
            <label htmlFor="java"> Java</label>
            <br />
            <input type="checkbox" id="ruby" />
            <label htmlFor="ruby"> Ruby</label>
            <br />
            <input type="checkbox" id="js" />
            <label htmlFor="js"> Javascript</label>
            <br />
          </div>
          <label htmlFor="comment" className="ti">
            Any comments or suggestions
          </label>
          <div className="comments">
            <textarea
              id="comment"
              placeholder="comments......."
              onChange={(e) => setuser({ type: "comment", data: e })}
            ></textarea>
          </div>
          <p>{out.comment}</p>
          <p></p>
          <button type="submit" onClick={validation}>
            Submit
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default App;
