import logo from './logo.svg';
import './App.css';
import "./css/App.css";

import Navbar from "./Nav/Navbar.js"
import Detail from "./Content/Detail.js"


function App() {
  return (
    <div className="main-fragment">
      <Navbar></Navbar>
      <Detail num={1}></Detail>
      <Detail></Detail>
    </div>
    
  );
}

export default App;
