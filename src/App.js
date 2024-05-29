import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';
import React, { useState } from 'react'
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5">
        <TextForm heading="Welcome to TextUtlis" mode={mode} ></TextForm>
      </div>
      <div className="container my-5">
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
