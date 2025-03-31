"use client"
import { useState } from "react"
export default function ProductDetails({details}){

    let[showPrice, setShowPrice]=useState(false)
    let[btnText,setBtnText]=useState("More")
    function handleClick(){
       setShowPrice(!showPrice);
       setBtnText(!showPrice?"less":"more");
    }

    return(
        <>
        <button onClick={handleClick}>{btnText}</button>
        {showPrice && (<p style={{color:"black"}}>Price is ={details}</p>)}
        </>
    )
}