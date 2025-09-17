
// import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import DataTable from './components/admin/DataTable'
import Fillter from './components/admin/Fillter'
import Input from './components/base/Input'

function App() {
  // useEffect(()=>{
  //     const handleRightClick =(e)=>{
  //       e.preventDefault();
  //       alert("Right Click is disabled!")
  //     };
  //     const handleKeyDown =(e)=>{
  //       if(e.key === "F12"){
  //         e.preventDefault();
  //       alert("Dev Tools are disabled!")
  //       }
  //       if(e.ctrlKey && e.shiftKey && e.key === "I"){
  //         e.preventDefault();
  //         alert("Dev Tools are disabled!")
  //       }
  //       if(e.ctrlKey && e.shiftKey && e.key === "J"){
  //         e.preventDefault();
  //         alert("Dev Tools are disabled!")
  //       }
  //       if(e.ctrlKey && e.shiftKey && e.key === "C"){
  //         e.preventDefault();
  //         alert("Dev Tools are disabled!")
  //       }
  //       if(e.ctrlKey && e.key === "u"){
  //         e.preventDefault();
  //         alert("View Source is disabled!")
  //       }
  
  //     };
  //     document.addEventListener("contextmenu",handleRightClick);
  //     document.addEventListener("keydown",handleKeyDown);
  
  //     return() =>{
  //       document.removeEventListener("contextmenu",handleRightClick)
  //       document.removeEventListener("keydown",handleKeyDown)
  //     }
  //   },[]);
    
  return (
    <>
    {/* <Navbar/>
    <Header/>
    <About/>
    <Features/>
    <Contact/>
    <Footer/> */}
    {/* <Fillter/> */}
    <DataTable/>
    </>
  )
}
export default App
