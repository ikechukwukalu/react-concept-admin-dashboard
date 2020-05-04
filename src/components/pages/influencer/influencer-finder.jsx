import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class InfluencerFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname,
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
            <div className="influence-finder">
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h3 className="mb-2">Influencer Finder </h3>
                                <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Influencer Finder Template</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-primary search-btn" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                            
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Henry Barbara</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>Salt Lake City, UT <span className="m-l-10">Male<span className="m-l-20">29 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                                </div>
                                
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Louis Mstara</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>Avenal, CA, USA<span className="m-l-10">Female<span className="m-l-20">24 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                                </div>
                                
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Nichole Oliver</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>98 Richland Avenue, USA<span className="m-l-10">Male<span className="m-l-20">34 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                                </div>
                                
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Pallavi Johnson</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>4427 Wines Lane, USA <span className="m-l-10">Female<span className="m-l-20">29 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src={this.state.base_url+"assets/images/avatar-5.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Komal Johnson</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>4427 Wines Lane, USA <span className="m-l-10">Female<span className="m-l-20">29 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                            </div>
                            
                        </div>
                            
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="font-16">Sorting By</h3>
                                    <select className="form-control">
                                        <option>Followers</option>
                                        <option>Followers</option>
                                    </select>
                                </div>
                                <div className="card-body border-top">
                                    <h3 className="font-16">Influncer by Rating</h3>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio1"><i className="fas fa-star rating-color fa-xs"></i></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio2"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio3"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio4"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio5"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i></label>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h3 className="font-16">Social Media Platform</h3>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                        <label className="custom-control-label" htmlFor="customCheck10">Facebook</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                        <label className="custom-control-label" htmlFor="customCheck11">Instagram</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                        <label className="custom-control-label" htmlFor="customCheck12">Pinterest</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                        <label className="custom-control-label" htmlFor="customCheck13">Twitter</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck14" />
                                        <label className="custom-control-label" htmlFor="customCheck14">Youtube</label>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h3 className="font-16">Influncer Category</h3>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                        <label className="custom-control-label" htmlFor="customCheck15">Business</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck16" />
                                        <label className="custom-control-label" htmlFor="customCheck16">Lifestyle</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck17" />
                                        <label className="custom-control-label" htmlFor="customCheck17">Fitness</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck18" />
                                        <label className="custom-control-label" htmlFor="customCheck18">Sports</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck19" />
                                        <label className="custom-control-label" htmlFor="customCheck19">Clothing</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck20" />
                                        <label className="custom-control-label" htmlFor="customCheck20">Pets & Animals</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck21" />
                                        <label className="custom-control-label" htmlFor="customCheck21">Beauty & Makeup</label>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h3 className="font-16">Age Demographics</h3>
                                    <select className="form-control" defaultValue={null}>
                                        <option value={null}>Select the Age</option>
                                        <option value="20-30">20-30</option>
                                        <option value="30-40">30-40</option>
                                        <option value="40-50">40-50</option>
                                    </select>
                                </div>
                                <div className="card-body border-top">
                                    <a href="#" className="btn btn-secondary btn-lg btn-block">Submit</a>
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

export default InfluencerFinder;