
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { calculateDiscountPercentage } from '../../ProductCard/ProductCard';


export default function SearchResults() {
  const searchResults = useSelector((state) => state.search.queryResults);
  const searchId = useParams()


//   console.log(searchResults[10].title,'searchResults')
  const searchTermSelector = useSelector((state) => state.search.searchTerm1);

  const [expanded, setExpanded] = useState(false);

  const toggleTitleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
   
   <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[100%] lg:px-8  ">
        <div className="  mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 xl:gap-x-8 xl:grid-cols-7 2xl:grid-cols-8 ">
          <h1>Search results for {searchId.id}</h1>
          {searchResults&&searchResults.length>0?searchResults.map((product) => (
            <Link  to={`/product/${product._id}`}>
            <div className="  rounded-lg bg-white  overflow-hidden shadow-lg duration-300  hover:shadow-lg ">
              <div className="  ">
                <img
                  src={product.images_Src[0]}
                  alt="{product.Image_URL}"
                  className="h-40 w-full mx-auto object-contain object-center  "
                />
              </div>
              <div className=" p-4">
              <h6 className=" text-white-900  font-medium text-xs pl-3  mt-1  h-8 overflow-hidden">
         
         {product.title.length > 20
           ? product.title.slice(0, 20) + "..."
           : product.title}
       </h6>
      
              </div>

              <div className="">
            <p className=" font-normal   pl-3  mt-1 text-xs text-gray-500">
              MRP{" "}
              <span className="line-through text-gray-500">
                &#8377;{product.reagular_price}
              </span>
            </p>
            <div className="flex items-center align-middle ">
              <p className=" pl-3 font-medium text-xs">&#8377;{product.sale_price}</p>
              <p className=" pl-3   text-green-700">
             
                {calculateDiscountPercentage(
                  product.reagular_price,
                  product.sale_price
                )}
                %
              </p>
            </div>
          </div>
            </div>
            </Link>
          )):""}
        </div>
      </div>
    </div>









    </>
  );
}
