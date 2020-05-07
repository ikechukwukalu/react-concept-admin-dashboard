import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-pages-color-picker.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class ColorPicker extends Component {
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
                        <h2 className="pageheader-title">Color Picker </h2>
                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Color Picker</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Minicolors</h5>
                            <div className="card-body">
                                <h4 className="card-title">Control Types</h4>
                                <div className="form-group">
                                    <label htmlFor="hue-demo">Hue (default)</label>
                                    <input type="text" id="hue-demo" className="form-control demo" data-control="hue" defaultValue="#ff6161" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="saturation-demo">Saturation</label>
                                    <input type="text" id="saturation-demo" className="form-control demo" data-control="saturation" defaultValue="#0088cc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brightness-demo">Brightness</label>
                                    <input type="text" id="brightness-demo" className="form-control demo" data-control="brightness" defaultValue="#00ffff" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="wheel-demo">Wheel</label>
                                    <input type="text" id="wheel-demo" className="form-control demo" data-control="wheel" defaultValue="#ff99ee" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Input Modes</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="textfield">Text field</label>
                                    <br />
                                    <input type="text" id="textfield" className="form-control demo" defaultValue="#70c24a" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hiddeninput">Hidden Input</label>
                                    <br />
                                    <input type="hidden" id="hiddeninput" className="demo" defaultValue="#db913d" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inline">Inline</label>
                                    <br />
                                    <input type="text" id="inline" className="form-control demo" data-inline="true" defaultValue="#4fc8db" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Positions</h5>
                            <div className="card-body">
                                <h6 className="card-subtitle">Valid positions include bottom left, bottom right, top left, and top right.</h6>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="position-bottom-left">bottom left (default)</label>
                                            <input type="text" id="position-bottom-left" className="form-control demo" data-position="bottom left" defaultValue="#0088cc" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="position-top-left">top left</label>
                                            <input type="text" id="position-top-left" className="form-control demo" data-position="top left" defaultValue="#0088cc" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="position-bottom-right">bottom right</label>
                                            <input type="text" id="position-bottom-right" className="form-control demo" data-position="bottom right" defaultValue="#0088cc" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="position-top-right">top right</label>
                                            <input type="text" id="position-top-right" className="form-control demo" data-position="top right" defaultValue="#0088cc" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-12">
                        <div className="card">
                            <h5 className="card-header">RGB(A)</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="rgb">RGB</label>
                                            <h6 className="help-block text-muted font-light">
                                            RGB input can be assigned by setting the <code>format</code> option
                                            to <code>rgb</code>.
                                        </h6>
                                            <input type="text" id="rgb" className="form-control demo" data-format="rgb" defaultValue="rgb(33, 147, 58)" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="rgba">RGBA</label>
                                            <h6 className="help-block text-muted font-light">
                                            RGBA input can be assigned by setting the <code>format</code>
                                            option to <code>rgb</code> and <code>opacity</code> option to
                                            <code>true</code>.
                                        </h6>
                                            <input type="text" id="rgba" className="form-control demo" data-format="rgb" data-opacity=".5" defaultValue="rgba(52, 64, 158, 0.5)" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">Different Styles</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="opacity">Opacity</label>
                                            <h6 className="help-block text-muted font-light">
                                            Opacity can be assigned by including the <code>data-opacity</code>
                                            attribute or by setting the <code>opacity</code> option to
                                            <code>true</code>.
                                        </h6>
                                            <input type="text" id="opacity" className="form-control demo" data-opacity=".5" defaultValue="#766fa8" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="keywords">Keywords</label>
                                            <h6 className="help-block text-muted font-light">
                                            CSS-wide keywords can be assigned by setting the <code>keywords</code>
                                            option to a comma-separated list of valid keywords: <code>transparent,
                                            initial, inherit</code>.
                                        </h6>
                                            <input type="text" id="keywords" className="form-control demo" data-keywords="transparent, initial, inherit" defaultValue="transparent" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="default-value">Default Value</label>
                                            <h6 className="help-block text-muted font-light">
                                            This field has a default value assigned to it, so it will never be empty.
                                        </h6>
                                            <input type="text" id="default-value" className="form-control demo" data-defaultvalue="#ff6600" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="letter-case">Letter Case</label>
                                            <h6 className="help-block text-muted font-light">
                                            This field will always be uppercase.
                                        </h6>
                                            <input type="text" id="letter-case" className="form-control demo" data-lettercase="uppercase" defaultValue="#abcdef" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="input-group">Input Groups</label>
                                            <h6 className="help-block text-muted font-light">
                                            Example using Bootstrap's input groups.
                                        </h6>
                                            <div className="input-group">
                                                <input type="text" id="input-group" className="form-control demo" defaultValue="#ff0000" />
                                                <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">Button</button>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="more-input-group">More Input Groups</label>
                                            <h6 className="help-block text-muted font-light">
                                            Input group example with addon.
                                        </h6>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3">Color</span>
                                                </div>
                                                <input type="text" id="more-input-group" className="form-control demo" defaultValue="#ff0000" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-default" type="button">Button</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="letter-case">Swatches</label>
                                            <h6 className="help-block text-muted font-light">
                                            Example with swatches.
                                        </h6>
                                            <input type="text" id="swatches1" className="form-control demo" data-swatches="#ef9a9a|#90caf9|#a5d6a7|#fff59d|#ffcc80|#bcaaa4|#eeeeee|#f44336|#2196f3|#4caf50|#ffeb3b|#ff9800|#795548|#9e9e9e" defaultValue="#abcdef" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="letter-case">Swatches and opacity</label>
                                            <h6 className="help-block text-muted font-light">
                                            Example with swatches and opacity.
                                        </h6>
                                            <input type="text" id="swatches2" className="form-control demo" data-format="rgb" data-opacity="1" data-swatches="#fff|#000|#f00|#0f0|#00f|#ff0|rgba(0,0,255,0.5)" defaultValue="rgba(14, 206, 235, .5)" />
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

export default ColorPicker;