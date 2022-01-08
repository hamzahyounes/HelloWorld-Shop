import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedProducts, setSearchQuery } from '../redux/actions/productActions';


const SearchBar = () => {
    let [query, setQuery] = useState('');
    let products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    let searchedProducts = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))

    const handleSearchQuery = e => {
        setQuery(() => query= e.target.value)
    }
    
    useEffect(() => {
        dispatch(setSearchQuery(query))
        dispatch(setSearchedProducts(searchedProducts))
        }
        ,[query])
    return(
        <div className='search-bar'>
            <input 
                type="text" 
                placeholder="Search..." 
                value={query}
                onChange={e => handleSearchQuery(e)}
            />
        </div>
    )
}

export default SearchBar;