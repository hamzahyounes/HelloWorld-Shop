import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Header from '../src/components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList'
import Cart from './components/Cart';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ToTop from './components/ToTop';

class App extends React.Component {

  render() {
    return (
        <div className="app">
          <Router>
          <Header />
          <ToastContainer />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/products/:Id" exact component={ProductDetail} />
              <Route path="/cart" exact component={Cart} />
              <Route>404 Not Found</Route>
            </Switch> 
          </Router>
          <ToTop />
        </div>
    )
  }
}

export default App;


