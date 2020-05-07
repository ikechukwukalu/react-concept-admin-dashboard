import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class IconSimpleLine extends Component {
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
                        <h2 className="pageheader-title">Simpleline Icons </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Icons</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Simpleline Icons</li>
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
                                <h4 className="card-title">Control Icons</h4>
                                <h6 className="card-subtitle">use class <code>icon-</code> icon name in i tag</h6></div>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-user"></i> icon-user
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-people"></i> icon-people
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-user-female"></i> icon-user-female
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-user-follow"></i> icon-user-follow
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-user-following"></i> icon-user-following
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-user-unfollow"></i> icon-user-unfollow
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-login"></i> icon-login
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-logout"></i> icon-logout
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-emotsmile"></i> icon-emotsmile
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-phone"></i> icon-phone
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-call-end"></i> icon-call-end
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-call-in"></i> icon-call-in
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-call-out"></i> icon-call-out
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-map"></i> icon-map
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-location-pin"></i> icon-location-pin
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-direction"></i> icon-direction
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-directions"></i> icon-directions
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-compass"></i> icon-compass
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-layers"></i> icon-layers
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-menu"></i> icon-menu
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-list"></i> icon-list
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-options-vertical"></i> icon-options-vertical
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-options"></i> icon-options
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-down"></i> icon-arrow-down
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-left"></i> icon-arrow-left
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-right"></i> icon-arrow-right
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-up"></i> icon-arrow-up
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-up-circle"></i> icon-arrow-up-circle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-left-circle"></i> icon-arrow-left-circle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-right-circle"></i> icon-arrow-right-circle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-arrow-down-circle"></i> icon-arrow-down-circle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-check"></i> icon-check
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-clock"></i> icon-clock
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-plus"></i> icon-plus
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-close"></i> icon-close
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-trophy"></i> icon-trophy
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-screen-smartphone"></i> icon-screen-smartphone
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-screen-desktop"></i> icon-screen-desktop
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-plane"></i> icon-plane
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-notebook"></i> icon-notebook
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-mustache"></i> icon-mustache
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-mouse"></i> icon-mouse
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-magnet"></i> icon-magnet
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-energy"></i> icon-energy
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-disc"></i> icon-disc
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-cursor"></i> icon-cursor
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-cursor-move"></i> icon-cursor-move
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-crop"></i> icon-crop
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-chemistry"></i> icon-chemistry
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-speedometer"></i> icon-speedometer
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-shield"></i> icon-shield
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-screen-tablet"></i> icon-screen-tablet
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-magic-wand"></i> icon-magic-wand
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-hourglass"></i> icon-hourglass
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-graduation"></i> icon-graduation
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-ghost"></i> icon-ghost
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-game-controller"></i> icon-game-controller
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-fire"></i> icon-fire
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-eyeglass"></i> icon-eyeglass
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-envelodashboard-open"></i> icon-envelodashboard-open
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-envolodashboard-letter"></i> icon-envolodashboard-letter
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-bell"></i> icon-bell
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-badge"></i> icon-badge
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-anchor"></i> icon-anchor
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-wallet"></i> icon-wallet
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-vector"></i> icon-vector
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-speech"></i> icon-speech
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-puzzle"></i> icon-puzzle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-printer"></i> icon-printer
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-present"></i> icon-present
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-playlist"></i> icon-playlist
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-pin"></i> icon-pin
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-picture"></i> icon-picture
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-handbag"></i> icon-handbag
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-globe-alt"></i> icon-globe-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-globe"></i> icon-globe
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-folder-alt"></i> icon-folder-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-folder"></i> icon-folder
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-film"></i> icon-film
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-feed"></i> icon-feed
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-drop"></i> icon-drop
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-drawar"></i> icon-drawar
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-docs"></i> icon-docs
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-doc"></i> icon-doc
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-diamond"></i> icon-diamond
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-cup"></i> icon-cup
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-calculator"></i> icon-calculator
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-bubbles"></i> icon-bubbles
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-briefcase"></i> icon-briefcase
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-book-open"></i> icon-book-open
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-basket-loaded"></i> icon-basket-loaded
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-basket"></i> icon-basket
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-bag"></i> icon-bag
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-action-undo"></i> icon-action-undo
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-action-redo"></i> icon-action-redo
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-wrench"></i> icon-wrench
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-umbrella"></i> icon-umbrella
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-trash"></i> icon-trash
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-tag"></i> icon-tag
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-support"></i> .icon-support
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-frame"></i> icon-frame
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-size-fullscreen"></i> icon-size-fullscreen
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-size-actual"></i> icon-size-actual
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-shuffle"></i> icon-shuffle
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-share-alt"></i> icon-share-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-share"></i> icon-share
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-rocket"></i> icon-rocket
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-question"></i> icon-question
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-pie-chart"></i> icon-pie-chart
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-pencil"></i> icon-pencil
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-note"></i> icon-note
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-loop"></i> icon-loop
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-home"></i> icon-home
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-grid"></i> icon-grid
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-graph"></i> icon-graph
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-microphone"></i> icon-microphone
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-music-tone-alt"></i> icon-music-tone-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-music-tone"></i> icon-music-tone
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-earphones-alt"></i> icon-earphones-alt
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-earphones"></i> icon-earphones
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-equalizer"></i> icon-equalizer
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-like"></i> icon-like
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-dislike"></i> icon-dislike
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-control-start"></i> icon-control-start
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-control-rewind"></i> icon-control-rewind
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-control-play"></i> icon-control-play
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-control-pause"></i> icon-control-pause
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-control-forward"></i> icon-control-forward
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-control-end"></i> icon-control-end
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-volume-1"></i> icon-volume-1
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-volume-2"></i> icon-volume-2
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-volume-off"></i> icon-volume-off
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-calendar"></i> icon-calendar
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-bulb"></i> icon-bulb
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-chart"></i> icon-chart
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-ban"></i> icon-ban
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-bubble"></i> icon-bubble
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-camrecorder"></i> icon-camrecorder
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-camera"></i> icon-camera
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-cloud-download"></i> icon-cloud-download
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-cloud-upload"></i> icon-cloud-upload
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-eye"></i> icon-eye
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-flag"></i> icon-flag
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-heart"></i> icon-heart
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-info"></i> icon-info
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-key"></i> icon-key
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-link"></i> icon-link
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-lock"></i> icon-lock
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-lock-open"></i> icon-lock-open
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-magnifier"></i> icon-magnifier
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-magnifier-add"></i> icon-magnifier-add
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-magnifier-remove"></i> icon-magnifier-remove
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-paper-clip"></i> icon-paper-clip
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-paper-plane"></i> icon-paper-plane
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-power"></i> icon-power
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-refresh"></i> icon-refresh
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-reload"></i> icon-reload
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-settings"></i> icon-settings
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-star"></i> icon-star
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-symble-female"></i> icon-symble-female
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-symbol-male"></i> icon-symbol-male
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-target"></i> icon-target
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-credit-card"></i> icon-credit-card
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-paypal"></i> icon-paypal
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-tumblr"></i> icon-social-tumblr
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-twitter"></i> icon-social-twitter
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-facebook"></i> icon-social-facebook
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-instagram"></i> icon-social-instagram
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-linkedin"></i> icon-social-linkedin
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-pintarest"></i> icon-social-pintarest
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-github"></i> icon-social-github
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-gplus"></i> icon-social-gplus
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-reddit"></i> icon-social-reddit
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-skype"></i> icon-social-skype
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-dribbble"></i> icon-social-dribbble
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-behance"></i> icon-social-behance
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-foursqare"></i> icon-social-foursqare
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-soundcloud"></i> icon-social-soundcloud
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-spotify"></i> icon-social-spotify
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-stumbleupon"></i> icon-social-stumbleupon
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-youtube"></i> icon-social-youtube
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 sl-icon">
                                        <i className="icon-social-dropbox"></i> icon-social-dropbox
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

export default IconSimpleLine;