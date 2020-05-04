import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-form-multiselect';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Multiselect extends Component {
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
                        <h2 className="pageheader-title">Multiselect </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Multiselect</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Boxed Multiselect</h5>
                            <div className="card-body">
                                <select multiple="multiple" id="my-select" name="my-select[]">
                                    <option value='elem_1'>Elements 1</option>
                                    <option value='elem_2'>Elements 2</option>
                                    <option value='elem_3'>Elements 3</option>
                                    <option value='elem_4'>Elements 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Pre-selected options</h5>
                            <div className="card-body">
                                <select id='pre-selected-options' multiple={true} defaultValue={['elem_1','elem_4']}>
                                    <option value='elem_1'>Elements 1</option>
                                    <option value='elem_2'>Elements 2</option>
                                    <option value='elem_3'>Elements 3</option>
                                    <option value='elem_4'>Elements 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Callbacks</h5>
                            <div className="card-body">
                                <select id='callbacks' multiple={true}>
                                    <option value='elem_1'>Elements 1</option>
                                    <option value='elem_2'>Elements 2</option>
                                    <option value='elem_3'>Elements 3</option>
                                    <option value='elem_4'>Elements 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Keep Over</h5>
                            <div className="card-body">
                                <select id='keep-order' multiple={true}>
                                    <option value='elem_1'>Elements 1</option>
                                    <option value='elem_2'>Elements 2</option>
                                    <option value='elem_3'>Elements 3</option>
                                    <option value='elem_4'>Elements 4</option>
                                    <option value='elem_5'>Elements 5</option>
                                    <option value='elem_6'>Elements 6</option>
                                    <option value='elem_7'>Elements 7</option>
                                    <option value='elem_8'>Elements 8</option>
                                    <option value='elem_9'>Elements 9</option>
                                    <option value='elem_10'>Elements 10</option>
                                    <option value='elem_11'>Elements 11</option>
                                    <option value='elem_12'>Elements 12</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Optgroup</h5>
                            <div className="card-body">
                                <select id='optgroup' multiple={true} defaultValue={['2']}>
                                    <optgroup label='Friends'>
                                        <option value='1'>Yoda</option>
                                        <option value='2'>Obiwan</option>
                                    </optgroup>
                                    <optgroup label='Enemies'>
                                        <option value='3'>Palpatine</option>
                                        <option value='4' disabled>Darth Vader</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Disabled attribute</h5>
                            <div className="card-body">
                                <select id='disabled-attribute' disabled='disabled' multiple={true}>
                                    <option value='elem_1'>Elements 1</option>
                                    <option value='elem_2'>Elements 2</option>
                                    <option value='elem_3'>Elements 3</option>
                                    <option value='elem_4'>Elements 4</option>
                                    <option value='elem_5'>Elements 5</option>
                                </select>
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

export default Multiselect;