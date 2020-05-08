import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import EcommerceDashboard from './ecommerce-dashboard.jsx';
import EcommerceProduct from './ecommerce-product.jsx';
import EcommerceProductSingle from './ecommerce-product-single.jsx';
import EcommerceProductCheckout from './ecommerce-product-checkout.jsx';

class Ecommerce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      match: this.props.match
    }
  }
  
  render() {
    return (
        
      <Switch>
            <Route path={`${this.state.match.url}/dashboard`} render={(props) => 
                <EcommerceDashboard {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />}
            />
            <Route path={`${this.state.match.url}/product`} render={(props) => 
                <EcommerceProduct {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/product-single`} render={(props) => 
                <EcommerceProductSingle {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />}
            />
            <Route path={`${this.state.match.url}/product-checkout`} render={(props) => 
                <EcommerceProductCheckout {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />}
            />
        </Switch>
    );
  }
}

export default Ecommerce;