import React from "react";

export default function Alert({ alert }) {
  return (
    alert && (
      <div
        className={`mb-4 p-3 rounded ${
          alert.type === "success"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {alert.msg}
      </div>
    )
  );
}
