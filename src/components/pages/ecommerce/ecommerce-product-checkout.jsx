import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class EcommerceProductCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      basename: this.props.basename,
      path: this.props.basename.length > 0 ? window.location.pathname.trim().replace('/'+this.props.basename, '') : window.location.pathname.trim(),
      active_links: ActiveLinkIds
    }
  }

  componentDidMount() {
      if(typeof this.state.active_links[this.state.path] == 'object') {
        this.state.active_links[this.state.path].map(el => {
            $('#'+el).addClass('active');
        });
      }
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
    if(typeof this.state.active_links[this.state.path] == 'object') {
      this.state.active_links[this.state.path].map(el => {
          $('#'+el).removeClass('active');
      });
      
    }
  }
  
  render() {
    return (
        <Fragment>
            <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">E-commerce Product Checkout </h2>
                                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">E-commerce</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">E-Commerce Product Checkout</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="mb-0">Billing address</h4>
                                        </div>
                                        <div className="card-body">
                                            <form className="needs-validation" noValidate="">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="firstName">First name</label>
                                                        <input type="text" className="form-control" id="firstName" placeholder="" required="" />
                                                        <div className="invalid-feedback">
                                                            Valid first name is required.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lastName">Last name</label>
                                                        <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                                                        <div className="invalid-feedback">
                                                            Valid last name is required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="username">Username</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                                        <div className="invalid-feedback" style={{width: "100%"}}>
                                                            Your username is required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="address">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                                    <div className="invalid-feedback">
                                                        Please enter your shipping address.
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5 mb-3">
                                                        <label htmlFor="country">Country</label>
                                                        <select className="custom-select d-block w-100" id="country" required="">
                                                            <option value="">Choose...</option>
                                                            <option>United States</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select a valid country.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="state">State</label>
                                                        <select className="custom-select d-block w-100" id="state" required="">
                                                            <option value="">Choose...</option>
                                                            <option>California</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please provide a valid state.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 mb-3">
                                                        <label htmlFor="zip">Zip</label>
                                                        <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                                        <div className="invalid-feedback">
                                                            Zip code required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mb-4" />
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="same-address" />
                                                    <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                                    <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                                                </div>
                                                <hr className="mb-4" />
                                                <h4 className="mb-3">Payment</h4>
                                                <div className="d-block my-3">
                                                    <div className="custom-control custom-radio">
                                                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                                        <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="cc-name">Name on card</label>
                                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                                        <small className="text-muted">Full name as displayed on card</small>
                                                        <div className="invalid-feedback">
                                                            Name on card is required
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="cc-number">Credit card number</label>
                                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                                        <div className="invalid-feedback">
                                                            Credit card number is required
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 mb-3">
                                                        <label htmlFor="cc-expiration">Expiration</label>
                                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                                        <div className="invalid-feedback">
                                                            Expiration date required
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 mb-3">
                                                        <label htmlFor="cc-cvv">CVV</label>
                                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                                        <div className="invalid-feedback">
                                                            Security code required
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mb-4" />
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="d-flex justify-content-between align-items-center mb-0">
                                                        <span className="text-muted">Your cart</span>
                                        <span className="badge badge-secondary badge-pill">3</span>
                                                </h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group mb-3">
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Product name</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$12</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Second product</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$8</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Third item</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between bg-light">
                                                    <div className="text-success">
                                                        <h6 className="my-0">Promo code</h6>
                                                        <small>EXAMPLECODE</small>
                                                    </div>
                                                    <span className="text-success">-$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <span>Total (USD)</span>
                                                    <strong>$20</strong>
                                                </li>
                                            </ul>
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="" />
                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default EcommerceProductCheckout;