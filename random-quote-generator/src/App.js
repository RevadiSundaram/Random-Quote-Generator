import React, { useEffect, useState } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";
let data;
const randomNo = () => Math.floor(Math.random() * data.length) + 1;

export default function App() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    getQuotes();
  }, []);

  async function getQuotes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setQuotes(data[randomNo()]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1 className="heading">Quote Generator </h1>
      <div className="box">
        <p className="quote"> {quotes.text}</p>
        <p className="author">
          {" "}
          -{quotes.author ? quotes.author : "Anonymous"}
        </p>
        <button className="button" onClick={getQuotes}>
          New Quote
        </button>
      </div>
    </div>
  );
}
