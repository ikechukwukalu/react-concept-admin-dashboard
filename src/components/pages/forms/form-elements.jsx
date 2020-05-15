import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Scripts from '../../scripts/scripts-form-elements.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class FormElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.location.pathname,
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
                                    <h2 className="pageheader-title">Form Elements </h2>
                                    <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Form Elements</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="basicform">
                                    <h3 className="section-title">Basic Form Elements</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Basic Form</h5>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="inputText3" className="col-form-label">Input Text</label>
                                                <input id="inputText3" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputEmail">Email address</label>
                                                <input id="inputEmail" type="email" placeholder="name@example.com" className="form-control" />
                                                <p>We'll never share your email with anyone else.</p>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputText4" className="col-form-label">Number Input</label>
                                                <input id="inputText4" type="number" className="form-control" placeholder="Numbers" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword">Password</label>
                                                <input id="inputPassword" type="password" placeholder="Password" className="form-control" />
                                            </div>
                                            <div className="custom-file mb-3">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">File Input</label>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3>Sizing</h3>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="inputSmall" className="col-form-label">Small</label>
                                                <input id="inputSmall" type="text" defaultValue=".form-control-sm" className="form-control form-control-sm" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputDefault" className="col-form-label">Default</label>
                                                <input id="inputDefault" type="text" defaultValue="Default input" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputLarge" className="col-form-label">Large</label>
                                                <input id="inputLarge" type="text" defaultValue=".form-control-lg" className="form-control form-control-lg" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="select">
                                    <h3 className="section-title">Select</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Select Example</h5>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="input-select">Example Select</label>
                                                <select className="form-control" id="input-select">
                                                    <option>Choose Example</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3>Sizing</h3>
                                        <form>
                                            <div className="form-group">
                                                <select className="form-control form-control-sm">
                                                    <option>Large select</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Default select</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control form-control-lg">
                                                    <option>Large select</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="checkboxradio">
                                <div className="section-block">
                                    <h3 className="section-title">Checkboxes and Radios</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Checkboxes and Radios</h5>
                                    <div className="card-body">
                                        <h4>Default (stacked)</h4>
                                        <form>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" defaultChecked={true} className="custom-control-input" /><span className="custom-control-label">Default Checkbox</span>
                                            </label>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" disabled /><span className="custom-control-label">Default Checkbox </span>
                                            </label>
                                            <h4>Inline Checkbox</h4>
                                            <label className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" defaultChecked={true} className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                                            </label>
                                            <label className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                                            </label>
                                            <label className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                                            </label>
                                        </form>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Radio (Stacked)</h4>
                                        <form>
                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="radio-stacked" defaultChecked={true} className="custom-control-input" /><span className="custom-control-label">Default Radio</span>
                                            </label>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" className="custom-control-input" disabled /><span className="custom-control-label">Default Radio</span>
                                            </label>
                                            <h5>Inline Radio</h5>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" defaultChecked={true} className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                                            </label>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                                            </label>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="validation">
                                    <h3 className="section-title">Validation States</h3>
                                    <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Validation States</h5>
                                    <div className="card-body">
                                        <form>
                                            <label htmlFor="validationServer01">First name</label>
                                            <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" defaultValue="First name" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                            <label className="col-form-label" htmlFor="validationCustom02">Error</label>
                                            <input type="text" required="" className="form-control is-invalid" id="validationCustom02" />
                                            <div className="invalid-feedback">
                                                Please provide a valid text.
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-body border-top">
                                        <form>
                                            <h5>Checkbox</h5>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input is-valid" id="customControlValidation1" required />
                                                <label className="custom-control-label" htmlFor="customControlValidation1">Success</label>
                                            </div>
                                            <div className="custom-control custom-checkbox was-validated">
                                                <input type="checkbox" className="custom-control-input is-invalid" id="customControlValidation2" required />
                                                <label className="custom-control-label" htmlFor="customControlValidation2">Error</label>
                                            </div>
                                            <h5>Radio</h5>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input is-valid" id="customControlValidation3" name="radio-stacked" required />
                                                <label className="custom-control-label" htmlFor="customControlValidation3">Success</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input is-invalid" id="customControlValidation4" name="radio-stacked" required />
                                                <label className="custom-control-label" htmlFor="customControlValidation4">Error</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="inputgroup">
                                    <h3 className="section-title">Input Groups</h3>
                                    <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Input Groups</h5>
                                    <div className="card-body">
                                        <h4>Input Text</h4>
                                        <div className="form-group">
                                            <div className="input-group mb-3"><span className="input-group-prepend"><span className="input-group-text">@</span></span>
                                                <input type="text" placeholder="Username" className="form-control" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" />
                                                <div className="input-group-append"><span className="input-group-text">.00</span></div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend"><span className="input-group-text">$</span></div>
                                                <input type="text" className="form-control" />
                                                <div className="input-group-append"><span className="input-group-text">.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Input Sizes</h4>
                                        <div className="form-group">
                                            <h5>Small </h5>
                                            <div className="input-group input-group-sm mb-3">
                                                <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                                                <input type="text" placeholder="Username" className="form-control" />
                                            </div>
                                            <h5>Default</h5>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                                                <input type="text" placeholder="Username" className="form-control" />
                                            </div>
                                            <h5>Large</h5>
                                            <div className="input-group input-group-lg mb-3">
                                                <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                                                <input type="text" placeholder="Username" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Checkboxes and radios</h4>
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <label className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" /><span className="custom-control-label"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label className="col-form-label">Button Addons</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" />
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-primary">Go!</button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" />
                                                <div className="input-group-append be-addon">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle caret tag="button" className="btn btn-secondary">
                                                            Dropdown
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem header>Header</DropdownItem>
                                                            <DropdownItem tag="a">Action</DropdownItem>
                                                            <DropdownItem tag="a">Another Action</DropdownItem>
                                                            <DropdownItem tag="a">Something else here</DropdownItem>
                                                            <DropdownItem divider />
                                                            <DropdownItem tag="a">Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend be-addon">
                                                    <button tabIndex="-1" type="button" className="btn btn-secondary">Dropdown</button>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle caret tag="button" className="btn btn-secondary dropdown-toggle-split" tabIndex="-1">
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem header>Header</DropdownItem>
                                                            <DropdownItem tag="a">Action</DropdownItem>
                                                            <DropdownItem tag="a">Another Action</DropdownItem>
                                                            <DropdownItem tag="a">Something else here</DropdownItem>
                                                            <DropdownItem divider />
                                                            <DropdownItem tag="a">Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block" id="inputmask">
                                    <h3 className="section-title">Input Mask</h3>
                                    <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Input Text</h4>
                                        <div className="form-group">
                                            <label>Date Mask <small className="text-muted">dd/mm/yyyy</small></label>
                                            <input type="text" className="form-control date-inputmask" id="date-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Phone <small className="text-muted">(999) 999-9999</small></label>
                                            <input type="text" className="form-control phone-inputmask" id="phone-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>International Number <small className="text-muted">+19 999 999 999</small></label>
                                            <input type="text" className="form-control international-inputmask" id="international-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Phone / xEx <small className="text-muted">(999) 999-9999 / x999999</small></label>
                                            <input type="text" className="form-control xphone-inputmask" id="xphone-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Purchase Order <small className="text-muted">aaaa 9999-****</small></label>
                                            <input type="text" className="form-control purchase-inputmask" id="purchase-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Credit Card Number <small className="text-muted">9999 9999 9999 9999</small></label>
                                            <input type="text" className="form-control cc-inputmask" id="cc-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>SSN <small className="text-muted">999-99-9999</small></label>
                                            <input type="text" className="form-control ssn-inputmask" id="ssn-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>ISBN <small className="text-muted">999-99-999-9999-9</small></label>
                                            <input type="text" className="form-control isbn-inputmask" id="isbn-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Percentage <small className="text-muted">99%</small></label>
                                            <input type="text" className="form-control percentage-inputmask" id="percentage-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Currency<small className="text-muted">$9999</small>
                                            </label>
                                            <input type="text" className="form-control currency-inputmask" id="currency-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Decimal using RadixPoint<small className="text-muted">123.654658</small>
                                            </label>
                                            <input type="text" className="form-control decimal-inputmask" id="decimal-mask" placeholder="" style={{textAlign: "right"}} />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Email<small className="text-muted">xxx@xxx.xxx</small>
                                            </label>
                                            <input type="text" className="form-control email-inputmask" id="email-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>Optional masks<small className="text-muted">(99) 9999[9]-9999</small>
                                            </label>
                                            <input type="text" className="form-control optional-inputmask" id="optional-mask" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label>RTL attribute<small className="text-muted">dd/mm/yyyy</small>
                                            </label>
                                            <input type="text" className="form-control date-inputmask" id="date-mask-rtl" placeholder="Enter Date" style={{textAlign: "right"}} />
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h4>Checkboxes and radios</h4>
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <label className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" /><span className="custom-control-label"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="form-group">
                                            <label className="col-form-label">Button Addons</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" />
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-primary">Go!</button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" />
                                                <div className="input-group-append be-addon">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle caret tag="button" className="btn btn-secondary">
                                                            Dropdown
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem header>Header</DropdownItem>
                                                            <DropdownItem tag="a">Action</DropdownItem>
                                                            <DropdownItem tag="a">Another Action</DropdownItem>
                                                            <DropdownItem tag="a">Something else here</DropdownItem>
                                                            <DropdownItem divider />
                                                            <DropdownItem tag="a">Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend be-addon">
                                                    <button tabIndex="-1" type="button" className="btn btn-secondary">Dropdown</button>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle caret tag="button" className="btn btn-secondary dropdown-toggle-split" tabIndex="-1">
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem header>Header</DropdownItem>
                                                            <DropdownItem tag="a">Action</DropdownItem>
                                                            <DropdownItem tag="a">Another Action</DropdownItem>
                                                            <DropdownItem tag="a">Something else here</DropdownItem>
                                                            <DropdownItem divider />
                                                            <DropdownItem tag="a">Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-block">
                                    <h3 className="section-title">Switch Component</h3>
                                    <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
                                </div>
                                <div className="card" id="switchcontent">
                                    <h5 className="card-header">Switch Component</h5>
                                    <div className="card-body">
                                        <form action="#" style={{borderRadius: "0px"}}>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Sizes</label>
                                                <div className="col-12 col-sm-8 col-lg-6 pt-1">
                                                    <div className="switch-button switch-button-xs">
                                                        <input type="checkbox" defaultChecked={true} name="switch12" id="switch12" /><span>
                                                    <label htmlFor="switch12"></label></span>
                                                    </div>
                                                    <div className="switch-button switch-button-sm">
                                                        <input type="checkbox" defaultChecked={true} name="switch13" id="switch13" /><span>
                                                    <label htmlFor="switch13"></label></span>
                                                    </div>
                                                    <div className="switch-button">
                                                        <input type="checkbox" defaultChecked={true} name="switch14" id="switch14" /><span>
                                                    <label htmlFor="switch14"></label></span>
                                                    </div>
                                                    <div className="switch-button switch-button-lg">
                                                        <input type="checkbox" defaultChecked={true} name="switch15" id="switch15" /><span>
                                                    <label htmlFor="switch15"></label></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Success</label>
                                                <div className="col-12 col-sm-8 col-lg-6 pt-1">
                                                    <div className="switch-button switch-button-success">
                                                        <input type="checkbox" defaultChecked={true} name="switch16" id="switch16" /><span>
                                                    <label htmlFor="switch16"></label></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Warning</label>
                                                <div className="col-12 col-sm-8 col-lg-6 pt-1">
                                                    <div className="switch-button switch-button-warning">
                                                        <input type="checkbox" defaultChecked={true} name="switch17" id="switch17" /><span>
                                                  <label htmlFor="switch17"></label></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Danger</label>
                                                <div className="col-12 col-sm-8 col-lg-6 pt-1">
                                                    <div className="switch-button switch-button-danger">
                                                        <input type="checkbox" defaultChecked={true} name="switch18" id="switch18" /><span>
                                                              <label htmlFor="switch18"></label></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Yes/No Labels</label>
                                                <div className="col-12 col-sm-8 col-lg-6 pt-1">
                                                    <div className="switch-button switch-button-yesno">
                                                        <input type="checkbox" defaultChecked={true} name="switch19" id="switch19" /><span>
                                                              <label htmlFor="switch19"></label></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="sidebar-nav-fixed">
                            <ul className="list-unstyled">
                                <li><a href="#overview" className="active">Overview</a></li>
                                <li><a href="#basicform">Basic Form</a></li>
                                <li><a href="#select">Select</a></li>
                                <li><a href="#checkboxradio">Checkbox & Radio</a></li>
                                <li><a href="#validation">Validation state</a></li>
                                <li><a href="#inputgroup">Input Groups</a></li>
                                <li><a href="#inputmask">Inputmask</a></li>
                                <li><a href="#switchcontent">Switch Content</a></li>
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

export default FormElements;