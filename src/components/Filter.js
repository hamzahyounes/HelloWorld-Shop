import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrFilter } from 'react-icons/gr'
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
        let newState = [];
        category.forEach(c => {
            switch(c) {
                case "all":
                    return allProducts;
                case "men's clothing":
                    newState = [...newState, ...allProducts.filter(p => p.category === "men's clothing")]
                    return newState
                case "women's clothing":
                    newState = [...newState, ...allProducts.filter(p => p.category === "women's clothing")]
                    return newState
                case 'jewelery':
                    newState = [...newState, ...allProducts.filter(p => p.category === "jewelery")]
                    return newState
                case 'electronics':
                    newState = [...newState, ...allProducts.filter(p => p.category === "electronics")]
                    return newState
                default:
                    return allProducts;
            }
        })
        return newState
    }

    const isChecked = (value) => {
        if(category.includes(value)) return true
    }
    useEffect(() => {
        dispatch({
            type: actionTypes.SET_CATEGORY_PRODUCTS,
            payload: setCategProducts(category),
        })
    }, [category])

    
    return (
        <div>
            <div className='category-field'>
                <h5 className='filters'>Filters</h5>
                <GrFilter className='filter-icon'/>
            </div>

            <div className='category-field'>
                <label htmlFor='All-Categories'>All Products</label>
                <input 
                    type="checkbox" 
                    id="All-Categories" 
                    value="all" 
                    name='category' 
                    onChange={() => {
                        dispatch({
                            type: actionTypes.SET_CATEGORY_PRODUCTS,
                            payload: [],
                        })
                        dispatch({
                            type: 'RESET_CATEGORY',
                            payload: [],
                        })
                    }}
                    checked={category.length === 0 || category.length === 4 ? true : false}
                />
            </div>
            
            <div className='category-field'>
                <label htmlFor='Men'>Men Clothes</label>
                <input checked={isChecked("men's clothing")} type="checkbox" id="Men" value="men's clothing" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
            <div className='category-field'>
                <label htmlFor='Women'>Women Clothes</label>
                <input checked={isChecked("women's clothing")} type="checkbox" id="Women" value="women's clothing" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
            <div className='category-field'>
                <label htmlFor='Jewelery'>Jewelery</label>
                <input checked={isChecked("jewelery")} type="checkbox" id="Jewelery" value="jewelery" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
            <div className='category-field'>
                <label htmlFor='Electronics'>Electronics</label>
                <input checked={isChecked("electronics")} type="checkbox" id="Electronics" value="electronics" name='category' onClick={e => handleCategoryProducts(e)}/>
            </div>
        </div>
    )
}

export default Filter;