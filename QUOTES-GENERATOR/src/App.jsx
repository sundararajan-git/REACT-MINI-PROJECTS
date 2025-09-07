import { useState, useEffect } from "react";

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
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <q>{quoteData?.quote}</q>
          <p>{quoteData?.author}</p>
        </div>
      )}
      {isError ? <p>Error</p> : null}
      <button type="button" onClick={getQuote}>
        Random
      </button>
    </div>
  );
};

export default App;
