import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        //   initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12">
        <div>
          {" "}
          <h1 className="font-semibold text-xl pd-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            maiores porro aliquid alias nulla corrupti fugit voluptatibus
            veritatis pariatur illo. Alias animi quos ducimus, facilis assumenda
            perferendis totam. Animi, consectetur.
          </p>
        </div>

        <div>
          <Slider {...settings}>
           {filterData.map((item) => (
                <Cards item={item} key={item.id} className="flex justify-center"/>
           ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
