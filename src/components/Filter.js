import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory } from '../redux/actions/productActions';
import { actionTypes } from "../redux/constants/actions-types";

const Filter = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProducts.products)
    const handleCategoryProducts = e => {
        dispatch(setCurrentCategory(e.target.value))
    }
    const category = useSelector(state => state.category)
    const setCategProducts = (category) => {
        switch(category) {
            case "all":
                return allProducts;
            case "men's clothing":
                return allProducts.filter(p => p.category === "men's clothing")
            case "women's clothing":
                return allProducts.filter(p => p.category === "women's clothing")
            case 'jewelery':
                return allProducts.filter(p => p.category === "jewelery")
            case 'electronics':
                return allProducts.filter(p => p.category === "electronics")
            default:
                return allProducts;
        }
    }

    useEffect(() => {
        console.log("The products: ", setCategProducts(category))
        dispatch({
            type: actionTypes.SET_CATEGORY_PRODUCTS,
            payload: setCategProducts(category),
        })
        console.log(category, allProducts, setCategProducts(category))
    }, [category])
    
    return (
        <div>
            {/* <div className='category-field'>
                <label htmlFor='All-Categories'>All Products</label>
                <input type="radio" id="All-Categories" value="all" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div> */}
            <div className='category-field'>
                <label htmlFor='Men'>Men Clothes</label>
                <input type="radio" id="Men" value="men's clothing" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
            <div className='category-field'>
                <label htmlFor='Women'>Women Clothes</label>
                <input type="radio" id="Women" value="women's clothing" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
            <div className='category-field'>
                <label htmlFor='Jewelery'>Jewelery</label>
                <input type="radio" id="Jewelery" value="jewelery" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
            <div className='category-field'>
                <label htmlFor='Electronics'>Electronics</label>
                <input type="radio" id="Electronics" value="electronics" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
        </div>
    )
}

export default Filter;