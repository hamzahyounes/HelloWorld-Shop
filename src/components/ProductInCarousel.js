import React from 'react';

const ProductINCarousel = props => {
    const { image, title, price} = props.product;
    return (
        <div className='product-in-carousel'>
            <div className='carousel-image'>
                <img src={image} alt={title} />
            </div>
            <div className='carousel-info'>
                <h5 className='carousel-title'>{title}</h5>
                <h6 className='carousel-price'>${price}</h6>
            </div>
        </div>
    )
}
export default ProductINCarousel;