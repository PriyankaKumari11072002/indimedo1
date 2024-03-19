// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { TextField } from "@mui/material";

// const style = {
//   position: "absolute" ,
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 900,
//   bgcolor: "background.paper",
// borderRadius:"10px",
//   boxShadow: 24,
//   p: 10,
 
// };

// export default function LoginModal({open,handleClose}) {

//   return (
//     <Box>
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         {/* <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box> */}

// <Box  sx={style}>
//     <div   style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"60px"}}>
//      <div  style={{  width: '450px'}}>
//      <div>
//                   <img
//                     src="https://www.netmeds.com/images/cms/wysiwyg/cms/1680000865_New_Dest_deal.png"
//                     alt="sign-in banner"
//                     width="180"
//                     height="200"
//                   />
//                 </div>  

//                 <div>
//                   <h1  style={{}}>Welcome to Indimedo website</h1>
//                   <p>
//                     Sign up with us get exclusive offers,discounts and savings
//                     on medicine ,get express delivery on same day
//                   </p>
//                 </div>
//      </div>
     
//                 <div>
//                 <h1>Login</h1>
//                   <p>
//                     Sign up or Sign in to access your orders, special offers,
//                     health tips and more!
//                     <Box
//                       component="form"
//                       sx={{
//                         "& > :not(style)": { m: 1, width: "25ch" },
//                       }}
//                       noValidate
//                       autoComplete="off"
//                     >
//                       <TextField
//                         id="standard-basic"
//                         label="Enter Email Id or Mobile Number"
//                         variant="standard"
//                       />
//                       {/* <button onClick={() => setverifyPage(true)} type="button">
//                         Continue
//                       </button> */}
//                       <p>
//                         New on Indimedo Website?{" "}
//                         {/* <Link to="" onClick={() => setSingUp(true)}>
//                           Sign Up
//                         </Link> */}
//                       </p>
//                       <p>
//                         By signing In, you agree to our Terms and Conditions &
//                         Privacy Policy pri
//                       </p>
//                     </Box>
//                   </p>     
//                     </div> 


//     </div>
                 
//                 </Box> 

                
//       </Modal>
//     </Box>
//   );
// }
import React from 'react'
import {Box,TextField } from '@mui/material'
import { Link } from 'react-router-dom'
const Login = ({loginPage,signup ,verifyPage,setverifyPage,setSingUp}) => {
  return (
    <div>
              {loginPage && !signup && !verifyPage && (
                <div>
                  <h1>Login</h1>
                  <p>
                    Sign up or Sign in to access your orders, special offers,
                    health tips and more!
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
                        label="Enter Email Id or Mobile Number"
                        variant="standard"
                      />
                      <button onClick={() => setverifyPage(true)} type="button">
                        Continue
                      </button>
                      <p>
                        New on Indimedo Website?{" "}
                        <Link to="" onClick={() => setSingUp(true)}>
                          Sign Up
                        </Link>
                      </p>
                      <p>
                        By signing In, you agree to our Terms and Conditions &
                        Privacy Policy pri
                      </p>
                    </Box>
                  </p>
                </div>
              )}
    </div>
  )
}

export default Login