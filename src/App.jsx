import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Icoins from "./components/Icons"
// import Images from "./components/Images"
import Footer from "./components/Footer"
// import { useState } from "react"
import { backimge } from "./assets/img"
import Pictures from "./components/Pictures"
function App(){
    return(
        <>
        {/* <img src={backimge}/> */}
        <Navbar/>
        <Header />
        <Icoins />
        <Pictures />
        {/* <Images /> */}
        <Footer/>
   
        </>

    )

}
export default App