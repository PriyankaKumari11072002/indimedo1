import {Box,TextField } from '@mui/material'
import React from 'react'

const Signup = ({signup,memorizeLoginPage}) => {
  return (
    
    <div>
    {signup&& (
                <div className="">
                  <h1>Sign up</h1>
                  <p>Please enter your mobile number to login</p>
                  {/* <form action=""> */}
                  {/* <label htmlFor="phone">Enter a phone number:</label> */}
                  <Box
                    component="div"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Enter Your Number"
                      variant="standard"
                    />
                  </Box>

                  {/* <input type="tel" id="phone" name="phone" placeholder="...8565476546" required  style={{border:"none",padding:'10px',borderBottomColor:"#24aeb1"}}/> */}

                  <br />
                  <br />
                  <input
                    type="checkbox"
                    id="healthCare"
                    name="healthCare"
                    value="healthCare"
                  />
                  <label htmlFor="healthCare">Are you a healthcare </label>
                  <input
                    type="submit"
                    value="Send otp"
                    onClick={() => memorizeLoginPage}
                  />
                  <p className="">
                    OTP will be sent to this number by SMS and WhatsApp.
                  </p>
                  <p>
                    Have an account?{" "}
                    <span onClick={() => memorizeLoginPage}>Login</span>
                  </p>
                  <p>
                    By signing up, you agree to our Terms and Conditions &
                    Privacy Policy .
                  </p>

                  {/* </form> */}
                </div>
              )}
     
    </div>
  )
}

export default Signup