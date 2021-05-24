import React, {useState, useEffect, useRef} from 'react';
import './styles.css'; 

const App = () => {
  const [quotes, setQuotes] = useState('');
  const textRef = useRef();

  let colours = ['#ffff00', '#90ee90', '#ffa500', '#ff68ff', 'a9a9e7']

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color = colours[Math.floor(Math.random() * colours.length)];
  }, [quotes]);

  return (
    <div className="App">
      <div className='quote'>
        <p ref={textRef}>{quotes.text}</p>
        <p>Author: {quotes.author}</p>
        <div className='btnContainer'>
          <button className='btn' onClick={getQuote}>Get Quote</button>
          <a href={`https://twitter.com/intent/tweet?text=${quotes.text} -${quotes.author}`} target='_blank' rel='noopener noreferrer' className='btn'>Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default App;
