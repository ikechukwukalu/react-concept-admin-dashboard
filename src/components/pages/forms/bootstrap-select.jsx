import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import {Input} from "reactstrap";

import Scripts from '../../scripts/scripts-form-bootstrap-select.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class BootstrapSelect extends Component {
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-header">
                            <h2 className="pageheader-title">Bootstrap Select </h2>
                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Bootstrap Select</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card ">
                            <h5 className="card-header">Bootstrap Select</h5>
                            <div className="card-body">
                                <h5 className="card-title">Basic Select </h5>
                                <select className="selectpicker">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                {/* <Input type="select" className="selectpicker">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </Input> */}
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Select boxes with optgroups</h5>
                                <select className="selectpicker">
                                    <optgroup label="Picnic">
                                        <option>Mustard</option>
                                        <option>Ketchup</option>
                                        <option>Relish</option>
                                    </optgroup>
                                    <optgroup label="Camping">
                                        <option>Tent</option>
                                        <option>Flashlight</option>
                                        <option>Toilet Paper</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Multiple select boxes</h5>
                                <select className="selectpicker" multiple>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Live search</h5>
                                <select className="selectpicker" data-live-search="true">
                                    <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
                                    <option data-tokens="mustard">Burger, Shake and a Smile</option>
                                    <option data-tokens="frosting">Sugar, Spice and all things nice</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Limit the number of selections</h5>
                                <select className="selectpicker" multiple data-max-options="2">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" multiple>
                                    <optgroup label="Condiments" data-max-options="2">
                                        <option>Mustard</option>
                                        <option>Ketchup</option>
                                        <option>Relish</option>
                                    </optgroup>
                                    <optgroup label="Breads" data-max-options="2">
                                        <option>Plain</option>
                                        <option>Steamed</option>
                                        <option>Toasted</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Custom button text </h5>
                                <select className="selectpicker" multiple title="Choose one of the following...">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Selected text</h5>
                                <select className="selectpicker">
                                    <option title="Combo 1">Hot Dog, Fries and a Soda</option>
                                    <option title="Combo 2">Burger, Shake and a Smile</option>
                                    <option title="Combo 3">Sugar, Spice and all things nice</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Styling</h5>
                                <select className="selectpicker" data-style="btn-primary">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-style="btn-secondary">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-style="btn-brand">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-style="btn-info">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-style="btn-success">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Checkmark on selected option</h5>
                                <select className="selectpicker show-tick">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Menu arrow </h5>
                                <select className="selectpicker show-menu-arrow">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Style individual options</h5>
                                <select className="selectpicker">
                                    <option>Mustard</option>
                                    <option className="special">Ketchup</option>
                                    <option style={{background: "#5cb85c", color: "#fff"}}>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Width ( 'auto', 'fit', '100px', '75%' )</h5>
                                <select className="selectpicker" data-width="auto">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-width="fit">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-width="100px">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                <select className="selectpicker" data-width="75%">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Customize options with icon</h5>
                                <select className="selectpicker">
                                    <option data-icon="fas fa-heart">Ketchup</option>
                                    <option data-icon="fas fa-glass-martini">Mustard</option>
                                    <option data-icon="fas fa-film">Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Custom content</h5>
                                <select className="selectpicker">
                                    <option data-content="<span class='badge badge-primary'>Mustard</span>">Mustard</option>
                                    <option data-content="<span class='badge badge-success'>Relish</span>">Relish</option>
                                    <option data-content="<span class='badge badge-brand'>Ketchup</span>">Ketchup</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Subtext</h5>
                                <select className="selectpicker" data-size="5">
                                    <option data-subtext="Heinz">Ketchup</option>
                                    <option data-subtext="Mitro">Mustard</option>
                                    <option data-subtext="Laila">Ketchup</option>
                                    <option data-subtext="Rim">Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Menu Size</h5>
                                <select className="selectpicker" data-size="5">
                                    <option>Ketchup</option>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                    <option>Ketchup</option>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                    <option>Ketchup</option>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Select/deselect all options</h5>
                                <select className="selectpicker" multiple data-actions-box="true">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Divider</h5>
                                <select className="selectpicker" data-size="5">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                    <option data-divider="true">-</option>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Menu Header</h5>
                                <select className="selectpicker" data-header="Select a condiment">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Container</h5>
                                <div style={{overflow: "hidden"}}>
                                    <select className="selectpicker">
                                        <option>Mustard</option>
                                        <option>Ketchup</option>
                                        <option>Relish</option>
                                    </select>
                                    <select className="selectpicker" data-container="body">
                                        <option>Mustard</option>
                                        <option>Ketchup</option>
                                        <option>Relish</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Dropup menu</h5>
                                <select className="selectpicker dropup">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Disabled </h5>
                                <select className="selectpicker" disabled>
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Disabled options </h5>
                                <select className="selectpicker">
                                    <option>Mustard</option>
                                    <option disabled>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="card-body border-top">
                                <h5 className="card-title">Disabled option groups </h5>
                                <select className="selectpicker test">
                                    <optgroup label="Picnic" disabled>
                                        <option>Mustard</option>
                                        <option>Ketchup</option>
                                        <option>Relish</option>
                                    </optgroup>
                                    <optgroup label="Camping">
                                        <option>Tent</option>
                                        <option>Flashlight</option>
                                        <option>Toilet Paper</option>
                                    </optgroup>
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

export default BootstrapSelect;