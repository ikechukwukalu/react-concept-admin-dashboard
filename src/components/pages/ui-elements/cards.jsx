import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Cards extends Component {
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
            <div className="container-fluid dashboard-content">
                <div className="row">
                    <div className="col-xl-10">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h2 className="pageheader-title">Cards </h2>
                                    <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Cards</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-section" id="overview">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h2>Overview</h2>
                                            <p className="lead">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
                                            <ul className="list-unstyled arrow">
                                                <li>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</li>
                                                <li>Additional card with action button like dropdown on right side.</li>
                                                <li>Card with tabs.</li>
                                                <li>Card with buttons on top header. </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="cards">
                                    <h3 className="section-title">Cards</h3>
                                    <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet loreim nsectetur adipiscing elit. Fusce vel elementum eros. </p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title border-bottom pb-2">Card title - Bottom Line</h3>
                                        <p className="card-text">Vestibulumin augue posuere congue.</p>
                                        <p className="card-text">Peneit amet, porta semper nisi. Simple card title bottom line</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Card Small Descriptions</h3>
                                        <p>The generated Lorem Ipsum is therefore always free from repetition</p>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="image-card">
                                    <h3 className="section-title">Card Images</h3>
                                    <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <p className="card-text">Vestibuluimis in faucibus orci luctus et ultrices posuere cubilia Curis ipsum in augue posuere congue.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <img className="card-img-top img-fluid p-2" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <p className="card-text">Faucibus orci luctus et ultrices lorem posuere cubilia Cuquis ipsum in augue posuere congue.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title mb-2">Card title</h3>
                                        <h6 className="card-subtitle text-muted">Lorem ipusm dolro sit amet</h6>
                                    </div>
                                    <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">Luctus et ultrices posuere cubilia Curae Integer quis ipsum in augue posuere congue.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <h6 className="card-subtitle text-muted mb-3">Lorem ipusm dolro sit amet</h6>
                                        <img className="img-fluid mb-4" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                        <p className="card-text">Ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Integer quis ipsum.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <p className="card-text">Faucibus orci luctus et ultrices posuere cubilia Curae Integer quis ipsum in augue posuere congue.</p>
                                        <p className="text-muted">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <p className="card-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer quis ipsum in augue posuere congue.</p>
                                        <p className="text-muted">Last updated 3 mins ago</p>
                                    </div>
                                    <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card text-white">
                                    <img className="card-img" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image" />
                                    <div className="card-img-overlay">
                                        <h3 className="card-title  text-white">Card title</h3>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="headerfooter">
                                    <h3 className="section-title">Card Header and footer</h3>
                                    <p>Add an optional header and/or footer within a card.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        Card Header
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ppsum in augue posuere congue.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                    <div className="card-footer d-flex text-muted">
                                        Card Footer
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        Card Header
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                    <div className="card-footer d-flex text-muted">
                                        Card Footer
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        Quote
                                    </div>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in
                                                <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="cardaction">
                                    <h3 className="section-title">Card Actions</h3>
                                    <p>Add an optional header and/or footer within a card and also add action.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header d-flex">
                                        <h4 className="mb-0">Card Header</h4>
                                        <div className="dropdown ml-auto">
                                            <a className="toolbar" href="#" role="button" id="dropdownMenuLink5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fab fa-mixcloud"></i>  </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink5">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header d-flex">
                                        <h4 className="mb-0">Card Header</h4>
                                        <div className="dropdown ml-auto">
                                            <a className="toolbar" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-dots-vertical"></i>  </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header d-flex">
                                        <h4 className="card-header-title">Card Header</h4>
                                        <select className="custom-select ml-auto w-auto" defaultValue={null}>
                                            <option value={null}>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header d-flex">
                                        <h4 className="card-header-title">Card Header</h4>
                                        <div className="toolbar ml-auto">
                                            <a href="#" className="btn btn-primary btn-sm ">CSV</a>
                                            <a href="#" className="btn btn-light btn-sm">PDF</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-126 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header d-flex">
                                        <h4 className="card-header-title ">Card Header</h4>
                                        <div className="toolbar card-toolbar-tabs  ml-auto">
                                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content mb-3" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                        </div>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="cardfooterlink">
                                    <h3 className="section-title">Card Footer Link<span className="badge badge-secondary ml-3">New</span></h3>
                                    <p>Add an optional header and/or footer within a card.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        Card Header
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Vestibulum ante ipsum orci luctus et ultrices posuere cger quis ipsum in augue posuere congue.</p>
                                    </div>
                                    <div className="card-footer p-0 text-center">
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Card Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        Card Header
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Faucibus orci luctus et ultrices posuere cubilia Curae Integer quis ipsum in augue posuere congue.</p>
                                    </div>
                                    <div className="card-footer  p-0 text-center d-flex justify-content-center">
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Card Link</a>
                                        </div>
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Another Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        Card Header
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Quisque faucibus, massa non consectetur lacininulla varius nisl, quis ornare diam nulla quis odio.</p>
                                    </div>
                                    <div className="card-footer p-0 text-center d-flex justify-content-center ">
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Save</a>
                                        </div>
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Edit</a>
                                        </div>
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="c-nav">
                                    <h3 className="section-title">Card Navigation</h3>
                                    <p>Add some navigation to a card’s header (or block) with Bootstrap’s nav components.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header tab-regular">
                                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="card-tab-1" data-toggle="tab" href="#card-1" role="tab" aria-controls="card-1" aria-selected="true">Card Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="card-tab-2" data-toggle="tab" href="#card-2" role="tab" aria-controls="card-2" aria-selected="false">Card Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="card-tab-3" data-toggle="tab" href="#card-3" role="tab" aria-controls="card-3" aria-selected="false">Card Tab 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="card-1" role="tabpanel" aria-labelledby="card-tab-1">
                                                <p>Etiam odio eraturabitur scelerisque leo at lectus mollis, ac dictum lectus fermentum. Donec vitae tellus sapieestas sit amet risus eu, interdum sodales metus. </p>
                                                <p>
                                                    Phasellus vulputate dui quam, a pretium lorem vestibulum nec. Cras risus nisi, sollicitudin eget dui eu, porta tinci consectetur, leo vel tincidunt imperdiet, nibh nisl consectetur titor purus dui vitae nibh. Donec ut rhoncus elit, eget aliquam enim. </p>
                                            </div>
                                            <div className="tab-pane fade" id="card-2" role="tabpanel" aria-labelledby="card-tab-2">
                                                <p>Donec vitae tellus sapieniam odio erat egestas sit amet risus euCurabitur scelerisque leo at lectus mollisac dictum lectus fermentuminterdum sodales metus. </p>
                                                <p>
                                                    Cras risus nisi, sollicitudin eget dui eu, porta tincidunt sem. Donec consectetur, leo vel tincidunt imperdiet, nibh nisl consectetur orci, ut porttitor purus dui vitae nibh. Donec ut rhoncus elit, eget aliquam enim. </p>
                                            </div>
                                            <div className="tab-pane fade" id="card-3" role="tabpanel" aria-labelledby="card-tab-3">
                                                <p>Curabitur scelerisque leo at lectus mollis, ac dictum lectus fermentum. Donec vitae tellus sapien. Etiam odio erat, egestas sit amet risus eu, interdum sodales metus. </p>
                                                <p>
                                                    Phasellus vulputate dui quam, a pretium lorem vestibulum nec. Cras risus nisi, sollicitudin eget dui eu, porta tincidunt sem. Donec consectetur, leo vel tincidunt imperdiet, nibh nisl consectetur orci, ut porttitor purus dui vitae nibh. Donec ut rhoncus elit, eget aliquam enim. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header pills-regular">
                                        <ul className="nav nav-pills card-header-pills" id="myTab2" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="card-pills-1" data-toggle="tab" href="#card-pill-1" role="tab" aria-controls="card-1" aria-selected="true">Card Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="card-pills-2" data-toggle="tab" href="#card-pill-2" role="tab" aria-controls="card-2" aria-selected="false">Card Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="card-pills-3" data-toggle="tab" href="#card-pill-3" role="tab" aria-controls="card-3" aria-selected="false">Card Tab 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content" id="myTabContent2">
                                            <div className="tab-pane fade show active" id="card-pill-1" role="tabpanel" aria-labelledby="card-tab-1">
                                                <p>Curabitur scelerisque leo at lectus mollis, ac dictum lectus fermentum. Donec vitae tellus sapien. Etiam odio erat, egestas sit amet risus eu, interdum sodales metus. </p>
                                                <p>
                                                    Phasellus vulputate dui quam, a pretium lorem vestibulum nec. Cras risus nisi, sollicitudin eget dui eu, porta tincidunt sem. Donec consectetur, leo vel tincidunt imperdiet, nibh nisl consectetur orci, ut porttitor purus dui vitae nibh. Donec ut rhoncus elit, eget aliquam enim. </p>
                                            </div>
                                            <div className="tab-pane fade" id="card-pill-2" role="tabpanel" aria-labelledby="card-tab-2">
                                                <p>Etiam libero metus, dapibus vel sollicitudin vel, cursus sit amet urna. Nam imperdiet sem et purus varius aliquam. </p>
                                                <p>
                                                    Proin pulvinar diam tempor auctor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec consectetur, leo vel tincidunt imperdiet, nibh nisl consectetur orci, ut porttitor purus dui vitae nibh. Donec ut rhoncus elit, eget aliquam enim. </p>
                                            </div>
                                            <div className="tab-pane fade" id="card-pill-3" role="tabpanel" aria-labelledby="card-tab-3">
                                                <p>Donec vitae tellus sapietiam odio erat, egestas sit amet risus euabitur scelerisque leo at lectus mollis, ac dictum lectus fermentum. interdum sodales metus. </p>
                                                <p>
                                                    Cras risus nisi, sollicitudin eget dui eu porta tincidunt sem. Donec consectetur, leo vel tincidunt imperdiet, nibh nisl consectetur orci, ut porttitor purus dui vitae nibh. Donec ut rhoncus elit, eget aliquam enim. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="masonary">
                                    <h3 className="section-title">Card Masonary</h3>
                                    <p>Cards can be organized into Masonry-like columns with just CSS by wrapping them in card-columns.</p>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card-columns">
                                    <div className="card">
                                        <img className="card-img-top" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">Card title that wraps to a new line</h3>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div className="card p-3">
                                        <blockquote className="blockquote mb-0 card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted"> Someone famous in <cite title="Source Title">Source Title</cite>        </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">Card title</h3>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card bg-primary text-white text-center p-3">
                                        <blockquote className="blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                            <footer className="blockquote-footer text-white">
                                                <small>          Someone famous in <cite title="Source Title">Source Title</cite>        </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h3 className="card-title">Card title</h3>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image" />
                                    </div>
                                    <div className="card p-3 text-right">
                                        <blockquote className="blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">   Someone famous in <cite title="Source Title">Source Title</cite>        </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Card title</h3>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="card-list">
                                    <h3 className="section-title">Card List Groups</h3>
                                    <p>Create lists of content in a card with a flush list group.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Kitchen Sink</h3>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Kitchen Sink</h3>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                    <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Card title</h3>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div className="card-footer p-0 text-center d-flex justify-content-center">
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Card link</a>
                                        </div>
                                        <div className="card-footer-item card-footer-item-bordered">
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="card-variance">
                                    <h3 className="section-title"> Card Variance </h3>
                                    <p> Easily display grids of images, videos, text, and more. </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                        <figcaption className="figure-caption">
                                            <h6 className="figure-title"> Simple figure </h6>
                                            <p className="text-muted mb-0"> Give some text description </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure has-hoverable">
                                    <figure className="figure">
                                        <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                        <figcaption className="figure-caption">
                                            <h6 className="figure-title"> Hoverable figure </h6>
                                            <p className="text-muted mb-0"> Give some text description </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                        <figcaption className="figure-caption">
                                            <h6 className="figure-title"><a href="#">Clickable title</a> </h6>
                                            <p className="text-muted mb-0"> Hit the title to view details </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-img">
                                            <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                            <a href="#" className="img-link">
                                                <div className="tile tile-circle ">
                                                    <span><i className="fas fa-circle text-primary fa-2x"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <figcaption className="figure-caption">
                                            <h6 className="figure-title"><a href="#">Zoom action</a></h6>
                                            <p className="text-muted mb-0"> Give some text description </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-img">
                                            <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                            <div className="figure-action">
                                                <a href="#" className="btn btn-block btn-sm btn-primary">Quick Action</a>
                                            </div>
                                        </div>
                                        <figcaption className="figure-caption">
                                            <h6 className="figure-title"><a href="#">Call action</a> </h6>
                                            <p className="text-muted mb-0"> Give some text description </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-img">
                                            <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                            <div className="figure-tools">
                                                <a href="#" className="tile tile-circle tile-sm mr-auto">
                                                                <span className="oi-data-transfer-download"></span></a>
                                                <span className="badge badge-danger">Illustration</span>
                                            </div>
                                            <div className="figure-action">
                                                <a href="#" className="btn btn-block btn-sm btn-primary">Quick Action</a>
                                            </div>
                                        </div>
                                        <figcaption className="figure-caption">
                                            <h6 className="figure-title"><a href="#">Figure tools</a></h6>
                                            <p className="text-muted mb-0"> Give some text description </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-img">
                                            <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                            <div className="figure-description">
                                                <h6 className="figure-title"> Figure description </h6>
                                                <p className="text-muted mb-0">
                                                    <small>Laboriosam neque officia adipisci quo ut placeat labore? Doloribus, ipsam? Voluptates, minus.</small>
                                                </p>
                                            </div>
                                            <div className="figure-tools">
                                                <a href="#" className="tile tile-circle tile-sm mr-auto"><span className="oi oi-data-transfer-download"></span></a>
                                                <span className="badge badge-warning">Gadget</span>
                                            </div>
                                            <div className="figure-action">
                                                <a href="#" className="btn btn-block btn-sm btn-primary">Quick Action</a>
                                            </div>
                                        </div>
                                        <figcaption className="figure-caption">
                                            <ul className="list-inline d-flex text-muted mb-0">
                                                <li className="list-inline-item mr-auto">
                                                    <span className="oi oi-paperclip"></span> 2MB </li>
                                                <li className="list-inline-item">
                                                    <span className="oi oi-calendar"></span>
                                                </li>
                                            </ul>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-img">
                                            <img className="img-fluid" src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" />
                                            <div className="figure-description">
                                                <h6 className="figure-title"> Long title text can be place here </h6>
                                                <p className="text-muted mb-0">
                                                    <small>Laboriosam neque officia adipisci quo ut placeat labore? Doloribus, ipsam? Voluptates, minus.</small>
                                                </p>
                                            </div>
                                            <div className="figure-tools">
                                                <a href="#" className="tile tile-circle tile-sm mr-auto">   </a>
                                                <span className="badge badge-danger">Social</span>
                                            </div>
                                            <div className="figure-action">
                                                <a href="#" className="btn btn-block btn-sm btn-primary">Quick Action</a>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-attachment">
                                            <span className="fa-stack fa-lg">
                                                    <i className="fa fa-square fa-stack-2x text-primary"></i>
                                                    <i className="fa fa-file-pdf fa-stack-1x fa-inverse"></i>
                                                        </span>
                                        </div>
                                        <figcaption className="figure-caption">
                                            <ul className="list-inline d-flex text-muted mb-0">
                                                <li className="list-inline-item text-truncate mr-auto">
                                                    <span><i className="fas fa-file-pdf"></i></span> Attachment.pdf </li>
                                                <li className="list-inline-item">
                                                    <a download href={this.state.base_url+"assets/images/card-img-1.jpg"}>


                                                        <i className="fas fa-download "></i></a>
                                                </li>
                                            </ul>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card card-figure">
                                    <figure className="figure">
                                        <div className="figure-attachment">
                                            <img src={this.state.base_url+"assets/images/card-img.jpg"} alt="Card image cap" className="img-fluid" /> </div>
                                        <figcaption className="figure-caption">
                                            <ul className="list-inline d-flex text-muted mb-0">
                                                <li className="list-inline-item text-truncate mr-auto">Image attachment </li>
                                                <li className="list-inline-item">
                                                        <a href="../assets/images/card-img-1.jpg" download>  <span><i className="fas fa-download "></i></span></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="btn btn-reset text-muted" title="More actions">
                                                            <span className="fas fa-caret-down"></span>
                                                        </a>
                                                    </li>
                                            </ul>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="sidebar-nav-fixed">
                            <ul className="list-unstyled">
                                <li><a href="#overview" className="active">Overview</a></li>
                                <li><a href="#cards">Cards</a></li>
                                <li><a href="#image-card">Card Images</a></li>
                                <li><a href="#headerfooter">Header & Footer</a></li>
                                <li><a href="#cardaction">Card Action<span className="badge badge-secondary ml-1">Fresh</span></a></li>
                                <li><a href="#cardfooterlink">Card With Footer Link <span className="badge badge-secondary ml-1">New</span></a></li>
                                <li><a href="#c-nav">Card Navigation</a></li>
                                <li><a href="#masonary">Card Masonary</a></li>
                                <li><a href="#card-list">Card List Group</a></li>
                                <li><a href="#card-variance">Card Variance</a></li>
                                <li><a href="#top">Back to Top</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default Cards;