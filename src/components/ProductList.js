import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const [loading, setLoading] = useState(true)
    const products = useSelector(state => state)
    //useSelector: It's a function that takes the current state as its argument 
    //... and returns whatever date you want from it
    //... it's very similar to mapStateToProps() 
    //... and it allows to store the returned value inside a variable in the scope of your functional 
    //... component instead of passing it as props down to children.
    const dispatch = useDispatch();
    //Just like useSelector above, this hook is imported from react-redux, and it returns a
    //... new function in a varible that takes the action you want to dispatch as an argument.

    const fetchProducts = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products")
            dispatch(setProducts(response.data))
            setLoading(false)
        }
        catch(err){
            console.log("We had this error while fetching data from the given endpoint: ", err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log("Your products: ", products)
    if(loading) return <div className="loader"></div>
    return ( 
        <div className="container">
            <ProductComponent />
        </div> 
    );
}
 
export default ProductList;