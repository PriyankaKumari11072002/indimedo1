// import React, { Suspense, useEffect, useState } from "react";
// import {
//   useLazyProductDataByQueryQuery,
//   useProductDtaQuery,
// } from "./services/apis/product";
// import {
//   useUserLoginMutation,
//   useUserRegistrationMutation,
// } from "./services/apis/user";
// import { useDispatch } from "react-redux";
// import debounce from "lodash.debounce";
// import { setCredentials } from "./redux/features/authSlice";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PrimarySearchAppBar from "./components/navbar/Navbar";
// import ProductPage from "./screens/product/product";
// import ProductDetails from "./screens/product/productDetails";
// import ProductCard from "./ProductCard/ProductCard";
// import Home from "./screens/home/Home";
// import ProductCardDetails from "./screens/productCardDetails/productCardDetails";
// import Cart from "./screens/Cart/Cart";
// import Cart1 from "./screens/Cart/cart1";
// import Loading from "./components/Loading/loading";
// import Design from "./components/Doors/Design";

// export default function App() {
//   const [search, setSearch] = useState("");
//   const dispatch = useDispatch();
//   const { data, error, isLoading } = useProductDtaQuery();
//   const [userRegistration, userRegistrationResponse] =
//     useUserRegistrationMutation();
//   const [login, userLoginResponse] = useUserLoginMutation();
//   const [productData, getResultProduct] = useLazyProductDataByQueryQuery();

//   // useEffect(() => {
//   //   const data = {
//   //     firstName: "priyanka",
//   //     lastName: "kumari",
//   //     email: "priyanka+2@gmail.com",
//   //     password: "priyanka@123",
//   //     mobile: "1452368655",
//   //   };
//   //   userRegistration(data);
//   // }, []);

//   // useEffect(() => {
//   //   const data = {
//   //     email: "amit@gmail.com",
//   //     password: "amit@123",
//   //   };
//   //   login(data).then(({data})=>{
//   //     dispatch(setCredentials({action:data}))
//   //     localStorage.setItem('userData', JSON.stringify(data))
//   //   })
//   // }, []);

//   // useEffect(() => {
//   //   productData(search);
//   // }, [search]);

//   // const handleSearch = debounce((e) => {
//   //   setSearch(e.target.value);
//   // }, 500);


//   // console.log(getResultProduct,"getResultProduct")

//   return (
//     <React.Fragment>
//       {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <input
//         type="text"
//         className="rounded border px-4 my-3"
//         onChange={handleSearch}
//         placeholder="Search Product"
//       ></input> */}
//       <BrowserRouter>
//       {/* <Design/> */}
//    {/* <Loading/>  */}
//    <Suspense fallback={<Loading />}>
//    <Routes>
//    <Route path="/" element={<Home/>}/>
// {/* 
//    <Route path='/users/:id' element={<SearchMedicineList/>}/> */}
//    {/* <Route path='/product' element={<ProductPage/>}/>
//    <Route path='product/:id' element={<ProductDetails/>}/>  */}

//   <Route path='/product' element={<ProductCard/>}/>
// <Route path='/product/:id' element={<ProductCardDetails/>}/> 
// <Route path='/cart' element={<Cart1/>}/> 

 
//    </Routes>
//    <Suspense/>
//    </BrowserRouter>

//     </React.Fragment>
//   );
// }
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
import Loading from "./components/Loading/loading";
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";

// Import components lazily
const ProductPage = React.lazy(() => import("./screens/product/product"));
const ProductDetails = React.lazy(() => import("./screens/product/productDetails"));
const ProductCard = React.lazy(() => import("./ProductCard/ProductCard"));
const Home = React.lazy(() => import("./screens/home/Home"));
const ProductCardDetails = React.lazy(() => import("./screens/productCardDetails/productCardDetails"));
const Cart1 = React.lazy(() => import("./screens/Cart/cart1"));

export default function App() {
  // const [search, setSearch] = useState("");
  // const dispatch = useDispatch();
  // const { data, error, isLoading } = useProductDtaQuery();
  // const [userRegistration, userRegistrationResponse] =
  //   useUserRegistrationMutation();
  // const [login, userLoginResponse] = useUserLoginMutation();
  // const [productData, getResultProduct] = useLazyProductDataByQueryQuery();

  return (
    <React.Fragment>
      <BrowserRouter>
      <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '100%' }}>
        <Header />
        <Navbar/>
        </div>
    
    
      <div style={{ width: '87%', margin: '0 auto' }}>
      <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductCard />} />
            <Route path="/product/:id" element={<ProductCardDetails />} />
            <Route path="/cart" element={<Cart1 />} />
          </Routes>
        </Suspense>
      
       </div>
       </div>

       
      </BrowserRouter>
    </React.Fragment>
  );
}
