import React, { useEffect, useRef, useState } from 'react';
import './WordByWordTyping.css';

const WordByWordTyping = ({ words, typingSpeed, wordDelay }) => {
    const wordsRef = useRef(null);
    const [currentWord, setCurrentWord] = useState(0);
    const [currentLetters, setCurrentLetters] = useState([]);

    useEffect(() => {
        if (currentWord < words.length) {
            const letters = words[currentWord].split('');
            setCurrentLetters(letters);
            setCurrentWord(currentWord + 1);
        }
    }, [currentWord, words]);

    useEffect(() => {
        const wordsArray = wordsRef.current.getElementsByClassName('word');
        const currentWordElement = wordsArray[currentWord - 1];

        if (currentWordElement && currentLetters.length > 0) {
            const letterElements = currentWordElement.getElementsByClassName('letter');

            for (let i = 0; i < currentLetters.length; i++) {
                setTimeout(() => {
                    letterElements[i].classList.add('letter-by-letter');
                }, typingSpeed * i);
            }

            setTimeout(() => {
                for (let i = 0; i < currentLetters.length; i++) {
                    letterElements[i].classList.remove('letter-by-letter');
                }
            }, typingSpeed * currentLetters.length);
        }
    }, [currentLetters, currentWord, typingSpeed]);

    return (
        <div className="typing-effect" ref={wordsRef}>
            {words.map((word, index) => (
                <span className="word" key={index}>
                    {word.split('').map((letter, i) => (
                        <span className="letter" key={i}>{letter}</span>
                    ))}
                </span>
            ))}
        </div>
    );
};

export default WordByWordTyping;
