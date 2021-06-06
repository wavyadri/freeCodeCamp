import './App.css';
import React, {useState, useEffect} from 'react'
import {FaQuoteLeft} from 'react-icons/fa';
import Footer from "./Footer"

const url = 'https://type.fit/api/quotes';

const colourList = ["#638475","#90e39a","#ddf093","#f6d0b1","#ce4760","#ae8ca3","#d4c5e2", "#DB995A"]

const App2 = () => {
    const [loading, setLoading] = useState(false);
    const [colour, setColour] = useState('#DB995A')
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetchQuotes()
        }, 2000)
        
    }, [])

    // manual delay to see preloader
    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            fetchQuotes()
        }, 2000)
    }

    const fetchQuotes = async () => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const allQuotes = await res.json();
            const index = random(allQuotes);
            setQuote(allQuotes[index].text);
            setAuthor(allQuotes[index].author);

            const indexColour  = random(colourList);
            setColour(colourList[indexColour]);
        } catch (err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const random = (array) => {
        return Math.floor(Math.random() * array.length);
    }
    
    return (
            <body id="quote-body" style={{backgroundColor: colour}}>
                <div id='quote-box'>
                    {loading ? (
                    <div id="quote-loading">
                        <FaQuoteLeft id='waiting'/>
                    </div>) : (
                    <div id="quote-text">
                        <p id='text'>{quote}</p>
                        <p id='author'>{author}</p>
                    </div>
                    )}
                    <div id="quote-buttons">
                        <button style={{backgroundColor: colour}}  id="tweet-quote"><a target="_blank" href={`https://twitter.com/intent/tweet?text=${quote} -${author}`}>tweet</a></button>
                        <button style={{backgroundColor: colour}} id="new-quote" onClick={handleClick}>new quote</button>
                    </div>
                </div>
                <Footer/>
            </body>
    )
}

export default App2