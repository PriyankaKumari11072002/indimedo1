
import React from "react";
import {
  useLazyProductSearchByQueryQuery,
  useProductDtaQuery,
} from "../../services/apis/product";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [queryRelatedMoreOftion, setqueryRelatedMoreOftion] = useState(null);
  const [searchProduct, { isError }] = useLazyProductSearchByQueryQuery();
 const navigate = useNavigate()
  
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      searchProduct(searchTerm).then((queryRelatedMoreOftion1) =>
        setqueryRelatedMoreOftion(queryRelatedMoreOftion1.data)
      );
    }
  }, [searchTerm]);

  console.log(queryRelatedMoreOftion, "queryRelatedMoreOftion74567");

  const handleChange = debounce((e) => {
    setSearchTerm(e.target.value);
  }, 600);

  console.log(searchTerm, "search");
const handleClick=(id)=>{
   navigate(`/product/${id}`)
   
   setSearchTerm('')
}
  return (
    <div>
      <input
        type="text"
     
        className="rounded border px-4 my-3"
        onChange={handleChange}
        placeholder="Search Product"
     />
      {queryRelatedMoreOftion?.length > 0 &&
        searchTerm.length > 0 &&
        queryRelatedMoreOftion?.map((item) => (
          <div onClick={()=>handleClick(item?._id)}>
            <div>
             {item?.title}
            </div>
          </div>
        ))}
      {isError && searchTerm?.length > 0 && <p>No Data Found</p>}
    </div>
  );
};

export default Search;
