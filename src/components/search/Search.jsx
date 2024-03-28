
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyProductSearchByQueryQuery, useProductDtaQuery } from "../../services/apis/product";
import './search.css'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm1 ,setQueryResults } from "../../redux/features/searchSlice";

import { IconButton, Paper } from "@mui/material";
import {Search} from '@mui/icons-material'
const Search1 = () => {

  const [suggestionTitleId, setsuggestionTitleId] = useState("");

  const [queryRelatedMoreOption, setQueryRelatedMoreOption] = useState([]);
  const [searchProduct, { isError }] = useLazyProductSearchByQueryQuery();
  
  const navigate = useNavigate();
const dispatch = useDispatch()
const searchTermSelector = useSelector((state)=>state.search.searchTerm1)


  useEffect(() => {
    if (searchTermSelector.trim() !== "") {
      searchProduct(searchTermSelector).then((response) => {
        setQueryRelatedMoreOption(response.data || []);
        //dispatch(setQueryResults(response.data || []))
      });
    } else {
 
      setQueryRelatedMoreOption([]);
    }
  }, [searchTermSelector]);

  const handleChange = (e) => {
   
    dispatch(setSearchTerm1(e.target.value))
  };

  const handleSubmit= () => {
if(searchTermSelector.trim() !== ""&& isError===false){ 
  // navigate(`/search/${searchId}`)           //false===false query was not found
  navigate(`/search-results/${searchTermSelector}`);
  dispatch(setSearchTerm1(""))

}
  

  };

  const handleClick = (item) => {  
  setsuggestionTitleId(item.title)

   navigate(`/product/${item._id}`);

  dispatch(setSearchTerm1(""))
  setsuggestionTitleId("")



  };

  const handleKeyPress = (e) => {
if(e.key==='Enter'){
  handleSubmit()
}
  }

  return (
    <>
  
  

    <div className="search-container"  style={{height:'100%'}}>
 
    <div  className="input-container">
      <input
        type="text"
        value={suggestionTitleId?suggestionTitleId:searchTermSelector}
        onChange={handleChange}
        placeholder="Search Product"
        className="search-input  "
       onKeyPress={handleKeyPress}
     
      />
       <button onClick={handleSubmit} className="search-button"><IoSearchOutline /></button>
      </div>
      <div className="suggestions">
        {queryRelatedMoreOption.map((item) => (
        <>
          <div key={item._id} className="suggestion" onClick={() => handleClick(item)}>
              <h1>{item.title}</h1>
              </div>
            {/* {item.tags.map((tags)=>(
              <div key={item._id} className="suggestion" onClick={() => handleClick(item)}>
              <h1>{tags}</h1>
              </div>
            ))} */}
          </>
        ))}
        {isError && searchTermSelector.length > 0 && <p className="no-data">No Data Found</p>}
      </div>
    </div>
    
  
    </>
  );
};

export default Search1;
