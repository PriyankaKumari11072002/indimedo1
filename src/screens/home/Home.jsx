import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { productApi, useLazyProductDataByQueryQuery, useProductDtaQuery } from '../../services/apis/product';
// import Example from '../../components/crousal/crousal';
// import PrimarySearchAppBar from '../../components/navbar/Navbar';
// import Design from '../../components/Doors/Design';
// import  CommonSliderComponent from '../../components/productCard/CommonSliderComponent';
import Header from '../../components/header/header';
import SliderComponent from '../../components/slider/slider';
import Navbar from '../../components/navbar/Navbar';


// import Banner from '../components/crousal/Banner/Banner';

function Home() {
    const {data}  = useProductDtaQuery()
 

  // const [productData, getResultProduct] = useLazyProductDataByQueryQuery();
  //  const search = useSelector((state)=>state.search)

  //  console.log(search,getResultProduct,"homePage")
  
  //  useEffect(()=>{
  //   productData(search?.searchTerm);
  //  },[search?.searchTerm])

  return (
    <div >
      {/* <PrimarySearchAppBar/>
      <Example/>
      <CommonSliderComponent/> */}
      <div     style={{overflowX:'hidden',width:"100%"}}>

     <div  style={{width:"100%"}}>
     
      <Header/>
      <Navbar/>
      </div> 

     <div  style={{width:"90%",marginLeft:"70px"}}>
     <SliderComponent  title="TRENDING TODAY"  api={data}/>

<SliderComponent  title="PERSONAL CARE"  api={data}/>
<SliderComponent  title="SKIN CARE"  api={data}/>
<SliderComponent  title="HAIR CARE"  api={data}/>
<SliderComponent  title="TEST STRIPS"  api={data}/>
     </div>
    
      </div>
    

{/* <Design/> */}
{/* <Banner/> */}
{/* <CommonSliderComponent/> */}
    </div>
  )
}

export default Home