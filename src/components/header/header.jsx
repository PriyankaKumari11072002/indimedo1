
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,Modal, Badge} from '@mui/material';

import { BiSolidOffer } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { useMemo } from 'react';
import Signup from '../../screens/Signup/signup.jsx/Signup';
import Login from '../../screens/login/login';
import LoginOtpVerify from '../../screens/login/LoginOtpVerify';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  useLazyGetCartQuery } from '../../services/apis/product';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/features/cartSlice';

const Header = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const {count} = useSelector((state)=>state.cart) //getting product from cart
    // console.log(cart,'cart')
    const [loginPage, setloginPage] = useState(false);
    const [verifyPage, setverifyPage] = useState(false);
    const [singup, setSingUp] = useState(false);
    
    const [getcartData,{data,isLoading,isError}] = useLazyGetCartQuery()//lazy,mutation
    
    // const cartLength = data?.products.length

    //adding product to cart
    
   useEffect(()=>{
      getcartData().then((data)=>dispatch(addProductToCart(data?.data?.products)))
   },[])


    // const cartLength = data?.products.length

    //adding product to cart

   useEffect(()=>{
      getcartData().then((data)=>dispatch(addProductToCart(data?.data?.products)))
   },[])




    // useEffect(()=>{
    //  if(data?.products?.length>0){
    //     dispatch(addProductToCart(data?.products))
    //  }
    // },[isLoading])


    const memorizeLoginPage = useMemo(() => {
      setloginPage(true);
    }, [verifyPage, loginPage]);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
       
        boxShadow: 24,
        p: 4,
      };

      const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    return (
        <div className="flex justify-between items-center bg-white text-black border-b p-3 shadow transition duration-300 ease-in h-20  "
    
        >
            <div className="ml-4">
                <Link to="/">
                    <img
                        src="https://indimedo.com/assets/img/logo.png"
                        alt="Logo"
                        style={{ width: "100px" ,height:"100px" ,padding:"20px"}}
                    />
                </Link>
        
            </div>
            <div className="flex justify-around items-center gap-4 mr-4">
                <Link to="/special-offers" className="text-black font-semibold  flex  justify-around items-center g-3">
                    <BiSolidOffer className="" />
                    Offers
                </Link>
                <button  className="text-black font-semibold flex  justify-around items-center g-3">
                    <Link  to="/cart">
                    <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>    

                    </Link>
                   
                </button>
                <Link to="/upload-prescription" className="text-black font-semibold">
                    Upload
                </Link>
                <button onClick={handleOpen} className="text-black font-semibold  flex  justify-around items-center g-3">
                    <FaUser className="" />
                    Sign up/Sign in
                </button>
            </div>

            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
 

  <div
              className="  flex justify-around items-center  "
              style={{ padding: "10px 40px" }}
            >
              <div>
                <div>
                  <img
                    src="https://www.netmeds.com/images/cms/wysiwyg/cms/1680000865_New_Dest_deal.png"
                    alt="sign-in banner"
                    width="180px"
                    height="200"
                  />
                </div>

                <div>
                  <h1>Welcome to Indimedo website</h1>
                  <p>
                    Sign up with us get exclusive offers,discounts and savings
                    on medicine ,get express delivery on same day
                  </p>
                </div>
              </div>


             <Signup signup={singup} memorizeLoginPage={memorizeLoginPage}/>

             <Login  loginPage={loginPage}  signup={singup}  verifyPage={verifyPage}  setverifyPage={setverifyPage}  setSingUp={setSingUp}/>
             <LoginOtpVerify  verifyPage={verifyPage}/>

            </div>
  </Box>
</Modal>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    
                   
                    {loginPage && !signup && !verifyPage && (
                        <div>
                            <h1>Login</h1>
                            <p>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
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
                                <button onClick={handleVerifyPage} type="button">Continue</button>
                                <p>New on Indimedo Website? <Link to="" onClick={handleSignup}>Sign Up</Link></p>
                                <p>By signing In, you agree to our Terms and Conditions & Privacy Policy pri</p>
                            </Box>
                        </div>
                    )}

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
                </Box>
            </Modal> */}

        </div>
    );
};

export default Header;
