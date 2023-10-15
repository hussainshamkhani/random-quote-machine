import { useState } from 'react'
import { FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import quotes from './assets/quotes.json'
import './App.css'



interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const fetchQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };
  

  return ( 
  <div className="background" style={{ backgroundColor: randomColor, transition }}>
    <div id="quote-box">
      <div id="quote-content" style={{ color: randomColor, transition }}>
        
        <h2 id="text">
        <FaQuoteLeft size="30" style={{margingRight: "10px", transition }} />
          {quote.quote}
          <FaQuoteRight size="30" style={{margingLeft: "10px", transition}} />
          </h2>
        
        <h4 id="author">~ {quote.author}</h4>
      </div>
      <div className="buttons">
      <a 
      href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
       id="tweet-quote"
       style={{
        backgroundColor: randomColor,
        marginRight: "10px",
        transition 
       }}
       >
        <FaTwitter color="white"  />
       </a>
       <button id="new-quote" onClick={fetchQuote} style={{ backgroundColor: randomColor, transition }}>New Quote</button>
      </div>
    </div>
  </div>
  );
}

export default App
