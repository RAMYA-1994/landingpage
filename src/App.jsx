import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import { useState } from "react"
import { backimge } from "./assets/img"
function App(){
    return(
        <>
        <img src={backimge}/>
        <Navbar/>
        <Header/>
       <Footer/>
   
        </>

    )

}
export default App