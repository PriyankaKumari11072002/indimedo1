import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useLazyProductDataByQueryQuery } from "../../services/apis/product";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";
import { useProduct } from "../../hooks/product";

 function CommonSlider(props) {
const {product} = useProduct()
console.log(product,'product')
  
  return (
    <Carousel   navButtonsAlwaysVisible={true}  timeout={10}  animation="fade"  style={{height:'200px !important'}}
    fullHeightHover={true}  cycleNavigation={false}  >  
      {product.map((item, i) => (
        <ProductCard  props={item} />
      ))}
    </Carousel>
  );
}

;



export default  CommonSlider;
