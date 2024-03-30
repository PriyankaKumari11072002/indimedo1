import {Box,TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup = ({signup,memorizeLoginPage,loginPage, verifyPage, setverifyPage, setSingUp }) => {
  return (
  <>
  <div>
      {loginPage && !signup && !verifyPage && (
        <div className="w-[100%]   px-3 py-1">
          <h1 className="pb-2  text-black">Sign up</h1>
          <p className="pb-2  text-gray-600">
            Sign up to access your orders, special offers, health tips and more!
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ marginTop: "10px" }}
                id="standard-basic"
                label="Enter Email Id or Mobile Number"
                variant="standard"
              />


              <button
                onClick={() => setverifyPage(true)}
                type="button"
                className="w-[100%] bg-sky-500 p-2 text-black"
              >
                Continue
              </button>
              <p>
                New on Indimedo Website?{" "}
                </p>
              <Link to="" onClick={() => setSingUp(true)} className=" text-sky-500 mt-2 ">
                Login
                </Link>
              <p>
              By signing up, I agree to the Privacy Policy,Terms and Conditions of Indimedo Website.
              </p>
            </Box>
          </p>
        </div>
      )}
      
    </div>
  </>  
    // <div>
    // {loginPage && !signup && (
    //             <div className="">
    //               <h1>Sign up</h1>
    //               <p>Please enter your mobile number to login</p>
    //               {/* <form action=""> */}
    //               {/* <label htmlFor="phone">Enter a phone number:</label> */}
    //               <Box
    //                 component="div"
    //                 sx={{
    //                   "& > :not(style)": { m: 1, width: "25ch" },
    //                 }}
    //                 noValidate
    //                 autoComplete="off"
    //               >
    //                 <TextField
    //                   id="standard-basic"
    //                   label="Enter Your Number"
    //                   variant="standard"
    //                 />
    //               </Box>

    //               {/* <input type="tel" id="phone" name="phone" placeholder="...8565476546" required  style={{border:"none",padding:'10px',borderBottomColor:"#24aeb1"}}/> */}

    //               <br />
    //               <br />
    //               <input
    //                 type="checkbox"
    //                 id="healthCare"
    //                 name="healthCare"
    //                 value="healthCare"
    //               />
    //               <label htmlFor="healthCare">Are you a healthcare </label>
    //               <input
    //                 type="submit"
    //                 value="Send otp"
    //                 onClick={() => memorizeLoginPage}
    //               />
    //               <p className="">
    //                 OTP will be sent to this number by SMS and WhatsApp.
    //               </p>
    //               <p>
    //                 Have an account?{" "}
    //                 <span onClick={() => memorizeLoginPage}>Login</span>
    //               </p>
    //               <p>
    //                 By signing up, you agree to our Terms and Conditions &
    //                 Privacy Policy .
    //               </p>

    //               {/* </form> */}
    //             </div>
    //           )}
     
    // </div>
  )
}

export default Signup