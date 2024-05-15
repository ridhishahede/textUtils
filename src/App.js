import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-5">
        <TextForm heading="Welcome to TextUtlis"></TextForm>
      </div>
    </>
  );
}

export default App;
