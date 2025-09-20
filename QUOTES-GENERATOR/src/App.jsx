import { useState, useEffect } from "react";
import "./App.css";
import { BsChatSquareQuote } from "react-icons/bs";

const App = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    setIsLoading(true);
    fetch("https://random-quotes-freeapi.vercel.app/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuoteData({ quote: data.quote, author: data.author });
        if (isError) {
          setIsError(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="w-ful h-screen flex items-center justify-center bg-gray-100">
      <div className="w-md p-6 bg-white shadow-lg rounded-lg text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BsChatSquareQuote className="text-2xl" />
          <h2 className="text-purple-600  font-semibold text-2xl">
            Quote Generator
          </h2>
        </div>
        {isLoading ? (
          <p className="text-gray-500 animate-pulse p-10">Loading...</p>
        ) : isError ? (
          <p className="text-red-500 font-semibold">Something went wrong!</p>
        ) : (
          <div className="mb-4">
            <q className="text-lg italic text-gray-700">{quoteData?.quote}</q>
            <p className="mt-2 font-semibold text-gray-800">
              - {quoteData?.author}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={getQuote}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md font-semibold mt-4 cursor-pointer"
        >
          Random
        </button>
      </div>
    </section>
  );
};

export default App;
