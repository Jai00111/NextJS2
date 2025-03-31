// "use client"
// import { useState } from "react";
// import Link from "next/link"
// import page from "./page.module.css"
// export default function Home() {
//   let [color,setColor]=useState(true);
  
//   return (
//     <>
//         <h1 className={color===true? page.red : page.main}>This is the Main Page</h1>
//         <h2 style={{backgroundColor:color===true?"red":"green"}}>heading 2</h2>
//         <button onClick={()=>setColor(!color)}>toggle color</button>
//         <Link href={"/productlist"} style={{color:"blue"}}> Go to Product list</Link><br></br>
//         <Link href={"/conditionalstyle"} style={{color:"blue"}}> Go to conditionalstyle</Link>
//         <Image src={"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg"}/>
//     </>
//   );
// }
import Link from "next/link"
import Image from "next/image"
import { Inconsolata } from "next/font/google";
const inconsolata=Inconsolata({
  weight:'200',
  subsets:['latin'],
  display:'swap',
})
export default function Home() {
  
  return (
    <>
        <h1 className={inconsolata.className} >This is the Main Page</h1>
        <Image alt="" src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg"
        width={100}
        height={100}/>
        <Link href={"/productlist"} style={{color:"blue"}}> Go to Product list</Link><br></br>
        <Link href={"/conditionalstyle"} style={{color:"blue"}}> Go to conditionalstyle</Link>
        <h2 className={inconsolata.className}>Font with next js font features</h2>
    </>
  );
}

