import React, { Suspense, useEffect, useState } from "react";
import {
  useLazyProductDataByQueryQuery,
  useProductDtaQuery,
} from "./services/apis/product";
import {
  useUserLoginMutation,
  useUserRegistrationMutation,
} from "./services/apis/user";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setCredentials } from "./redux/features/authSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimarySearchAppBar from "./components/navbar/Navbar";
import ProductPage from "./screens/product/product";
import ProductDetails from "./screens/product/productDetails";
import ProductCard from "./ProductCard/ProductCard";
import Home from "./screens/home/Home";
import ProductCardDetails from "./screens/productCardDetails/productCardDetails";

export default function App() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { data, error, isLoading } = useProductDtaQuery();
  const [userRegistration, userRegistrationResponse] =
    useUserRegistrationMutation();
  const [login, userLoginResponse] = useUserLoginMutation();
  const [productData, getResultProduct] = useLazyProductDataByQueryQuery();

  // useEffect(() => {
  //   const data = {
  //     firstName: "priyanka",
  //     lastName: "kumari",
  //     email: "priyanka+2@gmail.com",
  //     password: "priyanka@123",
  //     mobile: "1452368655",
  //   };
  //   userRegistration(data);
  // }, []);

  // useEffect(() => {
  //   const data = {
  //     email: "amit@gmail.com",
  //     password: "amit@123",
  //   };
  //   login(data).then(({data})=>{
  //     dispatch(setCredentials({action:data}))
  //     localStorage.setItem('userData', JSON.stringify(data))
  //   })
  // }, []);

  // useEffect(() => {
  //   productData(search);
  // }, [search]);

  // const handleSearch = debounce((e) => {
  //   setSearch(e.target.value);
  // }, 500);


  // console.log(getResultProduct,"getResultProduct")

  return (
    <React.Fragment>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <input
        type="text"
        className="rounded border px-4 my-3"
        onChange={handleSearch}
        placeholder="Search Product"
      ></input> */}
      <BrowserRouter>
    
   <Routes>
   <Route path="/" element={<Suspense><Home/></Suspense>}/>
{/* 
   <Route path='/users/:id' element={<SearchMedicineList/>}/> */}
   {/* <Route path='/product' element={<ProductPage/>}/>
   <Route path='product/:id' element={<ProductDetails/>}/>  */}

  <Route path='/product' element={<ProductCard/>}/>
   <Route path='product/:id' element={<ProductCardDetails/>}/> 

 
   </Routes>
   </BrowserRouter>

    </React.Fragment>
  );
}
