import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class IconFontawesome extends Component {
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
                        <h2 className="pageheader-title">Fontawesome Icons </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Icons</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Fontawesome Icons</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Solid Icons</h4>
                            <h6 className="card-subtitle">use the icon by just put class <code>fas fa-address-book</code> in i tag </h6>
                        </div>
                        <div className="card-body">
                          
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-address-book"></i> fas fa-address-book</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-address-card"></i> fas fa-address-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-adjust"></i> fas fa-adjust</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-align-center"></i> fas fa-align-center</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-align-justify"></i> fas fa-align-justify</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-align-left"></i> fas fa-align-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-align-right"></i> fas fa-align-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-allergies"></i> fas fa-allergies</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ambulance"></i> fas fa-ambulance</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-american-sign-language-interpreting"></i> fas fa-american-sign-language-interpreting</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-anchor"></i> fas fa-anchor</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-double-down"></i> fas fa-angle-double-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-double-left"></i> fas fa-angle-double-left
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-double-right"></i> fas fa-angle-double-right
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-double-up"></i> fas fa-angle-double-up
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-down"></i> fas fa-angle-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-left"></i> fas fa-angle-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-right"></i> fas fa-angle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-angle-up"></i> fas fa-angle-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-archive"></i> fas fa-archive</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-alt-circle-down"></i> fas fa-arrow-alt-circle-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-alt-circle-left"></i> fas fa-arrow-alt-circle-left</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-alt-circle-right"></i> fas fa-arrow-alt-circle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-alt-circle-up"></i> fas fa-arrow-alt-circle-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-circle-down"></i> fas fa-arrow-circle-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-circle-left"></i> fas fa-arrow-circle-left
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-circle-right"></i> fas fa-arrow-circle-right
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-circle-up"></i> fas fa-arrow-circle-up
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-down"></i> fas fa-arrow-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-left"></i> fas fa-arrow-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-right"></i> fas fa-arrow-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrow-up"></i> fas fa-arrow-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrows-alt"></i> fas fa-arrows-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrows-alt-h"></i> fas fa-arrows-alt-h</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-arrows-alt-v"></i> fas fa-arrows-alt-v</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-assistive-listening-systems"></i> fas fa-assistive-listening-systems</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-asterisk"></i> fas fa-asterisk</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-at"></i> fas fa-at</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-audio-description"></i> fas fa-audio-tion
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-backward"></i> fas fa-backward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-balance-scale"></i> fas fa-balance-scale</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ban"></i> fas fa-ban</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-band-aid"></i> fas fa-band-aid</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-barcode"></i> fas fa-barcode</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bars"></i> fas fa-bars</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-baseball-ball"></i> fas fa-baseball-ball</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-basketball-ball"></i> fas fa-basketba
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bath"></i> fas fa-bath</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-battery-empty"></i> fas fa-battery-empty</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-battery-full"></i> fas fa-battery-full</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-battery-half"></i> fas fa-battery-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-battery-quarter"></i> fas fa-battery-quarter
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-battery-three-quarters"></i> fas fa-battery-three-quarters
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bed"></i> fas fa-bed</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-beer"></i> fas fa-beer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bell"></i> fas fa-bell</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bell-slash"></i> fas fa-bell-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bicycle"></i> fas fa-bicycle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-binoculars"></i> fas fa-binoculars</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-birthday-cake"></i> fas fa-birthday-cake</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-blind"></i> fas fa-blind</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bold"></i> fas fa-bold</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bolt"></i> fas fa-bolt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bomb"></i> fas fa-bomb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-book"></i> fas fa-book</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bookmark"></i> fas fa-bookmark</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bowling-ball"></i> fas fa-bowling-ball</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-box"></i> fas fa-box</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-box-open"></i> fas fa-box-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-boxes"></i> fas fa-boxes</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-braille"></i> fas fa-braille</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-briefcase"></i> fas fa-briefcase</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-briefcase-medical"></i> fas fa-briefcical
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bug"></i> fas fa-bug</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-building"></i> fas fa-building</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bullhorn"></i> fas fa-bullhorn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bullseye"></i> fas fa-bullseye</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-burn"></i> fas fa-burn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-bus"></i> fas fa-bus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calculator"></i> fas fa-calculator</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calendar"></i> fas fa-calendar</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calendar-alt"></i> fas fa-calendar-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calendar-check"></i> fas fa-calendar-check</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calendar-minus"></i> fas fa-calendar-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calendar-plus"></i> fas fa-calendar-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-calendar-times"></i> fas fa-calendar-times</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-camera"></i> fas fa-camera</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-camera-retro"></i> fas fa-camera-retro</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-capsules"></i> fas fa-capsules</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-car"></i> fas fa-car</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-down"></i> fas fa-caret-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-left"></i> fas fa-caret-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-right"></i> fas fa-caret-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-square-down"></i> fas fa-caret-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-square-left"></i> fas fa-caret-left
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-square-right"></i> fas fa-caret-right
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-square-up"></i> fas fa-caret-sq
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-caret-up"></i> fas fa-caret-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cart-arrow-down"></i> fas fa-cart-arr
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cart-plus"></i> fas fa-cart-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-certificate"></i> fas fa-certificate</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chart-area"></i> fas fa-chart-area</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chart-bar"></i> fas fa-chart-bar</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chart-line"></i> fas fa-chart-line</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chart-pie"></i> fas fa-chart-pie</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-check"></i> fas fa-check</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-check-circle"></i> fas fa-check-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-check-square"></i> fas fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess"></i> fas fa-chess</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-bishop"></i> fas fa-chess-bishop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-board"></i> fas fa-chess-board</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-king"></i> fas fa-chess-king</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-knight"></i> fas fa-chess-knight</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-pawn"></i> fas fa-chess-pawn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-queen"></i> fas fa-chess-queen</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chess-rook"></i> fas fa-chess-rook</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-circle-down"></i> fas fa-chevron-circle-down</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-chevron-circle-left"></i> fas fa-chevron-circle-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-circle-right"></i> fas fa-chevron-circle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-circle-up"></i> fas fa-chevroe-up
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-down"></i> fas fa-chevron-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-left"></i> fas fa-chevron-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-right"></i> fas fa-chevron-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-chevron-up"></i> fas fa-chevron-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-child"></i> fas fa-child</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-circle"></i> fas fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-circle-notch"></i> fas fa-circle-notch</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-clipboard"></i> fas fa-clipboard</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-clipboard-check"></i> fas fa-clipboard-check
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-clipboard-list"></i> fas fa-clipboard-list</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-clock"></i> fas fa-clock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-clone"></i> fas fa-clone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-closed-captioning"></i> fas fa-closedning
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cloud"></i> fas fa-cloud</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cloud-download-alt"></i> fas fa-cloudad-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cloud-upload-alt"></i> fas fa-cloud-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-code"></i> fas fa-code</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-code-branch"></i> fas fa-code-branch</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-coffee"></i> fas fa-coffee</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cog"></i> fas fa-cog</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cogs"></i> fas fa-cogs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-columns"></i> fas fa-columns</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-comment"></i> fas fa-comment</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-comment-alt"></i> fas fa-comment-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-comment-dots"></i> fas fa-comment-dots</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-comment-slash"></i> fas fa-comment-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-comments"></i> fas fa-comments</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-compass"></i> fas fa-compass</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-compress"></i> fas fa-compress</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-copy"></i> fas fa-copy</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-copyright"></i> fas fa-copyright</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-couch"></i> fas fa-couch</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-credit-card"></i> fas fa-credit-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-crop"></i> fas fa-crop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-crosshairs"></i> fas fa-crosshairs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cube"></i> fas fa-cube</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cubes"></i> fas fa-cubes</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-cut"></i> fas fa-cut</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-database"></i> fas fa-database</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-deaf"></i> fas fa-deaf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-desktop"></i> fas fa-desktop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-diagnoses"></i> fas fa-diagnoses</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-dna"></i> fas fa-dna</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-dollar-sign"></i> fas fa-dollar-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-dolly"></i> fas fa-dolly</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-dolly-flatbed"></i> fas fa-dolly-flatbed</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-donate"></i> fas fa-donate</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-dot-circle"></i> fas fa-dot-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-dove"></i> fas fa-dove</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-download"></i> fas fa-download</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-edit"></i> fas fa-edit</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-eject"></i> fas fa-eject</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ellipsis-h"></i> fas fa-ellipsis-h</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ellipsis-v"></i> fas fa-ellipsis-v</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-envelope"></i> fas fa-envelope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-envelodashboard-open"></i> fas fa-envelodashboard-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-envelodashboard-square"></i> fas fa-envelodashboard-square
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-eraser"></i> fas fa-eraser</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-euro-sign"></i> fas fa-euro-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-exchange-alt"></i> fas fa-exchange-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-exclamation"></i> fas fa-exclamation</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-exclamation-circle"></i> fas fa-exclamation-circle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-exclamation-triangle"></i> fas fa-exclamation-triangle</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-expand"></i> fas fa-expand</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-expand-arrows-alt"></i> fas fa-expand-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-external-link-alt"></i> fas fa-external-link-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-external-link-square-alt"></i> fas fa-external-link-square-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-eye"></i> fas fa-eye</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-eye-dropper"></i> fas fa-eye-dropper</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-eye-slash"></i> fas fa-eye-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-fast-backward"></i> fas fa-fast-backward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-fast-forward"></i> fas fa-fast-forward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-fax"></i> fas fa-fax</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-female"></i> fas fa-female</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-fighter-jet"></i> fas fa-fighter-jet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file"></i> fas fa-file</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-alt"></i> fas fa-file-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-archive"></i> fas fa-file-archive</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-audio"></i> fas fa-file-audio</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-code"></i> fas fa-file-code</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-excel"></i> fas fa-file-excel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-image"></i> fas fa-file-image</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-medical"></i> fas fa-file-medical</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-medical-alt"></i> fas fa-file-medical-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-pdf"></i> fas fa-file-pdf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-powerpoint"></i> fas fa-file-pow
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-video"></i> fas fa-file-video</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-file-word"></i> fas fa-file-word</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-film"></i> fas fa-film</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-filter"></i> fas fa-filter</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-fire"></i> fas fa-fire</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-fire-extinguisher"></i> fas fa-fire-extinguisher
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-first-aid"></i> fas fa-first-aid</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-flag"></i> fas fa-flag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-flag-checkered"></i> fas fa-flag-checkered</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-flask"></i> fas fa-flask</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-folder"></i> fas fa-folder</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-folder-open"></i> fas fa-folder-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-font"></i> fas fa-font</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-football-ball"></i> fas fa-football-ball</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-forward"></i> fas fa-forward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-frown"></i> fas fa-frown</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-futbol"></i> fas fa-futbol</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-gamepad"></i> fas fa-gamepad</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-gavel"></i> fas fa-gavel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-gem"></i> fas fa-gem</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-genderless"></i> fas fa-genderless</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-gift"></i> fas fa-gift</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-glass-martini"></i> fas fa-glass-martini</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-globe"></i> fas fa-globe</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-golf-ball"></i> fas fa-golf-ball</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-graduation-cap"></i> fas fa-graduation-cap</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-h-square"></i> fas fa-h-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-holding"></i> fas fa-hand-holding</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-holding-heart"></i> fas fa-hand-holding-heart
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-holding-usd"></i> fas fa-hand-holding-usd
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-lizard"></i> fas fa-hand-lizard</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-paper"></i> fas fa-hand-paper</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-peace"></i> fas fa-hand-peace</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-point-down"></i> fas fa-hand-point-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-point-left"></i> fas fa-hand-point-left
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-point-right"></i> fas fa-hand-point-right
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-point-up"></i> fas fa-hand-point-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-pointer"></i> fas fa-hand-pointer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-rock"></i> fas fa-hand-rock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-scissors"></i> fas fa-hand-scissors</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hand-spock"></i> fas fa-hand-spock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hands"></i> fas fa-hands</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hands-helping"></i> fas fa-hands-helping</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-handshake"></i> fas fa-handshake</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hashtag"></i> fas fa-hashtag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hdd"></i> fas fa-hdd</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-heading"></i> fas fa-heading</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-headphones"></i> fas fa-headphones</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-heart"></i> fas fa-heart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-heartbeat"></i> fas fa-heartbeat</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-history"></i> fas fa-history </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hockey-puck"></i> fas fa-hockey-puck</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-home"></i> fas fa-home</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hospital"></i> fas fa-hospital</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hospital-alt"></i> fas fa-hospital-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hospital-symbol"></i> fas fa-hospital
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hourglass"></i> fas fa-hourglass</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hourglass-end"></i> fas fa-hourglass-end</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hourglass-half"></i> fas fa-hourglass-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-hourglass-start"></i> fas fa-hourglass-start
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-i-cursor"></i> fas fa-i-cursor</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-id-badge"></i> fas fa-id-badge</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-id-card"></i> fas fa-id-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-id-card-alt"></i> fas fa-id-card-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-image"></i> fas fa-image</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-images"></i> fas fa-images</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-inbox"></i> fas fa-inbox</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-indent"></i> fas fa-indent</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-industry"></i> fas fa-industry</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-info"></i> fas fa-info</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-info-circle"></i> fas fa-info-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-italic"></i> fas fa-italic</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-key"></i> fas fa-key</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-keyboard"></i> fas fa-keyboard</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-language"></i> fas fa-language</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-laptop"></i> fas fa-laptop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-leaf"></i> fas fa-leaf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-lemon"></i> fas fa-lemon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-level-down-alt"></i> fas fa-level-down-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-level-up-alt"></i> fas fa-level-up-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-life-ring"></i> fas fa-life-ring</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-lightbulb"></i> fas fa-lightbulb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-link"></i> fas fa-link</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-lira-sign"></i> fas fa-lira-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-list"></i> fas fa-list</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-list-alt"></i> fas fa-list-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-list-ol"></i> fas fa-list-ol</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-list-ul"></i> fas fa-list-ul</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-location-arrow"></i> fas fa-location-arrow</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-lock"></i> fas fa-lock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-lock-open"></i> fas fa-lock-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-long-arrow-alt-down"></i> fas fa-long-arrow-alt-down</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-long-arrow-alt-left"></i> fas fa-long-arrow-alt-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-long-arrow-alt-right"></i> fas fa-long-arrow-alt-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-long-arrow-alt-up"></i> fas fa-long-arrow-alt-up
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-low-vision"></i> fas fa-low-vision</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-magic"></i> fas fa-magic</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-magnet"></i> fas fa-magnet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-male"></i> fas fa-male</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-map"></i> fas fa-map</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-map-marker"></i> fas fa-map-marker</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-map-marker-alt"></i> fas fa-map-marker-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-map-pin"></i> fas fa-map-pin</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-map-signs"></i> fas fa-map-signs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mars"></i> fas fa-mars</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mars-double"></i> fas fa-mars-double</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mars-stroke"></i> fas fa-mars-stroke</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mars-stroke-h"></i> fas fa-mars-stroke-h</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mars-stroke-v"></i> fas fa-mars-stroke-v</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-medkit"></i> fas fa-medkit</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-meh"></i> fas fa-meh</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mercury"></i> fas fa-mercury</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-microchip"></i> fas fa-microchip</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-microphone"></i> fas fa-microphone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-microphone-slash"></i> fas fa-microphone-slash
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-minus"></i> fas fa-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-minus-circle"></i> fas fa-minus-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-minus-square"></i> fas fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mobile"></i> fas fa-mobile</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mobile-alt"></i> fas fa-mobile-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-money-bill-alt"></i> fas money-bill-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-moon"></i> fas fa-moon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-motorcycle"></i> fas fa-motorcycle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-mouse-pointer"></i> fas fa-mouse-pointer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-music"></i> fas fa-music</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-neuter"></i> fas fa-neuter</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-newspaper"></i> fas fa-newspaper</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-notes-medical"></i> fas fa-notes-medical</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-object-group"></i> fas fa-object-group</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-object-ungroup"></i> fas fa-object-ungroup</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-outdent"></i> fas fa-outdent</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-paint-brush"></i> fas fa-paint-brush</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pallet"></i> fas fa-pallet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-paper-plane"></i> fas fa-paper-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-paperclip"></i> fas fa-paperclip</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-parachute-box"></i> fas fa-parachute-box</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-paragraph"></i> fas fa-paragraph</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-paste"></i> fas fa-paste</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pause"></i> fas fa-pause</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pause-circle"></i> fas pause-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-paw"></i> fas fa-fa-paw</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pen-square"></i> fas fa-pen-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pencil-alt"></i> fas fa-pencil-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-people-carry"></i> fas fa-people-carry</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-percent"></i> fas fa-percent</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-phone"></i> fas fa-phone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-phone-slash"></i> fas fa-phone-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-phone-square"></i> fas fa-phone-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-phone-volume"></i> fas fa-phone-volume</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-piggy-bank"></i> fas fa-piggy-bank</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pills"></i> fas fa-pills</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-plane"></i> fas fa-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-play"></i> fas fa-play</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-play-circle"></i> fas fa-play-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-plug"></i> fas fa-plug</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-plus"></i> fas fa-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-plus-circle"></i> fas fa-plus-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-plus-square"></i> fas fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-podcast"></i> fas fa-podcast</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-poo"></i> fas fa-poo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-pound-sign"></i> fas fa-pound-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-power-off"></i> fas fa-power-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-prescription-bottle"></i> fas fa-prescription-bottle</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-prescription-bottle-alt"></i> fas fa-prescription-bottle-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-print"></i> fas fa-print</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-procedures"></i> fas fa-procedures</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-puzzle-piece"></i> fas fa-puzzle-piece</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-qrcode"></i> fas fa-qrcode</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-question"></i> fas fa-question</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-question-circle"></i> fas fa-question
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-quidditch"></i> fas fa-quidditch</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-quote-left"></i> fas fa-quote-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-quote-right"></i> fas fa-quote-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-random"></i> fas fa-random</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-recycle"></i> fas fa-recycle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-redo"></i> fas fa-redo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-redo-alt"></i> fas fa-redo-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-registered"></i> fas fa-registered</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-reply"></i> fas fa-reply</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-reply-all"></i> fas fa-reply-all</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-retweet"></i> fas fa-retweet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ribbon"></i> fas fa-ribbon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-road"></i> fas fa-road</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-rocket"></i> fas fa-rocket</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-rss"></i> fas fa-rss</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-rss-square"></i> fas fa-rss-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ruble-sign"></i> fas fa-ruble-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-rupee-sign"></i> fas fa-rupee-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-save"></i> fas fa-save</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-search"></i> fas fa-search</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-search-minus"></i> fas fa-search-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-search-plus"></i> fas fa-search-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-seedling"></i> fas fa-seedling</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-server"></i> fas fa-server</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-share"></i> fas fa-share</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-share-alt"></i> fas fa-share-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-share-alt-square"></i> fas fa-share-alt-square
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-share-square"></i> fas fa-share-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shekel-sign"></i> fas fa-shekel-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shield-alt"></i> fas fa-shield-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ship"></i> fas fa-ship</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shipping-fast"></i> fas fa-shipping-fast</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shopping-bag"></i> fas fa-shopping-bag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shopping-basket"></i> fas fa-shopping-basket
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shopping-cart"></i> fas fa-shopping-cart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-shower"></i> fas fa-shower</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sign"></i> fas fa-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sign-in-alt"></i> fas fa-sign-in-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sign-language"></i> fas fa-sign-language</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sign-out-alt"></i> fas fa-sign-out-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-signal"></i> fas fa-signal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sitemap"></i> fas fa-sitemap</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sliders-h"></i> fas fa-sliders-h</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-smile"></i> fas fa-smile</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-smoking"></i> fas fa-smoking</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-snowflake"></i> fas fa-snowflake</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort"></i> fas fa-sort</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-alpha-down"></i> fas fa-alpha-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-alpha-up"></i> fas fa-sort-alpha-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-amount-down"></i> fas fa-sort-amount-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-amount-up"></i> fas fa-sort-amount-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-down"></i> fas fa-sort-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-numeric-down"></i> fas fa-sort-numeric-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-numeric-up"></i> fas fa-sort-numeric-up
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sort-up"></i> fas fa-sort-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-space-shuttle"></i> fas fa-space-shuttle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-spinner"></i> fas fa-spinner</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-square"></i> fas fa-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-square-full"></i> fas fa-square-full</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-star"></i> fas fa-star</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-star-half"></i> fas fa-star-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-step-backward"></i> fas fa-step-backward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-step-forward"></i> fas fa-step-forward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-stethoscope"></i> fas fa-stethoscope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sticky-note"></i> fas fa-sticky-note</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-stop"></i> fas fa-stop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-stop-circle"></i> fas fa-stop-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-stopwatch"></i> fas fa-stopwatch</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-street-view"></i> fas fa-street-view</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-strikethrough"></i> fas fa-strikethrough</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-subscript"></i> fas fa-subscript</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-subway"></i> fas fa-subway</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-suitcase"></i> fas fa-suitcase</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sun"></i> fas fa-sun</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-superscript"></i> fas fa-superscript</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sync"></i> fas fa-sync</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-sync-alt"></i> fas fa-sync-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-syringe"></i> fas fa-syringe</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-table"></i> fas fa-table</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-table-tennis"></i> fas fa-table-tennis</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tablet"></i> fas fa-tablet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tablet-alt"></i> fas fa-tablet-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tablets"></i> fas fa-tablets</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tachometer-alt"></i> fas fa-tachometer-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tag"></i> fas fa-tag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tags"></i> fas fa-tags</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tape"></i> fas fa-tape</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tasks"></i> fas fa-tasks</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-taxi"></i> fas fa-taxi</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-terminal"></i> fas fa-terminal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-text-height"></i> fas fa-text-height</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-text-width"></i> fas fa-text-width</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-th"></i> fas fa-th</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-th-large"></i> fas fa-th-large</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-th-list"></i> fas fa-th-list</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thermometer"></i> fas fa-thermometer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thermometer-empty"></i> fas fa-thermometer-empty
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thermometer-full"></i> fas fa-thermometer-full
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thermometer-half"></i> fas fa-thermometer-half
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thermometer-quarter"></i> fas fa-thermometer-quarter</div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 f-icon "><i className="fas fa-thermometer-three-quarters"></i> fas fa-thermometer-three-quarters</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thumbs-down"></i> fas fa-thumbs-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thumbs-up"></i> fas fa-thumbs-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-thumbtack"></i> fas fa-thumbtack</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-ticket-alt"></i> fas fa-ticket-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-times"></i> fas fa-times</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-times-circle"></i> fas fa-times-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tint"></i> fas fa-tint</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-toggle-off"></i> fas fa-toggle-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-toggle-on"></i> fas fa-toggle-on</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-trademark"></i> fas fa-trademark</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-train"></i> fas fa-train</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-transgender"></i> fas fa-transgender</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-transgender-alt"></i> fas fa-transgen
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-trash"></i> fas fa-trash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-trash-alt"></i> fas fa-trash-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tree"></i> fas fa-tree</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-trophy"></i> fas fa-trophy</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-truck"></i> fas fa-truck</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-truck-loading"></i> fas fa-truck-loading</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-truck-moving"></i> fas fa-truck-moving</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tty"></i> fas fa-tty</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-tv"></i> fas fa-tv</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-umbrella"></i> fas fa-umbrella</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-underline"></i> fas fa-underline</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-undo"></i> fas fa-undo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-undo-alt"></i> fas fa-undo-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-universal-access"></i> fas fa-universal-access
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-university"></i> fas fa-university</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-unlink"></i> fas fa-unlink</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-unlock"></i> fas fa-unlock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-unlock-alt"></i> fas fa-unlock-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-upload"></i> fas fa-upload</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-user"></i> fas fa-user</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-user-circle"></i> fas fa-user-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-user-md"></i> fas fa-user-md</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-user-plus"></i> fas fa-user-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-user-secret"></i> fas fa-user-secret</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-user-times"></i> fas fa-user-times</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-users"></i> fas fa-users</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-utensil-spoon"></i> fas fa-utensil-spoon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-utensils"></i> fas fa-utensils</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-venus"></i> fas fa-venus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-venus-double"></i> fas fa-venus-double</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-venus-mars"></i> fas fa-venus-mars</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-vial"></i> fas fa-vial</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-vials"></i> fas fa-vials</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-video"></i> fas fa-video</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-video-slash"></i> fas fa-video-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-volleyball-ball"></i> fas fa-volleyba
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-volume-down"></i> fas fa-volume-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-volume-off"></i> fas fa-volume-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-volume-up"></i> fas fa-volume-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-warehouse"></i> fas fa-warehouse</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-weight"></i> fas fa-weight</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-wheelchair"></i> fas fa-wheelchair</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-wifi"></i> fas fa-wifi</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-window-close"></i> fas fa-window-close</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-window-maximize"></i> fas fa-window-maximize
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-window-minimize"></i> fas fa-window-minimize
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-window-restore"></i> fas fa-window-restore</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-wine-glass"></i> fas fa-wine-glass</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-won-sign"></i> fas fa-won-sign</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-wrench"></i> fas fa-wrench</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-x-ray"></i> fas fa-x-ray</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fas fa-yen-sign"></i> fas fa-yen-sign</div>
                                </div>
                          
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Regular Icons</h4>
                            <h6 className="card-subtitle">use the icon by just put class <code>far fa-address-card</code> in i tag </h6>
                        </div>
                        <div className="card-body">
                            <div className="icon-list-demo row">
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-address-book"></i><span> far fa-address-book</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-address-card"></i><span> far fa-address-card</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-arrow-alt-circle-down"></i><span> far fa-arrow-alt-circle-down</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-arrow-alt-circle-left"></i><span> far fa-arrow-alt-circle-left</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-arrow-alt-circle-right"></i><span> far fa-arrow-alt-circle-right</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-arrow-alt-circle-up"></i><span> far fa-arrow-alt-circle-up</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-bell"></i><span> far fa-bell</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-bell-slash"></i><span> far fa-bell-slash</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-bookmark"></i><span> far fa-bookmark</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-building"></i><span> far fa-building</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-calendar"></i><span> far fa-calendar</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-calendar-alt"></i><span> far fa-calendar-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-calendar-check"></i><span> far fa-calendar-check</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-calendar-minus"></i><span> far fa-calendar-minus</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-calendar-plus"></i><span> far fa-calendar-plus</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-calendar-times"></i><span> far fa-calendar-times</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-caret-square-down"></i><span> far fa-caret-square-down</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-caret-square-left"></i><span> far fa-caret-square-left</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-caret-square-right"></i><span> far fa-caret-square-right</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-caret-square-up"></i><span> far fa-caret-square-up</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-chart-bar"></i><span> far fa-chart-bar</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-check-circle"></i><span> far fa-check-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-check-square"></i><span> far fa-check-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-circle"></i><span> far fa-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-clipboard"></i><span> far fa-clipboard</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-clock"></i><span> far fa-clock</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-clone"></i><span> far fa-clone</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-closed-captioning"></i><span> far fa-closed-captioning</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-comment"></i><span> far fa-comment</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-comment-alt"></i><span> far fa-comment-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-comments"></i><span> far fa-comments</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-compass"></i><span> far fa-compass</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-copy"></i><span> far fa-copy</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-copyright"></i><span> far fa-copyright</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-credit-card"></i><span> far fa-credit-card</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-dot-circle"></i><span> far fa-dot-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-edit"></i><span> far fa-edit</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-envelope"></i><span> far fa-envelope</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-envelodashboard-open"></i><span> far fa-envelodashboard-open</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-eye-slash"></i><span> far fa-eye-slash</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file"></i><span> far fa-file</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-alt"></i><span> far fa-file-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-archive"></i><span> far fa-file-archive</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-audio"></i><span> far fa-file-audio</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-code"></i><span> far fa-file-code</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-excel"></i><span> far fa-file-excel</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-image"></i><span> far fa-file-image</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-pdf"></i><span> far fa-file-pdf</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-powerpoint"></i><span> far fa-file-powerpoint</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-video"></i><span> far fa-file-video</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-file-word"></i><span> far fa-file-word</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-flag"></i><span> far fa-flag</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-folder"></i><span> far fa-folder</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-folder-open"></i><span> far fa-folder-open</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-frown"></i><span> far fa-frown</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-futbol"></i><span> far fa-futbol</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-gem"></i><span> far fa-gem</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-lizard"></i><span> far fa-hand-lizard</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-paper"></i><span> far fa-hand-paper</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-peace"></i><span> far fa-hand-peace</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-point-down"></i><span> far fa-hand-point-down</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-point-left"></i><span> far fa-hand-point-left</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-point-right"></i><span> far fa-hand-point-right</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-point-up"></i><span> far fa-hand-point-up</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-pointer"></i><span> far fa-hand-pointer</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-rock"></i><span> far fa-hand-rock</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-scissors"></i><span> far fa-hand-scissors</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hand-spock"></i><span> far fa-hand-spock</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-handshake"></i><span> far fa-handshake</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hdd"></i><span> far fa-hdd</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-heart"></i><span> far fa-heart</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hospital"></i><span> far fa-hospital</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-hourglass"></i><span> far fa-hourglass</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-id-badge"></i><span> far fa-id-badge</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-id-card"></i><span> far fa-id-card</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-image"></i><span> far fa-image</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-images"></i><span> far fa-images</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-keyboard"></i><span> far fa-keyboard</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-lemon"></i><span> far fa-lemon</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-life-ring"></i><span> far fa-life-ring</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-lightbulb"></i><span> far fa-lightbulb</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-list-alt"></i><span> far fa-list-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-map"></i><span> far fa-map</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-meh"></i><span> far fa-meh</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-minus-square"></i><span> far fa-minus-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-money-bill-alt"></i><span> far fa-money-bill-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-moon"></i><span> far fa-moon</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-newspaper"></i><span> far fa-newspaper</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-object-group"></i><span> far fa-object-group</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-object-ungroup"></i><span> far fa-object-ungroup</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-paper-plane"></i><span> far fa-paper-plane</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-pause-circle"></i><span> far fa-pause-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-play-circle"></i><span> far fa-play-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-plus-square"></i><span> far fa-plus-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-question-circle"></i><span> far fa-question-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-registered"></i><span> far fa-registered</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-save"></i><span> far fa-save</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-share-square"></i><span> far fa-share-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-smile"></i><span> far fa-smile</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-snowflake"></i><span> far fa-snowflake</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-square"></i><span> far fa-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-star"></i><span> far fa-star</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-star-half"></i><span> far fa-star-half</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-sticky-note"></i><span> far fa-sticky-note</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-stop-circle"></i><span> far fa-stop-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-sun"></i><span> far fa-sun</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-thumbs-down"></i><span> far fa-thumbs-down</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-thumbs-up"></i><span> far fa-thumbs-up</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-times-circle"></i><span> far fa-times-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-trash-alt"></i><span> far fa-trash-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-user"></i><span> far fa-user</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-user-circle"></i><span> far fa-user-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-window-close"></i><span> far fa-window-close</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-window-maximize"></i><span> far fa-window-maximize</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-window-minimize"></i><span> far fa-window-minimize</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="far fa-window-restore"></i><span> far fa-window-restore</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Brand  Icons</h4>
                            <h6 className="card-subtitle">use the icon by just put class <code>fab fa-accessible-icon</code> in i tag </h6>
                        </div>
                        <div className="card-body">
                            <div className="clearfix icon-list-demo row">
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-500px"></i><span> fab fa-500px</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-accessible-icon"></i><span> fab fa-accessible-icon</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-accusoft"></i><span> fab fa-accusoft</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-adn"></i><span> fab fa-adn</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-adversal"></i><span> fab fa-adversal</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-affiliatetheme"></i><span> fab fa-affiliatetheme</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-algolia"></i><span> fab fa-algolia</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-amazon"></i><span> fab fa-amazon</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-amazon-pay"></i><span> fab fa-amazon-pay</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-amilia"></i><span> fab fa-amilia</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-android"></i><span> fab fa-android</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-angellist"></i><span> fab fa-angellist</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-angrycreative"></i><span> fab fa-angrycreative</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-angular"></i><span> fab fa-angular</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-app-store"></i><span> fab fa-app-store</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-app-store-ios"></i><span> fab fa-app-store-ios</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-apper"></i><span> fab fa-apper</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-apple"></i><span> fab fa-apple</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-apple-pay"></i><span> fab fa-apple-pay</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-asymmetrik"></i><span> fab fa-asymmetrik</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-audible"></i><span> fab fa-audible</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-autoprefixer"></i><span> fab fa-autoprefixer</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-avianex"></i><span> fab fa-avianex</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-aviato"></i><span> fab fa-aviato</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-aws"></i><span> fab fa-aws</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bandcamp"></i><span> fab fa-bandcamp</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-behance"></i><span> fab fa-behance</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-behance-square"></i><span> fab fa-behance-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bimobject"></i><span> fab fa-bimobject</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bitbucket"></i><span> fab fa-bitbucket</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bitcoin"></i><span> fab fa-bitcoin</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bity"></i><span> fab fa-bity</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-black-tie"></i><span> fab fa-black-tie</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-blackberry"></i><span> fab fa-blackberry</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-blogger"></i><span> fab fa-blogger</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-blogger-b"></i><span> fab fa-blogger-b</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bluetooth"></i><span> fab fa-bluetooth</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-bluetooth-b"></i><span> fab fa-bluetooth-b</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-btc"></i><span> fab fa-btc</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-buromobelexperte"></i><span> fab fa-buromobelexperte</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-amazon-pay"></i><span> fab fa-cc-amazon-pay</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-amex"></i><span> fab fa-cc-amex</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-apple-pay"></i><span> fab fa-cc-apple-pay</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-diners-club"></i><span> fab fa-cc-diners-club</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-discover"></i><span> fab fa-cc-discover</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-jcb"></i><span> fab fa-cc-jcb</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-mastercard"></i><span> fab fa-cc-mastercard</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-paypal"></i><span> fab fa-cc-paypal</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-stripe"></i><span> fab fa-cc-stripe</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cc-visa"></i><span> fab fa-cc-visa</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-centercode"></i><span> fab fa-centercode</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-chrome"></i><span> fab fa-chrome</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cloudscale"></i><span> fab fa-cloudscale</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cloudsmith"></i><span> fab fa-cloudsmith</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cloudversify"></i><span> fab fa-cloudversify</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-codepen"></i><span> fab fa-codepen</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-codiepie"></i><span> fab fa-codiepie</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-connectdevelop"></i><span> fab fa-connectdevelop</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-contao"></i><span> fab fa-contao</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cpanel"></i><span> fab fa-cpanel</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-creative-commons"></i><span> fab fa-creative-commons</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-css3"></i><span> fab fa-css3</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-css3-alt"></i><span> fab fa-css3-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-cuttlefish"></i><span> fab fa-cuttlefish</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-d-and-d"></i><span> fab fa-d-and-d</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-dashcube"></i><span> fab fa-dashcube</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-delicious"></i><span> fab fa-delicious</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-deploydog"></i><span> fab fa-deploydog</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-deskpro"></i><span> fab fa-deskpro</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-deviantart"></i><span> fab fa-deviantart</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-digg"></i><span> fab fa-digg</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-digital-ocean"></i><span> fab fa-digital-ocean</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-discord"></i><span> fab fa-discord</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-discourse"></i><span> fab fa-discourse</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-dochub"></i><span> fab fa-dochub</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-docker"></i><span> fab fa-docker</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-draft2digital"></i><span> fab fa-draft2digital</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-dribbble"></i><span> fab fa-dribbble</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-dribbble-square"></i><span> fab fa-dribbble-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-dropbox"></i><span> fab fa-dropbox</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-drupal"></i><span> fab fa-drupal</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-dyalog"></i><span> fab fa-dyalog</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-earlybirds"></i><span> fab fa-earlybirds</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-edge"></i><span> fab fa-edge</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-elementor"></i><span> fab fa-elementor</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-ember"></i><span> fab fa-ember</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-empire"></i><span> fab fa-empire</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-envira"></i><span> fab fa-envira</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-erlang"></i><span> fab fa-erlang</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-ethereum"></i><span> fab fa-ethereum</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-etsy"></i><span> fab fa-etsy</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-expeditedssl"></i><span> fab fa-expeditedssl</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-facebook"></i><span> fab fa-facebook</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-facebook-f"></i><span> fab fa-facebook-f</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-facebook-messenger"></i><span> fab fa-facebook-messenger</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-facebook-square"></i><span> fab fa-facebook-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-firefox"></i><span> fab fa-firefox</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-first-order"></i><span> fab fa-first-order</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-firstdraft"></i><span> fab fa-firstdraft</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-flickr"></i><span> fab fa-flickr</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-flipboard"></i><span> fab fa-flipboard</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-fly"></i><span> fab fa-fly</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-font-awesome"></i><span> fab fa-font-awesome</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-font-awesome-alt"></i><span> fab fa-font-awesome-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-font-awesome-flag"></i><span> fab fa-font-awesome-flag</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-fonticons"></i><span> fab fa-fonticons</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-fonticons-fi"></i><span> fab fa-fonticons-fi</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-fort-awesome"></i><span> fab fa-fort-awesome</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-fort-awesome-alt"></i><span> fab fa-fort-awesome-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-forumbee"></i><span> fab fa-forumbee</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-foursquare"></i><span> fab fa-foursquare</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-free-code-camp"></i><span> fab fa-free-code-camp</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-freebsd"></i><span> fab fa-freebsd</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-get-pocket"></i><span> fab fa-get-pocket</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gg"></i><span> fab fa-gg</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gg-circle"></i><span> fab fa-gg-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-git"></i><span> fab fa-git</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-git-square"></i><span> fab fa-git-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-github"></i><span> fab fa-github</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-github-alt"></i><span> fab fa-github-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-github-square"></i><span> fab fa-github-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gitkraken"></i><span> fab fa-gitkraken</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gitlab"></i><span> fab fa-gitlab</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gitter"></i><span> fab fa-gitter</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-glide"></i><span> fab fa-glide</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-glide-g"></i><span> fab fa-glide-g</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gofore"></i><span> fab fa-gofore</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-goodreads"></i><span> fab fa-goodreads</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-goodreads-g"></i><span> fab fa-goodreads-g</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google"></i><span> fab fa-google</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google-drive"></i><span> fab fa-google-drive</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google-play"></i><span> fab fa-google-play</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google-plus"></i><span> fab fa-google-plus</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google-plus-g"></i><span> fab fa-google-plus-g</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google-plus-square"></i><span> fab fa-google-plus-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-google-wallet"></i><span> fab fa-google-wallet</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gratipay"></i><span> fab fa-gratipay</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-grav"></i><span> fab fa-grav</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gripfire"></i><span> fab fa-gripfire</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-grunt"></i><span> fab fa-grunt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-gulp"></i><span> fab fa-gulp</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hacker-news"></i><span> fab fa-hacker-news</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hacker-news-square"></i><span> fab fa-hacker-news-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hips"></i><span> fab fa-hips</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hire-a-helper"></i><span> fab fa-hire-a-helper</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hooli"></i><span> fab fa-hooli</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hotjar"></i><span> fab fa-hotjar</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-houzz"></i><span> fab fa-houzz</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-html5"></i><span> fab fa-html5</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-hubspot"></i><span> fab fa-hubspot</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-imdb"></i><span> fab fa-imdb</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-instagram"></i><span> fab fa-instagram</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-internet-explorer"></i><span> fab fa-internet-explorer</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-ioxhost"></i><span> fab fa-ioxhost</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-itunes"></i><span> fab fa-itunes</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-itunes-note"></i><span> fab fa-itunes-note</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-jenkins"></i><span> fab fa-jenkins</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-joget"></i><span> fab fa-joget</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-joomla"></i><span> fab fa-joomla</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-js"></i><span> fab fa-js</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-js-square"></i><span> fab fa-js-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-jsfiddle"></i><span> fab fa-jsfiddle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-keycdn"></i><span> fab fa-keycdn</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-kickstarter"></i><span> fab fa-kickstarter</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-kickstarter-k"></i><span> fab fa-kickstarter-k</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-korvue"></i><span> fab fa-korvue</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-laravel"></i><span> fab fa-laravel</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-lastfm"></i><span> fab fa-lastfm</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-lastfm-square"></i><span> fab fa-lastfm-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-leanpub"></i><span> fab fa-leanpub</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-less"></i><span> fab fa-less</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-line"></i><span> fab fa-line</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-linkedin"></i><span> fab fa-linkedin</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-linkedin-in"></i><span> fab fa-linkedin-in</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-linode"></i><span> fab fa-linode</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-linux"></i><span> fab fa-linux</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-lyft"></i><span> fab fa-lyft</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-magento"></i><span> fab fa-magento</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-maxcdn"></i><span> fab fa-maxcdn</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-medapps"></i><span> fab fa-medapps</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-medium"></i><span> fab fa-medium</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-medium-m"></i><span> fab fa-medium-m</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-medrt"></i><span> fab fa-medrt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-meetup"></i><span> fab fa-meetup</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-microsoft"></i><span> fab fa-microsoft</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-mix"></i><span> fab fa-mix</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-mixcloud"></i><span> fab fa-mixcloud</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-mizuni"></i><span> fab fa-mizuni</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-modx"></i><span> fab fa-modx</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-monero"></i><span> fab fa-monero</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-napster"></i><span> fab fa-napster</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-nintendo-switch"></i><span> fab fa-nintendo-switch</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-node"></i><span> fab fa-node</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-node-js"></i><span> fab fa-node-js</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-npm"></i><span> fab fa-npm</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-ns8"></i><span> fab fa-ns8</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-nutritionix"></i><span> fab fa-nutritionix</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-odnoklassniki"></i><span> fab fa-odnoklassniki</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-odnoklassniki-square"></i><span> fab fa-odnoklassniki-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-opencart"></i><span> fab fa-opencart</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-openid"></i><span> fab fa-openid</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-opera"></i><span> fab fa-opera</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-optin-monster"></i><span> fab fa-optin-monster</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-osi"></i><span> fab fa-osi</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-page4"></i><span> fab fa-page4</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pagelines"></i><span> fab fa-pagelines</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-palfed"></i><span> fab fa-palfed</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-patreon"></i><span> fab fa-patreon</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-paypal"></i><span> fab fa-paypal</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-periscope"></i><span> fab fa-periscope</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-phabricator"></i><span> fab fa-phabricator</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-phoenix-framework"></i><span> fab fa-phoenix-framework</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-php"></i><span> fab fa-php</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pied-piper"></i><span> fab fa-pied-piper</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pied-piper-alt"></i><span> fab fa-pied-piper-alt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pied-piper-pp"></i><span> fab fa-pied-piper-pp</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pinterest"></i><span> fab fa-pinterest</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pinterest-p"></i><span> fab fa-pinterest-p</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pinterest-square"></i><span> fab fa-pinterest-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-playstation"></i><span> fab fa-playstation</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-product-hunt"></i><span> fab fa-product-hunt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-pushed"></i><span> fab fa-pushed</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-python"></i><span> fab fa-python</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-qq"></i><span> fab fa-qq</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-quinscape"></i><span> fab fa-quinscape</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-quora"></i><span> fab fa-quora</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-ravelry"></i><span> fab fa-ravelry</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-react"></i><span> fab fa-react</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-readme"></i><span> fab fa-readme</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-rebel"></i><span> fab fa-rebel</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-red-river"></i><span> fab fa-red-river</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-reddit"></i><span> fab fa-reddit</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-reddit-alien"></i><span> fab fa-reddit-alien</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-reddit-square"></i><span> fab fa-reddit-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-rendact"></i><span> fab fa-rendact</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-renren"></i><span> fab fa-renren</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-replyd"></i><span> fab fa-replyd</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-resolving"></i><span> fab fa-resolving</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-rocketchat"></i><span> fab fa-rocketchat</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-rockrms"></i><span> fab fa-rockrms</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-safari"></i><span> fab fa-safari</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-sass"></i><span> fab fa-sass</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-schlix"></i><span> fab fa-schlix</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-scribd"></i><span> fab fa-scribd</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-searchengin"></i><span> fab fa-searchengin</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-sellcast"></i><span> fab fa-sellcast</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-sellsy"></i><span> fab fa-sellsy</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-servicestack"></i><span> fab fa-servicestack</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-shirtsinbulk"></i><span> fab fa-shirtsinbulk</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-simplybuilt"></i><span> fab fa-simplybuilt</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-sistrix"></i><span> fab fa-sistrix</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-skyatlas"></i><span> fab fa-skyatlas</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-skype"></i><span> fab fa-skype</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-slack"></i><span> fab fa-slack</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-slack-hash"></i><span> fab fa-slack-hash</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-slideshare"></i><span> fab fa-slideshare</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-snapchat"></i><span> fab fa-snapchat</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-snapchat-ghost"></i><span> fab fa-snapchat-ghost</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-snapchat-square"></i><span> fab fa-snapchat-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-soundcloud"></i><span> fab fa-soundcloud</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-speakap"></i><span> fab fa-speakap</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-spotify"></i><span> fab fa-spotify</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-stack-exchange"></i><span> fab fa-stack-exchange</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-stack-overflow"></i><span> fab fa-stack-overflow</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-staylinked"></i><span> fab fa-staylinked</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-steam"></i><span> fab fa-steam</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-steam-square"></i><span> fab fa-steam-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-steam-symbol"></i><span> fab fa-steam-symbol</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-sticker-mule"></i><span> fab fa-sticker-mule</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-strava"></i><span> fab fa-strava</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-stripe"></i><span> fab fa-stripe</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-stridashboard-s"></i><span> fab fa-stridashboard-s</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-studiovinari"></i><span> fab fa-studiovinari</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-stumbleupon"></i><span> fab fa-stumbleupon</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-stumbleupon-circle"></i><span> fab fa-stumbleupon-circle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-superpowers"></i><span> fab fa-superpowers</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-supple"></i><span> fab fa-supple</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-telegram"></i><span> fab fa-telegram</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-telegram-plane"></i><span> fab fa-telegram-plane</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-tencent-weibo"></i><span> fab fa-tencent-weibo</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-themeisle"></i><span> fab fa-themeisle</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-trello"></i><span> fab fa-trello</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-tripadvisor"></i><span> fab fa-tripadvisor</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-tumblr"></i><span> fab fa-tumblr</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-tumblr-square"></i><span> fab fa-tumblr-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-twitch"></i><span> fab fa-twitch</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-twitter"></i><span> fab fa-twitter</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-twitter-square"></i><span> fab fa-twitter-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-typo3"></i><span> fab fa-typo3</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-uber"></i><span> fab fa-uber</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-uikit"></i><span> fab fa-uikit</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-uniregistry"></i><span> fab fa-uniregistry</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-untappd"></i><span> fab fa-untappd</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-usb"></i><span> fab fa-usb</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-ussunnah"></i><span> fab fa-ussunnah</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vaadin"></i><span> fab fa-vaadin</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-viacoin"></i><span> fab fa-viacoin</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-viadeo"></i><span> fab fa-viadeo</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-viber"></i><span> fab fa-viber</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vimeo"></i><span> fab fa-vimeo</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vimeo-square"></i><span> fab fa-vimeo-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vimeo-v"></i><span> fab fa-vimeo-v</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vine"></i><span> fab fa-vine</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vk"></i><span> fab fa-vk</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vnv"></i><span> fab fa-vnv</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-vuejs"></i><span> fab fa-vuejs</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-weibo"></i><span> fab fa-weibo</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-weixin"></i><span> fab fa-weixin</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-whatsapp"></i><span> fab fa-whatsapp</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-whatsapp-square"></i><span> fab fa-whatsapp-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-whmcs"></i><span> fab fa-whmcs</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-wikipedia-w"></i><span> fab fa-wikipedia-w</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-windows"></i><span> fab fa-windows</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-wordpress"></i><span> fab fa-wordpress</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-wordpress-simple"></i><span> fab fa-wordpress-simple</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-wpbeginner"></i><span> fab fa-wpbeginner</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-wpexplorer"></i><span> fab fa-wpexplorer</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-wpforms"></i><span> fab fa-wpforms</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-xbox"></i><span> fab fa-xbox</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-xing"></i><span> fab fa-xing</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-xing-square"></i><span> fab fa-xing-square</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-y-combinator"></i><span> fab fa-y-combinator</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-yahoo"></i><span> fab fa-yahoo</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-yandex"></i><span> fab fa-yandex</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-yandex-international"></i><span> fab fa-yandex-international</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-yelp"></i><span> fab fa-yelp</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-yoast"></i><span> fab fa-yoast</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-youtube"></i><span> fab fa-youtube</span></div>
                                <div className="col-sm-6 col-md-4 col-lg-3 f-icon"><i className="fab fa-youtube-square"></i><span> fab fa-youtube-square</span></div>
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

export default IconFontawesome;