import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Design = () => {
    const [click,setClick]  = useState(false)
    const [cardApi,setApi]  = useState([])
    const [cardId,setCardId]  = useState('')

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setApi(json))
  
    },[click])

   console.log( cardId,'cardId')

  return (
    <>
 {/* {image} */}
    <div  style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div>{cardId.title}</div>


    <div>

<div  style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"60px"}}>
<div>card</div>
<div >
   <h1 onClick={()=>setClick(!click)}>+</h1> 

</div>

</div>

{click&&cardApi.map((item)=>(
<>
<div  key={item.id}  onClick={()=>setCardId(item)}>
<img  src={item.image}  width="100px" height="100px"/><h1>{item.title}</h1>
</div>

</>
))}






{/* {click&&cardApi.map((card)=>{
    <>
    <img  src={card.image}  width="100px" height="100px"/>
  <img  src={card.image}/> 
  <h1>{card.title}</h1>
  </>
})} */}






  </div>
    </div>

    
    </>
  )
}

export default Design