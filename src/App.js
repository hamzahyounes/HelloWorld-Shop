import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Header from '../src/components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';

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

        </div>
    )
  }
}

export default App;


