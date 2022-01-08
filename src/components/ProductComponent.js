import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
import { addProductToCart } from "../redux/actions/productActions";

const ProductComponent = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProducts.products);
    const searchedProducts = useSelector(state => state.searchedProducts.products);
    const query = useSelector(state => state.query);
    const addProductCart = product => {
        dispatch(addProductToCart(product))
        toast.success("Added to your cart!")
    }
    let products = null;

    if(query.length === 0) products = allProducts;
    else {
        products = searchedProducts;
        if(products.length === 0)
        return <h4>Sorry, No Matches 🙄.</h4>
    }
    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            return true;
        }
    };
    const renderList = products.map(product => {
        const {id, title, image, price, category} = product;
        return(
            <div key={id} className="card-container">
                <div>
                    <div className="card">
                        <Link to={`/products/${id}`}>
                            <div className="image">
                                <img src={image} alt={title}></img>
                            </div>
                        </Link>
                        <div className="info">
                            <Link to={`/products/${id}`} className="card-link">
                                <div className="title">{title}</div>
                            </Link>
                                <div className="price">${price}</div>
                                <div className="category">{category}</div>
                                <div className="product-cart" onClick={() => addProductCart(product)}>Add To Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return <>{renderList}</>
}
 
export default ProductComponent; 