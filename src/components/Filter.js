import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcFilledFilter } from 'react-icons/fc'
import { setCurrentCategory } from '../redux/actions/productActions';
import { actionTypes } from "../redux/constants/actions-types";
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import OrangeSwitch from './OrangeSwitchBtn';

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
        console.log("The value is: ", value)
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
                <FcFilledFilter className='filter-icon'/>
            </div>

            <div className='category-field'>
                <label htmlFor='All-Categories'>All Products ({allProducts.length})</label>
                {/* <Checkbox 
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
                    value="all"
                    id="All-Categories" 
                    sx={{ color: "#aaa",'&.Mui-checked': {color: orange[600],}, }} 
                /> */}
                <OrangeSwitch
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
                    value="all"
                    id="All-Categories" 
                    sx={{ color: "#aaa",'&.Mui-checked': {color: orange[600],}, }} 
                    />
            </div>
            
            <div className='category-field'>
                <label htmlFor='Men'>Men Clothes ({allProducts.filter(p => p.category === "men's clothing").length})</label>
                <Checkbox 
                    id="Men" 
                    checked={category.includes("men's clothing") ? true : false} 
                    value="men's clothing" 
                    onClick={e => handleCategoryProducts(e)} 
                    sx={{ color: "#aaa",'&.Mui-checked': {color: orange[600],}, }} 
                />
            </div>
            <div className='category-field'>
                <label htmlFor='Women'>Women Clothes ({allProducts.filter(p => p.category === "women's clothing").length})</label>
                <Checkbox
                    id="Women" 
                    checked={category.includes("women's clothing") ? true : false} 
                    value="women's clothing" 
                    onClick={e => handleCategoryProducts(e)} 
                    sx={{ color: "#aaa",'&.Mui-checked': {color: orange[600],}, }} 
                />
            </div>
            <div className='category-field'>
                <label htmlFor='Jewelery'>Jewelery ({allProducts.filter(p => p.category === "jewelery").length})</label>
                <Checkbox
                    checked={category.includes("jewelery") ? true : false} 
                    id="Jewelery" 
                    value="jewelery" 
                    onClick={e => handleCategoryProducts(e)}
                    sx={{ color: "#aaa",'&.Mui-checked': {color: orange[600],}, }} 
                    />
            </div>
            <div className='category-field'>
                <label htmlFor='Electronics'>Electronics ({allProducts.filter(p => p.category === "electronics").length})</label>
                <Checkbox 
                    checked={category.includes('electronics') ? true : false} 
                    id="Electronics" 
                    value="electronics" 
                    onClick={e => handleCategoryProducts(e)}
                    sx={{ color: "#aaa",'&.Mui-checked': {color: orange[600],}, }} 
                    />
            </div>
        </div>
    )
}

export default Filter;