// "use client"
// import { useEffect, useState } from "react"

import ProductDetails from "./prodectdetails";

// export default function ProductList(){
//     let [product , setProduct]=useState([])

//     useEffect(()=>{
//         async function fetchfnction(){
//             let data= await fetch("https://jsonexamples.com/products");
//             data= await data.json();
//             setProduct(data.products)
//         }
//         fetchfnction();
        
//     },[])
//     return(
//         <>
//         <h1>
//         Product List
//         </h1>
//         {product.map((items,id)=>(<h4 key={id}>Name:{items.title}</h4>))}
//         </>
//     )
// }

async function productdetails(){
    let data=await fetch("https://jsonexamples.com/products");
    data=await data.json();
    return data.products;
}

export default async function ProductList(){
    let prod= await productdetails();
    return(
        <>
        <h1>
        These are the Products:-
        </h1>
        <div>
        {
            prod.map((item,id)=>{
               return <h5 style={{marginBottom:"20px"}} key={id}>Title: {item.title}---<ProductDetails details={item.price}/></h5>
            })
        }
            </div>&nbsp;&nbsp;
        </>
    )
}