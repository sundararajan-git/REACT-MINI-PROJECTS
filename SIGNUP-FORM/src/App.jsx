import React, { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate form submission
    alert(
      `${isLogin ? "Login" : "Signup"} Successful!\nEmail: ${formData.email}`
    );
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
            />
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setFormData({ email: "", password: "", confirmPassword: "" });
            }}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
