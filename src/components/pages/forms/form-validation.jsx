import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class FormValidation extends Component {
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
        <div className="container-fluid  dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Form Validations </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Form Validations</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
         
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Bootstrap Validation Form</h5>
                            <div className="card-body">
                                <form className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <label htmlFor="validationCustom01">First name</label>
                                            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <label htmlFor="validationCustom02">Last name</label>
                                            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <label htmlFor="validationCustomUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <label htmlFor="validationCustom03">City</label>
                                            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <label htmlFor="validationCustom04">State</label>
                                            <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <label htmlFor="validationCustom05">Zip</label>
                                            <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required />
                                                    <label className="form-check-label" htmlFor="invalidCheck">
                                                        Agree to terms and conditions
                                                    </label>
                                                    <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Basic Form</h5>
                            <div className="card-body">
                                <form action="#" id="basicform" data-parsley-validate="">
                                    <div className="form-group">
                                        <label htmlFor="inputUserName">User Name</label>
                                        <input id="inputUserName" type="text" name="name" data-parsley-trigger="change" required="" placeholder="Enter user name" autoComplete="off" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email address</label>
                                        <input id="inputEmail" type="email" name="email" data-parsley-trigger="change" required="" placeholder="Enter email" autoComplete="off" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputRepeatPassword">Repeat Password</label>
                                        <input id="inputRepeatPassword" data-parsley-equalto="#inputPassword" type="password" required="" placeholder="Password" className="form-control" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                            <label className="be-checkbox custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="col-sm-6 pl-0">
                                            <p className="text-right">
                                                <button type="submit" className="btn btn-space btn-primary">Submit</button>
                                                <button className="btn btn-space btn-secondary">Cancel</button>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Horizontal Form</h5>
                            <div className="card-body">
                                <form id="form" data-parsley-validate="" noValidate="">
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail2" className="col-3 col-lg-2 col-form-label text-right">Email</label>
                                        <div className="col-9 col-lg-10">
                                            <input id="inputEmail2" type="email" required="" data-parsley-type="email" placeholder="Email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword2" className="col-3 col-lg-2 col-form-label text-right">Password</label>
                                        <div className="col-9 col-lg-10">
                                            <input id="inputPassword2" type="password" required="" placeholder="Password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputWebSite" className="col-3 col-lg-2 col-form-label text-right">Web Site</label>
                                        <div className="col-9 col-lg-10">
                                            <input id="inputWebSite" type="url" required="" data-parsley-type="url" placeholder="URL" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row pt-2 pt-sm-5 mt-1">
                                        <div className="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                            <label className="be-checkbox custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="col-sm-6 pl-0">
                                            <p className="text-right">
                                                <button type="submit" className="btn btn-space btn-primary">Submit</button>
                                                <button className="btn btn-space btn-secondary">Cancel</button>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Validation Types</h5>
                            <div className="card-body">
                                <form id="validationform" data-parsley-validate="" noValidate="">
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Required</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" placeholder="Type something" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Min Length</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" data-parsley-minlength="6" placeholder="Min 6 chars." className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Max Length</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" data-parsley-maxlength="6" placeholder="Max 6 chars." className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Range Length</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" data-parsley-length="[5,10]" placeholder="Text between 5 - 10 chars length" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Min Value</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" data-parsley-min="6" placeholder="Min value is 6" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Max Value</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" data-parsley-max="6" placeholder="Max value is 6" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Range Value</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input required="" type="number" min="6" max="100" placeholder="Number between 6 - 100" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Regular Exp</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="text" required="" data-parsley-pattern="#[A-Fa-f0-9]{6}" placeholder="Hex. Color" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Equal To</label>
                                        <div className="col-sm-4 col-lg-3 mb-3 mb-sm-0">
                                            <input id="pass2" type="password" required="" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="col-sm-4 col-lg-3">
                                            <input type="password" required="" data-parsley-equalto="#pass2" placeholder="Re-Type Password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label text-sm-right">Min check</label>
                                        <div className="col-sm-6">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-checkbox">
                                                    <input id="ck1" name="ck1" type="checkbox" data-parsley-multiple="groups" defaultValue="bar" data-parsley-mincheck="2" data-parsley-errors-container="#error-container1" className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                                                </label>
                                                <label className="custom-control custom-checkbox">
                                                    <input id="ck2" name="ck2" type="checkbox" data-parsley-multiple="groups" defaultValue="bar2" data-parsley-mincheck="2" data-parsley-errors-container="#error-container1" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                                                </label>
                                                <label className="custom-control custom-checkbox">
                                                    <input id="ck3" name="ck3" type="checkbox" data-parsley-multiple="groups" defaultValue="bar3" data-parsley-mincheck="2" required="" data-parsley-errors-container="#error-container1" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                                                </label>
                                                <div id="error-container1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label text-sm-right">Max check</label>
                                        <div className="col-sm-6">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" defaultValue="bar" id="e1" data-parsley-multiple="group1" data-parsley-errors-container="#error-container2" className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                                                </label>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" defaultValue="bar" id="e2" data-parsley-multiple="group1" data-parsley-errors-container="#error-container2" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                                                </label>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" defaultValue="bar" id="e3" data-parsley-multiple="group1" data-parsley-maxcheck="1" data-parsley-errors-container="#error-container2" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                                                </label>
                                                <div id="error-container2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">E-Mail</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input type="email" required="" data-parsley-type="email" placeholder="Enter a valid e-mail" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">URL</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input data-parsley-type="url" type="url" required="" placeholder="URL" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Digits</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input data-parsley-type="digits" type="text" required="" placeholder="Enter only digits" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Number</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input data-parsley-type="number" type="text" required="" placeholder="Enter only numbers" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Alphanumeric</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <input data-parsley-type="alphanum" type="text" required="" placeholder="Enter alphanumeric value" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-12 col-sm-3 col-form-label text-sm-right">Textarea</label>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <textarea required="" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row text-right">
                                        <div className="col col-sm-10 col-lg-9 offset-sm-1 offset-lg-0">
                                            <button type="submit" className="btn btn-space btn-primary">Submit</button>
                                            <button className="btn btn-space btn-secondary">Cancel</button>
                                        </div>
                                    </div>
                                </form>
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

export default FormValidation;