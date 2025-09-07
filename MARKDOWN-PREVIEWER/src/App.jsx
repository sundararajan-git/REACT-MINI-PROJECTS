import React, { useState } from "react";
import { marked } from "marked";

export default function App() {
  const [markdown, setMarkdown] = useState("# Hello Markdown!");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        📝 Markdown Previewer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          className="w-full p-4 border rounded-lg dark:bg-gray-800 dark:text-gray-100"
          rows="15"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>

        <div className="w-full p-4 border rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 overflow-auto">
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    </div>
  );
}
