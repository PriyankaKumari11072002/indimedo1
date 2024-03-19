import React, { useEffect, useState } from 'react'

export const useProduct = () => {
    const [product,setProduct]  = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProduct(json))
  
    },[])

  


  return {product}
}

