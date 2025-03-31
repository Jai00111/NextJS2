"use client"
import { useState } from "react";
import style from "./style.module.css"
export default function ConditionalStyle(){
    let[color, setColor]=useState("red")
        
    return(

        <>
        <h1 className={color==="red"?style.main:style.blue}>Condition with style</h1>
        <button onClick={()=>setColor("blue")}>toggle color</button>
        </>
    )
}