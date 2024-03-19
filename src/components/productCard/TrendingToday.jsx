import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useLazyProductDataByQueryQuery } from "../../services/apis/product";
import { useSelector } from "react-redux";

function Example(props) {
  const [productData, getResultProduct] = useLazyProductDataByQueryQuery();
  const search = useSelector((state) => state.search);

  console.log(search, getResultProduct?.data, "Example");

  useEffect(() => {
    productData(search?.searchTerm);
  }, [search?.searchTerm]);

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  
  return (
    <Carousel indicators={true}   
    navButtonsAlwaysVisible={true}   swipe={true}   
    autoPlay={true}>
      {getResultProduct?.data?.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}




export default Example;
