// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLazyProductSearchByQueryQuery } from "../../services/apis/product";
// import './search.css'
// import { IoSearchOutline } from "react-icons/io5";
// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestionTitleId, setsuggestionTitleId] = useState("");
//   const [suggestionId, setsuggestionId] = useState("");
//   const [queryRelatedMoreOption, setQueryRelatedMoreOption] = useState([]);
//   const [searchProduct, { isError }] = useLazyProductSearchByQueryQuery();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchTerm.trim() !== "") {
//       searchProduct(searchTerm).then((response) => {
//         setQueryRelatedMoreOption(response.data || []);
//       });
//     } else {
 
//       setQueryRelatedMoreOption([]);
//     }
//   }, [searchTerm]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleSubmit= () => {
//     // if (searchTerm.trim() !== "") {
//     //   searchProduct(searchTerm).then((response) => {
//     //     const responseData = response.data.map((items)=>items._id)
//     //     console.log(responseData,'response')
//     //     setQueryRelatedMoreOption(response.data || []);
//     //         // navigate(`/product/${}`);
//     //   });
//     // } else {
 
//     //   setQueryRelatedMoreOption([]);
//     }

   
 

//   };
//  //console.log(queryRelatedMoreOption[0]._id,'queryRelatedMoreOption')

//   const handleClick = (item) => {  
//   setsuggestionTitleId(item.title)
//   setsuggestionId(item._id)
  
//   };
 

//   return (
//     <div className="search-container">
 
//     <div  className="input-container">
//       <input
//         type="text"
//         value={suggestionTitleId?suggestionTitleId:searchTerm}
//         onChange={handleChange}
//         placeholder="Search Product"
//         className="search-input  "
    
     
//       />
//        <button onClick={handleSubmit} className="search-button"><IoSearchOutline /></button>
//       </div>
//       <div className="suggestions">
//         {queryRelatedMoreOption?.map((item) => (
//           <div key={item._id} className="suggestion" onClick={() => handleClick(item)}>
//             {item.title}
//           </div>
//         ))}
//         {isError && searchTerm.length > 0 && <p className="no-data">No Data Found</p>}
//       </div>
//     </div>
//   );
// };

// export default Search;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyProductSearchByQueryQuery, useProductDtaQuery } from "../../services/apis/product";
import './search.css'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm1 ,setQueryResults } from "../../redux/features/searchSlice";
import SearchResults from "./searchResults";
import SliderComponent from "../slider/slider";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
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
        dispatch(setQueryResults(response.data || []))
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
    <Paper component="form" onSubmit={handleSubmit}  sx={{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",mr:{sm:5} }}>
  <input type="text"  onChange={handleChange} placeholder='...find here anything' value={searchTermSelector} className='search-bar'/>
  <IconButton type='submit' sx={{color:"red"}}><Search/></IconButton>
</Paper>
  

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
