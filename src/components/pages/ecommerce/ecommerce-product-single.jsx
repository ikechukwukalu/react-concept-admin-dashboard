import React, { Component, Fragment, useState } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import {
    UncontrolledCarousel 
} from 'reactstrap';

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';


class EcommerceProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      basename: this.props.basename,
      path: this.props.basename.length > 0 ? window.location.pathname.trim().replace('/'+this.props.basename, '') : window.location.pathname.trim(),
      active_links: ActiveLinkIds,
      items: [
        {
          src: this.props.base_url+"assets/images/eco-slider-img-1.png",
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Slide 1 Header',
          key: '1'
        },
        {
          src: this.props.base_url+"assets/images/eco-slider-img-2.png",
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
          key: '2'
        },
        {
          src: this.props.base_url+"assets/images/eco-slider-img-3.png",
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header',
          key: '3'
        }
      ]
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
                                <h2 className="pageheader-title">E-commerce Product Single </h2>
                                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">E-coommerce</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">E-Commerce Product Single</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>                
                    <div className="row">
                        <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30">
                                    <div className="product-slider">
                                        <UncontrolledCarousel items={this.state.items} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                                    <div className="product-details">
                                        <div className="border-bottom pb-3 mb-3">
                                            <h2 className="mb-3">T-Shirt Product Title</h2>
                                            <div className="product-rating d-inline-block float-right">
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                            </div>
                                            <h3 className="mb-0 text-primary">$49.00</h3>
                                        </div>
                                        <div className="product-colors border-bottom">
                                            <h4>Select Colors</h4>
                                            <input type="radio" className="radio" id="radio-1" name="group" />
                                            <label htmlFor="radio-1"></label>
                                            <input type="radio" className="radio" id="radio-2" name="group" />
                                            <label htmlFor="radio-2"></label>
                                            <input type="radio" className="radio" id="radio-3" name="group" />
                                            <label htmlFor="radio-3"></label>
                                        </div>
                                        <div className="product-size border-bottom">
                                            <h4>Size</h4>
                                            <div className="btn-group" role="group" aria-label="First group">
                                                <button type="button" className="btn btn-outline-light">SM</button>
                                                <button type="button" className="btn btn-outline-light">L</button>
                                                <button type="button" className="btn btn-outline-light">XL</button>
                                                <button type="button" className="btn btn-outline-light">XXl</button>
                                            </div>
                                            <div className="product-qty">
                                                <h4>Quantity</h4>
                                                <div className="quantity">
                                                    <input type="number" min="1" max="9" step="1" defaultValue="1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <h4 className="mb-1">Descriptions</h4>
                                            <p>Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis. Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                                            <a href="#" className="btn btn-primary btn-block btn-lg">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-b-60">
                                    <div className="simple-card">
                                        <ul className="nav nav-tabs" id="myTab5" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active border-left-0" id="product-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="product-tab-1" aria-selected="true">Descriptions</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="product-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="product-tab-2" aria-selected="false">Reviews</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent5">
                                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="product-tab-1">
                                                <p>Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis. Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaurae.</p>
                                                <p>Nam condimentum erat aliquet rutrum fringilla. Suspendisse potenti. Vestibulum placerat elementum sollicitudin. Aliquam consequat molestie tortor, et dignissim quam blandit nec. Donec tincidunt dui libero, ac convallis urna dapibus eu. Praesent volutpat mi eget diam efficitur, a mollis quam ultricies. Morbi eu turpis odio.</p>
                                                <ul className="list-unstyled arrow">
                                                    <li>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                    <li>Donec ut elit sodales, dignissim elit et, sollicitudin nulla.</li>
                                                    <li>Donec at leo sed nisl vestibulum fermentum.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="product-tab-2">
                                                <div className="review-block">
                                                    <p className="review-text font-italic m-0">“Vestibulum cursus felis vel arcu convallis, viverra commodo felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin non auctor est, sed lacinia velit. Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.”</p>
                                                    <div className="rating-star mb-4">
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                    </div>
                                                    <span className="text-dark font-weight-bold">Virgina G. Lightfoot</span><small className="text-mute"> (Company name)</small>
                                                </div>
                                                <div className="review-block border-top mt-3 pt-3">
                                                    <p className="review-text font-italic m-0">“Integer pretium laoreet mi ultrices tincidunt. Suspendisse eget risus nec sapien malesuada ullamcorper eu ac sapien. Maecenas nulla orci, varius ac tincidunt non, ornare a sem. Aliquam sed massa volutpat, aliquet nibh sit amet, tincidunt ex. Donec interdum pharetra dignissim.”</p>
                                                    <div className="rating-star mb-4">
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                    </div>
                                                    <span className="text-dark font-weight-bold">Ruby B. Matheny</span><small className="text-mute"> (Company name)</small>
                                                </div>
                                                <div className="review-block  border-top mt-3 pt-3">
                                                    <p className="review-text font-italic m-0">“ Cras non rutrum neque. Sed lacinia ex elit, vel viverra nisl faucibus eu. Aenean faucibus neque vestibulum condimentum maximus. In id porttitor nisi. Quisque sit amet commodo arcu, cursus pharetra elit. Nam tincidunt lobortis augueat euismod ante sodales non. ”</p>
                                                    <div className="rating-star mb-4">
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                    </div>
                                                    <span className="text-dark font-weight-bold">Gloria S. Castillo</span><small className="text-mute"> (Company name)</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-b-10">
                                    <h3> Related Products</h3>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src={this.state.base_url+"assets/images/eco-product-img-1.png"} alt="" className="img-fluid" /></div>
                                            <div className="ribbons">New</div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src={this.state.base_url+"assets/images/eco-product-img-2.png"} alt="" className="img-fluid" /></div>
                                            <div className="ribbons bg-danger">Sold</div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src={this.state.base_url+"assets/images/eco-product-img-3.png"} alt="" className="img-fluid" /></div>
                                            <div className="ribbons bg-brand">Offer</div>
                                            <div className=""><a href="#" className="product-wishlist-btn active"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00
                                                    <del className="product-del">$69.00</del>
                                                </div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
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

export default EcommerceProductSingle;