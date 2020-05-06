import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class IconWeather extends Component {
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
                        <h2 className="pageheader-title">Wheather Icons </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Icons</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Wheather Icons</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">25 icons v2.0 <span className="label label-sm label-success">New </span></h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-high"></i> wi wi-day-cloudy-high </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonrise"></i> wi wi-moonrise </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-volcano"></i> wi wi-volcano </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-light-wind"></i> wi wi-day-light-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonset"></i> wi wi-moonset </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-flood"></i> wi wi-flood </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-train"></i> wi wi-train </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sleet"></i> wi wi-day-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sleet"></i> wi wi-night-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sandstorm"></i> wi wi-sandstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-small-craft-advisory"></i> wi wi-small-craft-advisory </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-haze"></i> wi wi-day-haze </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sleet"></i> wi wi-night-alt-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-tsunami"></i> wi wi-tsunami </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-gale-warning"></i> wi wi-gale-warning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-high"></i> wi wi-night-cloudy-high </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-raindrop"></i> wi wi-raindrop </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-earthquake"></i> wi wi-earthquake </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-warning"></i> wi wi-storm-warning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-partly-cloudy"></i> wi wi-night-alt-partly-cloudy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-barometer"></i> wi wi-barometer </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fire"></i> wi wi-fire </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hurricane-warning"></i> wi wi-hurricane-warning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sleet"></i> wi wi-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-humidity"></i> wi wi-humidity </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Daytime icons</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sunny"></i> wi wi-day-sunny </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy"></i> wi wi-day-cloudy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-gusts"></i> wi wi-day-cloudy-gusts </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-windy"></i> wi wi-day-cloudy-windy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-fog"></i> wi wi-day-fog </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-hail"></i> wi wi-day-hail </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-haze"></i> wi wi-day-haze </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-lightning"></i> wi wi-day-lightning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-rain"></i> wi wi-day-rain </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-rain-mix"></i> wi wi-day-rain-mix </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-rain-wind"></i> wi wi-day-rain-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-showers"></i> wi wi-day-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sleet"></i> wi wi-day-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sleet-storm"></i> wi wi-day-sleet-storm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-snow"></i> wi wi-day-snow </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-snow-thunderstorm"></i> wi wi-day-snow-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-snow-wind"></i> wi wi-day-snow-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sprinkle"></i> wi wi-day-sprinkle </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-storm-showers"></i> wi wi-day-storm-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sunny-overcast"></i> wi wi-day-sunny-overcast </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-thunderstorm"></i> wi wi-day-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-windy"></i> wi wi-day-windy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-solar-eclipse"></i> wi wi-solar-eclipse </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hot"></i> wi wi-hot </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-high"></i> wi wi-day-cloudy-high </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-light-wind"></i> wi wi-day-light-wind </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Night Time icons</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-clear"></i> wi wi-night-clear </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy"></i> wi wi-night-alt-cloudy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy-gusts"></i> wi wi-night-alt-cloudy-gusts </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy-windy"></i> wi wi-night-alt-cloudy-windy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-hail"></i> wi wi-night-alt-hail </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-lightning"></i> wi wi-night-alt-lightning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-rain"></i> wi wi-night-alt-rain </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-rain-mix"></i> wi wi-night-alt-rain-mix </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-rain-wind"></i> wi wi-night-alt-rain-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-showers"></i> wi wi-night-alt-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sleet"></i> wi wi-night-alt-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sleet-storm"></i> wi wi-night-alt-sleet-storm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-snow"></i> wi wi-night-alt-snow </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-snow-thunderstorm"></i> wi wi-night-alt-snow-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-snow-wind"></i> wi wi-night-alt-snow-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sprinkle"></i> wi wi-night-alt-sprinkle </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-storm-showers"></i> wi wi-night-alt-storm-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-thunderstorm"></i> wi wi-night-alt-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy"></i> wi wi-night-cloudy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-gusts"></i> wi wi-night-cloudy-gusts </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-windy"></i> wi wi-night-cloudy-windy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-fog"></i> wi wi-night-fog </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-hail"></i> wi wi-night-hail </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-lightning"></i> wi wi-night-lightning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-partly-cloudy"></i> wi wi-night-partly-cloudy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-rain"></i> wi wi-night-rain </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-rain-mix"></i> wi wi-night-rain-mix </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-rain-wind"></i> wi wi-night-rain-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-showers"></i> wi wi-night-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sleet"></i> wi wi-night-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sleet-storm"></i> wi wi-night-sleet-storm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-snow"></i> wi wi-night-snow </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-snow-thunderstorm"></i> wi wi-night-snow-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-snow-wind"></i> wi wi-night-snow-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sprinkle"></i> wi wi-night-sprinkle </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-storm-showers"></i> wi wi-night-storm-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-thunderstorm"></i> wi wi-night-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-lunar-eclipse"></i> wi wi-lunar-eclipse </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-stars"></i> wi wi-stars </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-showers"></i> wi wi-storm-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thunderstorm"></i> wi wi-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy-high"></i> wi wi-night-alt-cloudy-high </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-high"></i> wi wi-night-cloudy-high </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-partly-cloudy"></i> wi wi-night-alt-partly-cloudy </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Nautral icons</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud"></i> wi wi-cloud </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloudy"></i> wi wi-cloudy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloudy-gusts"></i> wi wi-cloudy-gusts </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloudy-windy"></i> wi wi-cloudy-windy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fog"></i> wi wi-fog </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hail"></i> wi wi-hail </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-rain"></i> wi wi-rain </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-rain-mix"></i> wi wi-rain-mix </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-rain-wind"></i> wi wi-rain-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-showers"></i> wi wi-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sleet"></i> wi wi-sleet </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snow"></i> wi wi-snow </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sprinkle"></i> wi wi-sprinkle </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-showers"></i> wi wi-storm-showers </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thunderstorm"></i> wi wi-thunderstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snow-wind"></i> wi wi-snow-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snow"></i> wi wi-snow </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-smog"></i> wi wi-smog </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-smoke"></i> wi wi-smoke </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-lightning"></i> wi wi-lightning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-raindrops"></i> wi wi-raindrops </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-raindrop"></i> wi wi-raindrop </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-dust"></i> wi wi-dust </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snowflake-cold"></i> wi wi-snowflake-cold </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-windy"></i> wi wi-windy </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-strong-wind"></i> wi wi-strong-wind </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sandstorm"></i> wi wi-sandstorm </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-earthquake"></i> wi wi-earthquake </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fire"></i> wi wi-fire </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-flood"></i> wi wi-flood </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-meteor"></i> wi wi-meteor </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-tsunami"></i> wi wi-tsunami </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-volcano"></i> wi wi-volcano </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hurricane"></i> wi wi-hurricane </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-tornado"></i> wi wi-tornado </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-small-craft-advisory"></i> wi wi-small-craft-advisory </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-gale-warning"></i> wi wi-gale-warning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-warning"></i> wi wi-storm-warning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hurricane-warning"></i> wi wi-hurricane-warning </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-wind-direction"></i> wi wi-wind-direction </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Moon Phase icons</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-new"></i> wi wi-moon-new </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-1"></i> wi wi-moon-waxing-cresent-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-2"></i> wi wi-moon-waxing-cresent-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-3"></i> wi wi-moon-waxing-cresent-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-4"></i> wi wi-moon-waxing-cresent-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-5"></i> wi wi-moon-waxing-cresent-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-6"></i> wi wi-moon-waxing-cresent-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-first-quarter"></i> wi wi-moon-first-quarter </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-1"></i> wi wi-moon-waxing-gibbous-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-2"></i> wi wi-moon-waxing-gibbous-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-3"></i> wi wi-moon-waxing-gibbous-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-4"></i> wi wi-moon-waxing-gibbous-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-5"></i> wi wi-moon-waxing-gibbous-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-6"></i> wi wi-moon-waxing-gibbous-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-full"></i> wi wi-moon-full </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-1"></i> wi wi-moon-waning-gibbous-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-2"></i> wi wi-moon-waning-gibbous-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-3"></i> wi wi-moon-waning-gibbous-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-4"></i> wi wi-moon-waning-gibbous-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-5"></i> wi wi-moon-waning-gibbous-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-6"></i> wi wi-moon-waning-gibbous-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-third-quarter"></i> wi wi-moon-third-quarter </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-1"></i> wi wi-moon-waning-crescent-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-2"></i> wi wi-moon-waning-crescent-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-3"></i> wi wi-moon-waning-crescent-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-4"></i> wi wi-moon-waning-crescent-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-5"></i> wi wi-moon-waning-crescent-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-6"></i> wi wi-moon-waning-crescent-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-new"></i> wi wi-moon-alt-new </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-1"></i> wi wi-moon-alt-waxing-cresent-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-2"></i> wi wi-moon-alt-waxing-cresent-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-3"></i> wi wi-moon-alt-waxing-cresent-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-4"></i> wi wi-moon-alt-waxing-cresent-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-5"></i> wi wi-moon-alt-waxing-cresent-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-6"></i> wi wi-moon-alt-waxing-cresent-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-first-quarter"></i> wi wi-moon-alt-first-quarter </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-1"></i> wi wi-moon-alt-waxing-gibbous-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-2"></i> wi wi-moon-alt-waxing-gibbous-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-3"></i> wi wi-moon-alt-waxing-gibbous-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-4"></i> wi wi-moon-alt-waxing-gibbous-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-5"></i> wi wi-moon-alt-waxing-gibbous-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-6"></i> wi wi-moon-alt-waxing-gibbous-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-full"></i> wi wi-moon-alt-full </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-1"></i> wi wi-moon-alt-waning-gibbous-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-2"></i> wi wi-moon-alt-waning-gibbous-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-3"></i> wi wi-moon-alt-waning-gibbous-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-4"></i> wi wi-moon-alt-waning-gibbous-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-5"></i> wi wi-moon-alt-waning-gibbous-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-6"></i> wi wi-moon-alt-waning-gibbous-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-third-quarter"></i> wi wi-moon-alt-third-quarter </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-1"></i> wi wi-moon-alt-waning-crescent-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-2"></i> wi wi-moon-alt-waning-crescent-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-3"></i> wi wi-moon-alt-waning-crescent-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-4"></i> wi wi-moon-alt-waning-crescent-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-5"></i> wi wi-moon-alt-waning-crescent-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-6"></i> wi wi-moon-alt-waning-crescent-6 </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Other icons</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-alien"></i> wi wi-alien </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-celsius"></i> wi wi-celsius </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fahrenheit"></i> wi wi-fahrenheit </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-degrees"></i> wi wi-degrees </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thermometer"></i> wi wi-thermometer </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thermometer-exterior"></i> wi wi-thermometer-exterior </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thermometer-internal"></i> wi wi-thermometer-internal </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud-down"></i> wi wi-cloud-down </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud-up"></i> wi wi-cloud-up </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud-refresh"></i> wi wi-cloud-refresh </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-horizon"></i> wi wi-horizon </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-horizon-alt"></i> wi wi-horizon-alt </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sunrise"></i> wi wi-sunrise </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sunset"></i> wi wi-sunset </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonrise"></i> wi wi-moonrise </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonset"></i> wi wi-moonset </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-refresh"></i> wi wi-refresh </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-refresh-alt"></i> wi wi-refresh-alt </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-umbrella"></i> wi wi-umbrella </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-barometer"></i> wi wi-barometer </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-humidity"></i> wi wi-humidity </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-na"></i> wi wi-na </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-train"></i> wi wi-train </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi "></i> wi </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Time icons</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-1"></i> wi wi-time-1 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-2"></i> wi wi-time-2 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-3"></i> wi wi-time-3 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-4"></i> wi wi-time-4 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-5"></i> wi wi-time-5 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-6"></i> wi wi-time-6 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-7"></i> wi wi-time-7 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-8"></i> wi wi-time-8 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-9"></i> wi wi-time-9 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-10"></i> wi wi-time-10 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-11"></i> wi wi-time-11 </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-12"></i> wi wi-time-12 </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Directional Arrows</h5>
                            <div className="card-body">
                                <div className="icon-list-demo row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-up"></i> wi wi-direction-up </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-up-right"></i> wi wi-direction-up-right </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-right"></i> wi wi-direction-right </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-down-right"></i> wi wi-direction-down-right </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-down"></i> wi wi-direction-down </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-down-left"></i> wi wi-direction-down-left </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-left"></i> wi wi-direction-left </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-up-left"></i> wi wi-direction-up-left </div>
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

export default IconWeather;