
import React from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import ProductINCarousel from './ProductInCarousel';

const ProductsCarousel = () => {


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      
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
        {carouselProducts.length === 0 ? null : <h3 style={{marginTop: "1rem"}}>You may need</h3>}
        <Slider {...settings}>
            {carouselProducts.map(product => <Link key={product.id} className='carousel-link' to={`/products/${product.id}`}><ProductINCarousel product={product}/></Link>)}
        </Slider>
      </div>
    );
  }


export default ProductsCarousel;