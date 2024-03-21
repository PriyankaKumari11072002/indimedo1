import { Heart, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { calculateDiscountPercentage } from '../../ProductCard/ProductCard'
import { MenuItem, Select } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { useLazyGetCartQuery } from '../../services/apis/product'
import { addProductToCart } from '../../redux/features/cartSlice'
import Header from '../../components/header/header'


 function Cart() {
    // const {data} = useGetCartQuery()
    const {cart} = useSelector((state)=>state.cart) //geting product data from store
  

   const [quantity,setQuantity] = useState(1)  
   

// useEffect(() => {
//   // Fetch cart data on component mount
//   dispatch(addProductToCart(data?.products));
// }, []); // Empty dependency array ensures that this effect runs only once, on mount

// console.log(cart, 'cart1');

const handleRemove = (deleteId)=>{
    console.log(deleteId,'deleteId')

}
// const handleItemsQuantity = (quantity)=>{
//   console.log(quantity++,'quantity')
//   // console.log(quantity)
//   setQuantity(quantity+1)
 

// }
const handleItemsQuantity  = async (product) => {
// console.log(product.count,'product')
  //setproductIncriment(true)
  //setviewCartOpen(true)
  // dispatch(addProductToCart({cart:product,count:1}))

  // try {
  //   await addToCart({
  //     cart: [
  //       {
  //         _id: product._id,
  //         count: quantity,
  //       },
  //     ],
  //   }).then((item) =>
  //     getcartData().then((data) =>  //updating cart data when user add or increase product data
  //       dispatch(addProductToCart(data?.data?.products))
  //     )
  //   );
  // } catch (error) {
  //   console.error("Error adding item to cart:", error);
  // } finally {
  // }
};

  return (
        <div>
          <Header/>
<div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
        
            <ul role="list" className="divide-y divide-gray-200">
              {cart?.map((items,id) => (
                <div key={id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={items.product.images_Src[0]}
                      
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              {/* <a href={product.href} className="font-semibold text-black">
                                {product.name}
                              </a> */}
                              {items.product.title}
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">
                                {/* {product.color} */}
                                </p>
                            {/* {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null} */}
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                                {items.product.reagular_price}
                        
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                            &nbsp;&nbsp;{items.product.sale_price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">
                  
                {calculateDiscountPercentage(
items.product.reagular_price           ,       items.product.sale_price
                )} %&nbsp;
                                </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7">
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={items.count}
                      />
                      <button type="button" onClick={()=>handleItemsQuantity(items.count+1)}  className="flex h-7 w-7 items-center justify-center">
                        +
                      </button>
                 
                    </div>
                
                    <div className="ml-6 flex text-sm">
                      <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                        <Trash size={12} className="text-red-500"  />
                        <span className="text-xs font-medium text-red-500"  onClick={()=>handleRemove(items.product._id)}>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

         <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900"></dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
            </div>
          </section>

        </form>
      </div>
    </div>
    


    </div>
  
  )
}
export default Cart


