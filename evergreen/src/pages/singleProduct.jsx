import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cam1 from '../assets/images/cam1.png';
import cam2 from '../assets/images/cam2.png';
import cam3 from '../assets/images/cam3.png';

const SingleProduct = () => {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center mb-20 text-3xl leading-none lg:text-left lg:px-40 lg:text-5xl mt-12 ">
        <h1 className="text-blue-400 mb-8">360 degree camera</h1>
      </div>

      <div className="px-8 w-full ">
        {' '}
        <Slider {...settings} className="">
          <div>
            <img src={cam3} alt="" />
            <div className="text-2xl">
              <p>
                <b>2400Ah solar bank system</b>
              </p>
              <p>
                <b>Client: Mr. Cyril Adekunle</b>
              </p>
              <p>
                <b>Category: Solar Installation</b>
              </p>
            </div>
          </div>
          <div>
            <img src={cam1} alt="" />
          </div>
          <div>
            <img src={cam2} alt="" />{' '}
          </div>
        </Slider>
        {/* <div className="w-full h-24 bg-red-400">d</div> */}
      </div>

      <div className="h-96 w-full mt-40">
        <h1>Under Construction.....</h1>
      </div>
    </>
  );
};

export default SingleProduct;
