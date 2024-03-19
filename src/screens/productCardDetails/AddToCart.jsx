import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/features/cartSlice'
import { useAddToCartItemsMutation } from '../../services/apis/product'
import { Card,Typography,Button,CardActions,CardContent } from '@mui/material'
import { calculateDiscountPercentage } from '../../ProductCard/ProductCard'
import VeiwCardItems from './veiwCardItems'

const AddToCart = ({data}) => {
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

const dispatch = useDispatch()
const cart = useSelector((state)=>state.cart)
console.log(cart,'cartcount')

const  [productIncriment,setproductIncriment] = useState(false)

const  [viewCartOpen,setviewCartOpen] = useState(false)
const  [count,setCount] = useState(1)
//  const [addToCart,response] = useAddToCartMutation()
const toggleTitleExpansion = () => {
  setIsTitleExpanded(!isTitleExpanded);
};




  const handleAddToCart = async(product)=>{
  
    //setproductIncriment(true)
    setviewCartOpen(true)

  dispatch(addToCart({cart:product,count:1}))
  try {
    // const response = await axios.post('https://indimedo.onrender.com/user/addcart', {
      
    // });
    const response1 = useAddToCartItemsMutation([{ _id: product._id, count: 5 }],)
    console.log(response1.data); // Assuming the response from the server is logged
  } catch (error) {
    console.error('Error adding item to cart:', error);
  } finally {
    
  }



  }

   function handleDecriment(){
    if(count>1){
      setCount(count-1)
    }
   }

  return (
    <>
   
{!viewCartOpen?    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,backgroundColor:""}} color="text.secondary" gutterBottom>
        social-cue259 people bought this recently
        </Typography>
        <Typography variant="p" component="div">
        {/* {data?.title} */}
        {isTitleExpanded ? data?.title : `${data?.title.slice(0, 50)}${data?.title.length > 50 ? '...' : ''}`}
            <span style={{ cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px' }} onClick={toggleTitleExpansion}>
              {isTitleExpanded ? 'Show less' : 'Show more'}
            </span>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <h6 className="flex   "  style={{ marginTop: "10px" }}>
              &#8377;{data?.sale_price}&nbsp;&nbsp;&nbsp;
              <span className="text-gray-600  line-through">
                MRF&#8377;{data?.reagular_price} 
              </span>
              <span  className="text-[#008000]">
              &nbsp;&nbsp;&nbsp;&nbsp; {calculateDiscountPercentage(
                  data?.reagular_price,
                  data?.sale_price
                )}
                %&nbsp;
              </span>
              
            </h6>
        </Typography>
        <button onClick={()=>handleAddToCart(data)} className='bg-[#008000]  font-sans  font-light  p-3 mt-12 text-BLACK '  style={{width:"100%",
marginTop:"50PX",textAlign:"center",borderRadius:"10px" }}>
ADD TO CART</button>
      </CardContent>
    
    </Card>:    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,backgroundColor:""}} color="text.secondary" gutterBottom>
        social-cue259 people bought this recently
        </Typography>
    
        <button className='  bg-[#008000]  font-sans  font-light  p-3 mt-12 text-BLACK '  style={{width:"100%",
marginTop:"50PX",textAlign:"center",borderRadius:"10px" }}>
  View Cart
</button>
      </CardContent>
    
    </Card>}

  
{/* {!productIncriment?<span >ADD TO CART</span>:(<div  className='flex justify-between align-middle pl-1'><span
onClick={handleDecriment}>-</span><span>{count}</span><span  
onClick={()=>setCount(count+1)} >+</span> </div>)} */}



    </>



  )
}

export default AddToCart


// import { Heart, Trash } from 'lucide-react'
// import React from 'react'

// const products = [
//   {
//     id: 1,
//     name: 'Nike Air Force 1 07 LV8',
//     href: '#',
//     price: '₹47,199',
//     originalPrice: '₹48,900',
//     discount: '5% Off',
//     color: 'Orange',
//     size: '8 UK',
//     imageSrc:'https://mui.com/static/images/cards/contemplative-reptile.jpg'
//   },
//   {
//     id: 2,
//     name: 'Nike Blazer Low 77 SE',
//     href: '#',
//     price: '₹1,549',
//     originalPrice: '₹2,499',
//     discount: '38% off',
//     color: 'White',
//     leadTime: '3-4 weeks',
//     size: '8 UK',
//     imageSrc:'https://mui.com/static/images/cards/contemplative-reptile.jpg'
//   },
//   {
//     id: 3,
//     name: 'Nike Air Max 90',
//     href: '#',
//     price: '₹2219 ',
//     originalPrice: '₹999',
//     discount: '78% off',
//     color: 'Black',
//     imageSrc:'https://mui.com/static/images/cards/contemplative-reptile.jpg'
//   },
// ]

//  function AddToCart() {
//   return (
//         <div>
// <div className="mx-auto max-w-7xl px-2 lg:px-0">
//       <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    
//         <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
//           <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
        
//             <ul role="list" className="divide-y divide-gray-200">
//               {products.map((product, productIdx) => (
//                 <div key={product.id} className="">
//                   <li className="flex py-6 sm:py-6 ">
//                     <div className="flex-shrink-0">
//                       <img
//                         src={product.imageSrc}
//                         alt={product.name}
//                         className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
//                       />
//                     </div>

//                     <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                       <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                         <div>
//                           <div className="flex justify-between">
//                             <h3 className="text-sm">
//                               <a href={product.href} className="font-semibold text-black">
//                                 {product.name}
//                               </a>
//                             </h3>
//                           </div>
//                           <div className="mt-1 flex text-sm">
//                             <p className="text-sm text-gray-500">{product.color}</p>
//                             {product.size ? (
//                               <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
//                                 {product.size}
//                               </p>
//                             ) : null}
//                           </div>
//                           <div className="mt-1 flex items-end">
//                             <p className="text-xs font-medium text-gray-500 line-through">
//                               {product.originalPrice}
//                             </p>
//                             <p className="text-sm font-medium text-gray-900">
//                               &nbsp;&nbsp;{product.price}
//                             </p>
//                             &nbsp;&nbsp;
//                             <p className="text-sm font-medium text-green-500">{product.discount}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <div className="mb-2 flex">
//                     <div className="min-w-24 flex">
//                       <button type="button" className="h-7 w-7">
//                         -
//                       </button>
//                       <input
//                         type="text"
//                         className="mx-1 h-7 w-9 rounded-md border text-center"
//                         defaultValue={1}
//                       />
//                       <button type="button" className="flex h-7 w-7 items-center justify-center">
//                         +
//                       </button>
//                     </div>
                    
//                     <div className="ml-6 flex text-sm">
//                       <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
//                         <Trash size={12} className="text-red-500" />
//                         <span className="text-xs font-medium text-red-500">Remove</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           </section>
//           {/* Order summary */}
//           {/* <section
//             aria-labelledby="summary-heading"
//             className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
//           >
//             <h2
//               id="summary-heading"
//               className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
//             >
//               Price Details
//             </h2>
//             <div>
//               <dl className=" space-y-1 px-2 py-4">
//                 <div className="flex items-center justify-between">
//                   <dt className="text-sm text-gray-800">Price (3 item)</dt>
//                   <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
//                 </div>
//                 <div className="flex items-center justify-between pt-4">
//                   <dt className="flex items-center text-sm text-gray-800">
//                     <span>Discount</span>
//                   </dt>
//                   <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
//                 </div>
//                 <div className="flex items-center justify-between py-4">
//                   <dt className="flex text-sm text-gray-800">
//                     <span>Delivery Charges</span>
//                   </dt>
//                   <dd className="text-sm font-medium text-green-700">Free</dd>
//                 </div>
//                 <div className="flex items-center justify-between border-y border-dashed py-4 ">
//                   <dt className="text-base font-medium text-gray-900">Total Amount</dt>
//                   <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
//                 </div>
//               </dl>
//               <div className="px-2 pb-4 font-medium text-green-700">
//                 You will save ₹ 3,431 on this order
//               </div>
//             </div>
//           </section> */}

//         </form>
//       </div>
//     </div>
    
// <button  className='  bg-[#008000]  font-sans  font-light  p-2 mt-12 text-white '  style={{width:"50%",textAlign:"center",borderRadius:"10px" }}>

// ADD TO CART
// </button>

//     </div>
  
//   )
// }
// export default AddToCart