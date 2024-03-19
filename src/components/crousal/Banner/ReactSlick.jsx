import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProduct } from "../../../hooks/product";
import ProductCard from "../../../ProductCard/ProductCard";

export default function NewProduct({ title, api }) {
 const { product } = useProduct();
 const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: false,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
    ],
  };

  const slickPrevNextStyles = `
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

  return (
    <div className="my-6   ">
      <style>{slickPrevNextStyles}</style>
      <h1>{title}</h1>
      <Slider {...settings} className="">
        {api?.map((apiItem) => (
          <ProductCard key={apiItem._id} product={apiItem} />
        ))}
      </Slider>
    </div>
  );
}
