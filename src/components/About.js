import React from 'react';
import '../styles/About.css';

export default function About({ mode }) {
  const textColorClass = mode === 'light' ? 'text-dark' : 'text-light';
  const bgColorClass = mode === 'light' ? 'bg-light' : 'bg-dark';

  return (
    <div id='about' className={`about-container ${textColorClass} ${bgColorClass}`}>
      <h1 className="about-heading">TextUtils Website</h1>
      <p className={`about-description ${textColorClass}`}>
        The website offers a simple and user-friendly interface where you can input any text and use various tools to manipulate and analyze it. Here are the main features of the website:
      </p>
      <ul className={`about-features ${textColorClass}`}>
        <li className={`${textColorClass}`}>Convert to Uppercase: Change all the letters in your text to uppercase.</li>
        <li className={`${textColorClass}`}>Convert to Lowercase: Change all the letters in your text to lowercase.</li>
        <li className={`${textColorClass}`}>Copy the Text: Easily copy your text to the clipboard with a click of a button.</li>
        <li className={`${textColorClass}`}>Clear the Text: Remove all the text from the input area.</li>
        <li className={`${textColorClass}`}>Count Syllables: Calculate the number of syllables in your text.</li>
      </ul>
      <p className={`about-info ${textColorClass}`}>
        Additionally, the website provides real-time information about your text:
      </p>
      <ul className={`about-info-list ${textColorClass}`}>
        <li className={`${textColorClass}`}>Number of Words: Displays the total word count.</li>
        <li className={`${textColorClass}`}>Number of Characters: Shows the total number of characters.</li>
        <li className={`${textColorClass}`}>Reading Time: Estimates the time required to read the text.</li>
        <li className={`${textColorClass}`}>Text Preview: Shows a preview of the text as you type.</li>
      </ul>
    </div>
  );
}
