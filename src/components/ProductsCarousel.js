import React from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import ProductINCarousel from './ProductInCarousel';

const ProductsCarousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.2)", borderRadius: "100%", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.2)", borderRadius: "100%", }}
        onClick={onClick}
      />
    );
  }


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const products = useSelector(state => state.allProducts.products)
    const category = useSelector(state => state.product.category)
    const carouselProducts = products.filter(product => product.category === category)


    return (
      <div>
        {carouselProducts.length === 0 ? null : <h3 style={{marginTop: "1rem"}}>Related</h3>}
        <Slider {...settings}>
            {carouselProducts.map(product => <Link key={product.id} className='carousel-link' to={`/products/${product.id}`}><ProductINCarousel product={product}/></Link>)}
        </Slider>
      </div>
    );
  }


export default ProductsCarousel;