import Home from "./components/Home"
import NavBar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/contact"
import Experience from "./components/Experience"
import FixedButton from "./components/FixedButton"



function App() {
  
  return (
    <div className="overflow-hidden">
    
    <NavBar/>
    <Home/>
  
    <About/>
      
    <Experience/>
    <Portfolio/>
    <FixedButton/>
    <Contact/>

    </div>
  )
}

export default App
