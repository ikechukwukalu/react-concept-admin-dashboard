import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class MediaObject extends Component {
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-header">
                            <h2 className="pageheader-title">Media Objects</h2>
                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Media Object</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="section-block">
                            <h3 className="section-title">Bootstrap Media</h3>
                            <p>The <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/" target="_blank">media object</a> helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Basic Example of Media</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5>Media heading</h5>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Nesting Media</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        <div className="media mt-3">
                                            <a className="pr-3" href="#">
                                                <img className="mr-2 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="Generic placeholder image" /></a>
                                            <div className="media-body">
                                                <h5 className="mt-0">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Top-aligned media</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Top aligned media</h5>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p>Donec sed odio dm sociis natoque penat lorem ippum dolor sait maettempus viverra turpis. Fusce condimentum nuncac nisi dis parturient montes, nascetur ridiculus mus.</p>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante solliciturus ondimentum nunc ac sit ametm nisi vulputate frinue felis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Center-aligned media</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center user-avatar-lg mr-3 rounded" src={this.state.base_url+"assets/images/avatar-5.jpg"} alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Center-aligned media</h5>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Bottom-aligned media</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-end mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Bottom-aligned media</h5>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Order</h5>
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">Media object</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                    <img className="mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="Generic placeholder image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Media List</h5>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li className="media">
                                        <img className=" mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">List-based media object</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </li>
                                    <li className="media my-4">
                                        <img className=" mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">List-based media object</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </li>
                                    <li className="media">
                                        <img className=" mr-3 user-avatar-lg rounded" src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">List-based media object</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="section-block">
                            <h3 className="section-title">Media User </h3>
                            <p>The <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/" target="_blank">media object</a> helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card card-fluid">
                            
                            <div className="card-body">
                                <h5 className="card-title mb-2"> User Avatar </h5>
                                <a href="#" className="btn-account" role="button">
                                <span className="user-avatar">
                                        <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="user-avatar-lg rounded-circle" />
                                            </span>
                                        <div className="account-summary">
                                        <h5 className="account-name">John Abraham</h5>
                                        <span className="account-description">Administrator</span>
                                                        </div>
                                    </a>
                                <hr />
                                <h5 className="card-title mb-2"> Sizing </h5>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" /> </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-md" /> </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-sm" /> </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xs" /> </div>
                                <hr />
                                <h5 className="card-title mb-2">With badge </h5>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge online"></span>
                                </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge idle"></span>
                                </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge busy"></span>
                                </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge offline"></span>
                                </div>
                                <hr />
                                <h5 className="card-title mb-2"> Badge indicator </h5>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge has-indicator online">
                            <i className="fa fa-check"></i>
                        </span>
                                </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge has-indicator idle">
                            <i className="fa fa-minus"></i>
                        </span>
                                </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge has-indicator busy">
                            <i className="fa fa-times"></i>
                        </span>
                                </div>
                                <div className="user-avatar">
                                    <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                                    <span className="avatar-badge has-indicator offline"></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card card-fluid">
                                
                                <div className="card-body">
                                    <h5 className="card-title mb-2"> Grouping </h5>
                                    <div className="avatar-group">
                                        <div className="user-avatar">
                                            <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" /> </div>
                                        <div className="user-avatar">
                                            <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" /> </div>
                                        <div className="user-avatar">
                                            <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" /> </div>
                                        <div className="user-avatar">
                                            <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" /> </div>
                                    </div>
                                    <hr />
                                    <h5 className="card-title mb-2"> Anchor </h5>
                                    <a href="#" className="user-avatar">
                        <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        <span className="avatar-badge online"></span>
                        </a>
                                    <a href="#" className="user-avatar">
                        <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        <span className="avatar-badge idle"></span>
                        </a>
                                    <a href="#" className="user-avatar">
                        <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        <span className="avatar-badge busy"></span>
                        </a>
                                    <a href="#" className="user-avatar">
                        <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        <span className="avatar-badge offline"></span>
                        </a>
                                    <hr />
                                    <h5 className="card-title mb-2"> Anchor group </h5>
                                    <div className="avatar-group">
                                        <a href="#" className="user-avatar user-avatar-lg">
                            <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        </a>
                                        <a href="#" className="user-avatar user-avatar-lg">
                            <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        </a>
                                        <a href="#" className="user-avatar user-avatar-lg">
                            <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        </a>
                                        <a href="#" className="user-avatar user-avatar-lg">
                            <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                        </a>
                                    </div>
                                    <hr />
                                    <h5 className="card-title mb-2"> Dropdowns </h5>
                                    <div className="user-avatar user-avatar-lg dropdown">
                                        <a href="#" data-toggle="dropdown">
                            <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                            <span className="avatar-badge has-indicator online">
                            <i className="fa fa-check"></i>
                            </span>
                        </a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Online</a>
                                            <a href="#" className="dropdown-item">Warning</a>
                                            <a href="#" className="dropdown-item">Busy</a>
                                            <a href="#" className="dropdown-item">Offline</a>
                                        </div>
                                    </div>
                                    <div className="user-avatar user-avatar-lg dropdown">
                                        <a href="#" data-toggle="dropdown">
                            <img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                            <span className="avatar-badge has-indicator idle">
                            <i className="fa fa-minus"></i>
                            </span>
                        </a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Online</a>
                                            <a href="#" className="dropdown-item">Warning</a>
                                            <a href="#" className="dropdown-item">Busy</a>
                                            <a href="#" className="dropdown-item">Offline</a>
                                        </div>
                                    </div>
                                    <div className="user-avatar user-avatar-lg dropdown">
                                        <a href="#" data-toggle="dropdown">
                            <img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                            <span className="avatar-badge has-indicator busy">
                            <i className="fa fa-times"></i>
                            </span>
                        </a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Online</a>
                                            <a href="#" className="dropdown-item">Warning</a>
                                            <a href="#" className="dropdown-item">Busy</a>
                                            <a href="#" className="dropdown-item">Offline</a>
                                        </div>
                                    </div>
                                    <div className="user-avatar user-avatar-lg dropdown">
                                        <a href="#" data-toggle="dropdown">
                            <img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="User Avatar" className="rounded-circle user-avatar-lg" />
                            <span className="avatar-badge has-indicator offline">
                            <i className="fa fa-media-record"></i>
                            </span>
                        </a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Online</a>
                                            <a href="#" className="dropdown-item">Warning</a>
                                            <a href="#" className="dropdown-item">Busy</a>
                                            <a href="#" className="dropdown-item">Offline</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="section-block" id="badges">
                            <h3 className="section-title">Media User </h3>
                            <p>The <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/" target="_blank">media object</a> helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={this.state.base_url+"assets/images/card-img-3.jpg"} alt="" className=" img-fluid" />
                            </div>
                            
                            <div className="card-body pt-2">
                                
                                <div className="media mb-3">
                                    
                                    <a href="user-profile.html" className="user-avatar user-avatar-floated user-avatar-xl float-left mr-3">
                        <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                        </a>
                                    
                                    
                                    <div className="media-body">
                                        <h3 className="card-title mb-2 text-truncate">
                            <a href="user-profile.html">John Abraham</a>
                        </h3>
                                        <h6 className="card-subtitle text-muted"> UI/UX Designer </h6>
                                    </div>
                                    
                                    <button className="btn btn-sm btn-secondary">
                                        <i className="fa fa-fw fa-plus"></i> Follow</button>
                                </div>
                                
                                
                                <div className="row text-center">
                                    
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        
                                        <div className="metric">
                                            <h6 className="metric-value"> 54 </h6>
                                            <p className="metric-label"> Projects </p>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        
                                        <div className="metric">
                                            <h6 className="metric-value"> 53 </h6>
                                            <p className="metric-label"> Completed </p>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        
                                        <div className="metric">
                                            <h6 className="metric-value"> 2 </h6>
                                            <p className="metric-label"> On Going </p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card card-fluid">
                            <div className="card-img-top">
                                <img src={this.state.base_url+"assets/images/card-img-3.jpg"} alt="" className=" img-fluid" />
                            </div>
                            
                            <div className="card-body text-center">
                                
                                <a href="user-profile.html" className="user-avatar user-avatar-floated user-avatar-xl">
                                <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                </a>
                                
                                <h3 className="card-title mb-2">
                                <a href="user-profile.html">John Abraham</a>
                                </h3>
                                <h6 className="card-subtitle text-muted mb-3"> Copywriter </h6>
                                
                                <div className="row">
                                    
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        
                                        <div className="metric">
                                            <h6 className="metric-value"> 54 </h6>
                                            <p className="metric-label"> Projects </p>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        
                                        <div className="metric">
                                            <h6 className="metric-value"> 53 </h6>
                                            <p className="metric-label"> Completed </p>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        
                                        <div className="metric">
                                            <h6 className="metric-value"> 2 </h6>
                                            <p className="metric-label"> On Going </p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card card-fluid">
                            
                            <div className="card-body text-center">
                                
                                <a href="user-profile.html" className="user-avatar my-3">
                                <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                </a>
                                
                                <h3 className="card-title mb-2 text-truncate">
                                <a href="user-profile.html">John Abraham </a>
                                    </h3>
                                <h6 className="card-subtitle text-muted mb-3"> Product Designer @CreativeDivision </h6>
                                
                                <p className="skills">
                                    <a href="#" className="btn btn-xs btn-outline-secondary mt-1">react</a>
                                    <a href="#" className="btn btn-xs btn-outline-secondary mt-1">angular</a>
                                    <a href="#" className="btn btn-xs btn-outline-secondary mt-1">vue</a>
                                    <a href="#" className="btn btn-xs btn-outline-secondary mt-1">html5</a>
                                    <a href="#" className="btn btn-xs btn-outline-secondary mt-1">css3</a>
                                    <a href="#" className="btn btn-xs btn-warning circle mt-1">3+</a>
                                </p>
                                
                                <p className="text-muted"> I make stunning and cool responsive web and app design which suitable for any project purpose for your business. </p>
                                <p>
                                    <a href="#" className="btn btn-primary">View Profile
                                        <i className="fa fa-arrow-right ml-2"></i>
                                    </a>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card card-fluid">
                            
                            <div className="card-body text-center">
                                
                                <a href="user-profile.html" className="user-avatar user-avatar-xl my-3">
                                    <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                                        </a>
                                
                                <h3 className="card-title mb-2 text-truncate">
                                    <a href="user-profile.html">Beni Arisandi</a>
                                    </h3>
                                <h6 className="card-subtitle text-muted mb-3"> Product Designer @CreativeDivision </h6>
                                <p>
                                    <a href="#" className="btn btn-primary circle">View Profile
                                    <i className="fa fa-arrow-right ml-2"></i>
                                        </a>
                                </p>
                            </div>
                            
                            
                            <footer className="card-footer p-0">
                                
                                <div className="card-footer-item card-footer-item-bordered">
                                    
                                    <div className="metric">
                                        <h6 className="metric-value"> 54 </h6>
                                        <p className="metric-label"> Projects </p>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="card-footer-item card-footer-item-bordered">
                                    
                                    <div className="metric">
                                        <h6 className="metric-value"> 53 </h6>
                                        <p className="metric-label"> Completed </p>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="card-footer-item card-footer-item-bordered">
                                    
                                    <div className="metric">
                                        <h6 className="metric-value"> 2 </h6>
                                        <p className="metric-label"> On Going </p>
                                    </div>
                                    
                                </div>
                                
                            </footer>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card card-fluid">
                            
                            <div className="card-body">
                                
                                <div className="media align-items-center">
                                    
                                    <a href="user-profile.html" className="user-avatar user-avatar-xl mr-3">
                        <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xl" />
                        </a>
                                    <div className="media-body">
                                        <h3 className="card-title mb-2 text-truncate">
                            <a href="user-profile.html">Beni Arisandi</a>
                        </h3>
                                        <h6 className="card-subtitle text-muted"> UI/UX Designer </h6>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        <i className="fa fa-fw fa-plus"></i> Follow</button>
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

export default MediaObject;