import { Box,TextField } from '@mui/material';
import React from 'react'

const LoginOtpVerify = ({verifyPage}) => {
  return (
    <div>
        
        {verifyPage && (
                <div>
                  <h1>Enter OTP</h1>
                  <p>Enter OTP We have sent an OTP on +91 8787689678</p>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="One Time Password"
                      variant="standard"
                    />
                  </Box>

                  <p>Get OTP on SMS | Get OTP on Call</p>
                  <button>Done</button>
                </div>
              )}

       
    </div>
  )
}

export default LoginOtpVerify;
