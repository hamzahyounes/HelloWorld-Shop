import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { setProducts } from '../redux/actions/productActions'
import Filter from "./Filter";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const [loading, setLoading] = useState(true)
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

    if(loading) {
        return (
            <div className="beat-loader-container">
                <BeatLoader 
                    color="rgb(255, 153, 0)" 
                    size={30}
                />
            </div>
    )}
    return ( 
        <div className="general-container">
            <div className="filter-container"><Filter className="filter-button" /></div>
            <div className="container">
                <ProductComponent />
            </div> 
        </div>
    );
}
 
export default ProductList;