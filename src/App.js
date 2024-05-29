import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const displayMe = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      displayMe("Dark Mode Enabled, Toggle again to disable!" , "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayMe("Light Mode Enabled, Toggle again to disable!" , "success");
    }
  };
  

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Routes>
          <Route exact path='/' element={<TextForm showAlert={displayMe} heading="Welcome to TextUtlis" mode={mode} ></TextForm>} />
          <Route path='/about' element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
