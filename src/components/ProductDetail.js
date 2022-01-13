import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import axios from "axios";
import { removeSelectedProduct, selectProduct, addProductToCart } from "../redux/actions/productActions";
import { BeatLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';
import ProductsCarousel from "./ProductsCarousel";


const ProductDetail = () => {
    
    const selectedProduct = useSelector(state => state.product)
    const { Id } = useParams();
    const dispatch = useDispatch()

    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${Id}`)
            dispatch(selectProduct(response.data))
        }
        catch(err) {
            console.log("There's an error: ", err);
        }
    }

    const addProductCart = () => {
        dispatch(addProductToCart(selectedProduct))
        toast.success("Added to your cart!")
    }

    useEffect(() => {
        if(Id && Id !== '') fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [Id])
    
    const {title, image, price, description, category} = selectedProduct;

    return (
        <div className="product-container">
        {Object.keys(selectedProduct).length === 0 
            ? <div className="beat-loader-container">
                <BeatLoader 
                    color="rgb(255, 153, 0)" 
                    size={30}
                />
            </div>
            : <div className="product">
                <div className="product-image" >
                    <img className="product-image-img" src={image} alt={title}/>
                </div>
                <div className="product-info">
                    <h3 className="product-title">{title}</h3>
                    <h4 className="product-price tag">${price}</h4>
                    <div style={{backgroundColor: "white"}}><h6 className="product-category">{category}</h6></div>
                    <h6 className="product-description">{description}</h6>
                    <div className="add-to-cart" onClick={addProductCart}>
                        <h4>Add To Cart</h4>
                        <AiOutlineShoppingCart className='add-to-cart-icon' />
                    </div>
                </div>
            </div> 
        }
            {/* <ProductsCarousel /> */}
            {Object.keys(selectedProduct).length === 0 ? null : <ProductsCarousel />}
        </div>
    );
}
 
export default ProductDetail;