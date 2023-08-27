import logo from './logo.svg'
import './App.css'
import './css/App.css'

import Navbar from './Components/Nav/Navbar.js'
import Detail from './Components/Content/Detail.js'
import Find from './Components/Content/Find'
import Contact from './Components/Content/Contact'



function App() {
  return (
    <div className="main-fragment">
      <Navbar></Navbar>
      <Detail num={1}></Detail>
      <Detail></Detail>
      <Find></Find>
      <Contact></Contact>
    </div>
    
  )
}

export default App