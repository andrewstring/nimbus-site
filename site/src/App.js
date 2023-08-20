import logo from './logo.svg';
import './App.css';
import "./css/App.css";

import Navbar from "./Nav/Navbar.js"
import Detail from "./Content/Detail.js"
import Find from './Content/Find';



function App() {
  return (
    <div className="main-fragment">
      <Navbar></Navbar>
      <Detail num={1}></Detail>
      <Detail></Detail>
      <Find></Find>
    </div>
    
  );
}

export default App;
