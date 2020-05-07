import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class General extends Component {
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
        <div className="container-fluid dashboard-content">
                <div className="row">
                    <div className="col-xl-10">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h2 className="pageheader-title">General Elements</h2>
                                    <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">General</li>
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
                                            <p className="lead">Nam pulvinar interdum turpis a mattis. Etiam augue leo, mollis a massa sagittis, egestas pretium risus. Aliquam auctor nibh mauris, at fringilla elit lobortis sodales. Praesent volutpat felis et placerat elementum. </p>
                                            <ul className="list-unstyled arrow">
                                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Mauris bibendum massa ut porttitor congue.</li>
                                                <li>Morbi condimentum magna eget facilisis accumsan.</li>
                                                <li>Proin euismod eros nec libero efficitur, a dapibus mauris condimentum. </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="buttons">
                                    <h3 className="section-title">Buttons</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Buttons</h5>
                                    <div className="card-body">
                                        <h4>Basic Buttons</h4>
                                        <a href="#" className="btn btn-primary">Primary</a>
                                        <a href="#" className="btn btn-brand">Brand</a>
                                        <a href="#" className="btn btn-secondary">Secondary</a>
                                        <a href="#" className="btn btn-success">Success</a>
                                        <a href="#" className="btn btn-danger">Danger</a>
                                        <a href="#" className="btn btn-warning">Warning</a>
                                        <a href="#" className="btn btn-info">Info</a>
                                        <a href="#" className="btn btn-light">Light</a>
                                        <a href="#" className="btn btn-dark">Dark</a>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Outline Buttons</h4>
                                        <a href="#" className="btn btn-outline-primary">Primary</a>
                                        <a href="#" className="btn btn-outline-brand">Brand</a>
                                        <a href="#" className="btn btn-outline-secondary">Secondary</a>
                                        <a href="#" className="btn btn-outline-success">Success</a>
                                        <a href="#" className="btn btn-outline-danger">Danger</a>
                                        <a href="#" className="btn btn-outline-warning">Warning</a>
                                        <a href="#" className="btn btn-outline-info">Info</a>
                                        <a href="#" className="btn btn-outline-light">Light</a>
                                        <a href="#" className="btn btn-outline-dark">Dark</a>
                                    </div>
                                     <div className="card-body border-top">
                                        <h4>Rounded Buttons</h4>
                                        <a href="#" className="btn btn-rounded btn-primary">Primary</a>
                                        <a href="#" className="btn btn-rounded btn-brand">Brand</a>
                                        <a href="#" className="btn btn-rounded btn-secondary">Secondary</a>
                                        <a href="#" className="btn btn-rounded btn-success">Success</a>
                                        <a href="#" className="btn btn-rounded btn-danger">Danger</a>
                                        <a href="#" className="btn btn-rounded btn-warning">Warning</a>
                                        <a href="#" className="btn btn-rounded btn-info">Info</a>
                                        <a href="#" className="btn btn-rounded btn-light">Light</a>
                                        <a href="#" className="btn btn-rounded btn-dark">Dark</a>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Buttons Sizes</h4>
                                        <a href="#" className="btn btn-primary btn-lg">Large button</a>
                                        <a href="#" className="btn btn-primary">Default button</a>
                                        <a href="#" className="btn btn-primary btn-sm">Small button</a>
                                        <a href="#" className="btn btn-primary btn-xs">XSmall button</a>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Block Level Buttons</h4>
                                        <a href="#" className="btn btn-primary btn-block">Block level button</a>
                                        <a href="#" className="btn btn-brand btn-block">Block level button</a>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Active State</h4>
                                        <a href="#" className="btn btn-primary active">Primary</a>
                                        <a href="#" className="btn btn-brand active">Brand</a>
                                        <a href="#" className="btn btn-secondary active">Secondary</a>
                                        <a href="#" className="btn btn-success active">Success</a>
                                        <a href="#" className="btn btn-danger active">Danger</a>
                                        <a href="#" className="btn btn-warning active">Warning</a>
                                        <a href="#" className="btn btn-info active">Info</a>
                                        <a href="#" className="btn btn-light active">Light</a>
                                        <a href="#" className="btn btn-dark active">Dark</a>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Radio Buttons</h4>
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" name="options" id="option1" defaultChecked={true} />Active
                                            </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" name="options" id="option2" /> Radio
                                            </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" name="options" id="option3" /> Radio
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="color">
                                    <h3 className="section-title">Color</h3>
                                    <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Color</h5>
                                    <div className="card-body">
                                        <h4>Background Color</h4>
                                        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                                        <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                                        <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
                                        <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                                        <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                                        <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
                                        <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
                                        <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                                        <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Color</h4>
                                        <p className="text-primary">.text-primary</p>
                                        <p className="text-secondary">.text-secondary</p>
                                        <p className="text-success">.text-success</p>
                                        <p className="text-danger">.text-danger</p>
                                        <p className="text-warning">.text-warning</p>
                                        <p className="text-info">.text-info</p>
                                        <p className="text-light bg-dark">.text-light</p>
                                        <p className="text-dark">.text-dark</p>
                                        <p className="text-muted">.text-muted</p>
                                        <p className="text-white bg-dark">.text-white</p>
                                    </div>
                                    <div className="card-body border-top border-boxes">
                                        <h4>Borders</h4>
                                        <span className="border"></span>
                                        <span className="border-top"></span>
                                        <span className="border-right"></span>
                                        <span className="border-bottom"></span>
                                        <span className="border-left"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="alerts">
                                    <h3 className="section-title">Alerts</h3>
                                    <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Alerts Examples</h5>
                                    <div className="card-body">
                                        <h4>Basic Alerts</h4>
                                        <div className="alert alert-primary" role="alert">
                                            This is a primary alert—check it out!
                                        </div>
                                        <div className="alert alert-secondary" role="alert">
                                            This is a secondary alert—check it out!
                                        </div>
                                        <div className="alert alert-success" role="alert">
                                            This is a success alert—check it out!
                                        </div>
                                        <div className="alert alert-danger" role="alert">
                                            This is a danger alert—check it out!
                                        </div>
                                        <div className="alert alert-warning" role="alert">
                                            This is a warning alert—check it out!
                                        </div>
                                        <div className="alert alert-info" role="alert">
                                            This is a info alert—check it out!
                                        </div>
                                        <div className="alert alert-light" role="alert">
                                            This is a light alert—check it out!
                                        </div>
                                        <div className="alert alert-dark" role="alert">
                                            This is a dark alert—check it out!
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Link Alerts</h4>
                                        <div className="alert alert-primary" role="alert">
                                            This is a primary alert—check it out!
                                        </div>
                                        <div className="alert alert-secondary" role="alert">
                                            This is a secondary alert—check it out!
                                        </div>
                                        <div className="alert alert-success" role="alert">
                                            This is a success alert—check it out!
                                        </div>
                                        <div className="alert alert-danger" role="alert">
                                            This is a danger alert—check it out!
                                        </div>
                                        <div className="alert alert-warning" role="alert">
                                            This is a warning alert—check it out!
                                        </div>
                                        <div className="alert alert-info" role="alert">
                                            This is a info alert—check it out!
                                        </div>
                                        <div className="alert alert-light" role="alert">
                                            This is a light alert—check it out!
                                        </div>
                                        <div className="alert alert-dark" role="alert">
                                            This is a dark alert—check it out!
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Additional Content</h4>
                                        <div className="alert alert-primary" role="alert">
                                            <h4 className="alert-heading">Well done!</h4>
                                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                            <hr />
                                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Dismissing</h4>
                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                            <a href="#" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="badges">
                                    <h3 className="section-title">Badges</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Badges Examples</h5>
                                    <div className="">
                                        <div className="card-body">
                                            <h4>Default Badges</h4>
                                            <span className="badge badge-primary">Primary</span>
                                            <span className="badge badge-brand">Brand</span>
                                            <span className="badge badge-secondary">Secondary</span>
                                            <span className="badge badge-success">Success</span>
                                            <span className="badge badge-danger">Danger</span>
                                            <span className="badge badge-warning">Warning</span>
                                            <span className="badge badge-info">Info</span>
                                            <span className="badge badge-light">Light</span>
                                            <span className="badge badge-dark">Dark</span>
                                        </div>
                                        <div className="card-body border-top">
                                            <h4>Contextual Variations</h4>
                                            <span className="badge badge-primary">Primary</span>
                                            <span className="badge badge-brand">Brand</span>
                                            <span className="badge badge-secondary">Secondary</span>
                                            <span className="badge badge-success">Success</span>
                                            <span className="badge badge-danger">Danger</span>
                                            <span className="badge badge-warning">Warning</span>
                                            <span className="badge badge-info">Info</span>
                                            <span className="badge badge-light">Light</span>
                                            <span className="badge badge-dark">Dark</span>
                                        </div>
                                        <div className="card-body border-top">
                                            <h4>Pill Badges</h4>
                                            <span className="badge badge-pill badge-primary">Primary</span>
                                            <span className="badge badge-pill badge-brand">Brand</span>
                                            <span className="badge badge-pill badge-secondary">Secondary</span>
                                            <span className="badge badge-pill badge-success">Success</span>
                                            <span className="badge badge-pill badge-danger">Danger</span>
                                            <span className="badge badge-pill badge-warning">Warning</span>
                                            <span className="badge badge-pill badge-info">Info</span>
                                            <span className="badge badge-pill badge-light">Light</span>
                                            <span className="badge badge-pill badge-dark">Dark</span>
                                        </div>
                                        <div className="card-body border-top">
                                            <h4>Link Badges</h4>
                                            <a href="#" className="badge badge-pill badge-primary">Primary</a>
                                            <a href="#" className="badge badge-pill badge-brand">Brand</a>
                                            <a href="#" className="badge badge-pill badge-secondary">Secondary</a>
                                            <a href="#" className="badge badge-pill badge-success">Success</a>
                                            <a href="#" className="badge badge-pill badge-danger">Danger</a>
                                            <a href="#" className="badge badge-pill badge-warning">Warning</a>
                                            <a href="#" className="badge badge-pill badge-info">Info</a>
                                            <a href="#" className="badge badge-pill badge-light">Light</a>
                                            <a href="#" className="badge badge-pill badge-dark">Dark</a>
                                        </div>
                                        <div className="card-body border-top">
                                            <h4>Dot Badges</h4>
                                            <span className="mr-2"> <span className="badge-dot badge-primary"></span>Primary</span>
                                            <span className="mr-2"> <span className="badge-dot badge-brand"></span>Brand</span>
                                            <span className="mr-2"><span className="badge-dot  badge-secondary"></span>Secondary</span>
                                            <span className="mr-2"><span className="badge-dot badge-success"></span>Success</span>
                                            <span className="mr-2"><span className="badge-dot badge-danger"></span>Danger</span>
                                            <span className="mr-2"><span className="badge-dot badge-warning"></span>Warning</span>
                                            <span className="mr-2"> <span className="badge-dot badge-info"></span>Info</span>
                                            <span className="mr-2">  <span className="badge-dot badge-light"></span>Light</span>
                                            <span className="mr-2">  <span className="badge-dot badge-dark"></span>Dark</span>
                                        </div>
                                        <div className="card-body border-top">
                                            <h4>Notification Badges</h4>
                                            <a href="#" className="btn btn-primary">
                                                        Notifications <span className="badge badge-light">4</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="tooltip">
                                    <h3 className="section-title">Tooltips & Popover</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Tooltips & Popovers</h5>
                                    <div className="card-body">
                                        <h4>Tooltip</h4>
                                        <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                            Tooltip on top
                                        </button>
                                        <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                            Tooltip on right
                                        </button>
                                        <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                            Tooltip on bottom
                                        </button>
                                        <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                                            Tooltip on left
                                        </button>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Popovers</h4>
                                        <button type="button" className="btn btn-lg btn-primary" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Four Directions</h4>
                                        <button type="button" className="btn btn-primary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                            Popover on top
                                        </button>
                                        <button type="button" className="btn btn-primary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                            Popover on right
                                        </button>
                                        <button type="button" className="btn btn-primary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                            Popover on bottom
                                        </button>
                                        <button type="button" className="btn btn-primary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                            Popover on left
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="modal">
                                    <h3 className="section-title">Modals</h3>
                                    <p>Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Examples</h5>
                                    <div className="card-body">
                                        <div className="">
                                            <h4>Live Demo</h4>
                                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                Launch demo modal
                                            </a>
                                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <a href="#" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </a>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Woohoo, You are readng this text in a modal! Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <a href="#" className="btn btn-secondary" data-dismiss="modal">Close</a>
                                                            <a href="#" className="btn btn-primary">Save changes</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="pagination">
                                    <h3 className="section-title">Paginations</h3>
                                    <p>Examples for showing pagination to indicate a series of related content exists across multiple pages.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Pagination</h5>
                                    <div className="card-body">
                                        <h4>Default Pagination</h4>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active"><a className="page-link " href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Sizing</h4>
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-lg">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" tabIndex="-1">1</a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            </ul>
                                        </nav>
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-sm">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" tabIndex="-1">1</a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Working with icon</h4>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span><span className="sr-only">Previous</span>      </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span>
                                                       <span className="sr-only">Next</span></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="images">
                                    <h5 className="card-header">Images</h5>
                                    <div className="card-body">
                                        <img src="http://via.placeholder.com/200x150" className="img-fluid mr-3" alt="Responsive image" />
                                        <img src="http://via.placeholder.com/150x150" className="img-thumbnail mr-3" alt="Responsive image" />
                                        <img src="http://via.placeholder.com/150x150" className="rounded-circle mr-3" alt="Responsive image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="pro-bars">
                                    <h5 className="card-header">Progress Bars</h5>
                                    <div className="card-body">
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Progress sm</h5>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Progress md</h5>
                                                <div className="progress progress-md">
                                                    <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Progress lg</h5>
                                                <div className="progress progress-lg">
                                                    <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Progress xl</h5>
                                                <div className="progress progress-xl">
                                                    <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card" id="loader">
                                    <h5 className="card-header">Basic Preloader</h5>
                                    <div className="card-body">
                                        <span className="dashboard-spinner spinner-xxl"></span>
                                        <span className="dashboard-spinner spinner-xl"></span>
                                        <span className="dashboard-spinner spinner-lg"></span>
                                        <span className="dashboard-spinner spinner-md"></span>
                                        <span className="dashboard-spinner spinner-sm"></span>
                                        <span className="dashboard-spinner spinner-xs"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Preloader States</h5>
                                    <div className="card-body">
                                        <span className="dashboard-spinner spinner-primary spinner-xxl"></span>
                                        <span className="dashboard-spinner spinner-success spinner-xl "></span>
                                        <span className="dashboard-spinner spinner-danger spinner-lg"></span>
                                        <span className="dashboard-spinner spinner-info spinner-md"></span>
                                        <span className="dashboard-spinner spinner-warning spinner-sm"></span>
                                        <span className="dashboard-spinner spinner-secondary spinner-xs"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="sidebar-nav-fixed">
                            <ul className="list-unstyled">
                                <li><a href="#overview" className="active">Overview</a></li>
                                <li><a href="#buttons">Buttons</a></li>
                                <li><a href="#color">Color</a></li>
                                <li><a href="#alerts">Alerts</a></li>
                                <li><a href="#badges">Badges</a></li>
                                <li><a href="#tooltip">Tooltip</a></li>
                                <li><a href="#modal">Modal</a></li>
                                <li><a href="#pagination">Paginations</a></li>
                                <li><a href="#images">Images</a></li>
                                <li><a href="#pro-bars">Progress Bars</a></li>
                                <li><a href="#loader">Loader</a></li>
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

export default General;