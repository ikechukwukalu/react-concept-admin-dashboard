import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Carousel extends Component {
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
                            <h2 className="pageheader-title">Carousel</h2>
                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Carousel</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Slides only</h5>
                            <div className="card-body">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-1.jpg"} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-2.jpg"} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-3.jpg"} alt="Third slide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Slides with Controls</h5>
                            <div className="card-body">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-1.jpg"} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-2.jpg"} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-3.jpg"} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>   </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="sr-only">Next</span>  </a>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Slides with Indicators</h5>
                            <div className="card-body">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-1.jpg"} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-2.jpg"} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-3.jpg"} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>  </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Slides with Captions</h5>
                            <div className="card-body">
                                <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-1.jpg"} alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h3 className="text-white">Heading Title Carousel</h3>
                                                <p>Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-2.jpg"} alt="Second slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h3 className="text-white">Heading Title Carousel</h3>
                                                <p>Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={this.state.base_url+"assets/images/card-img-3.jpg"} alt="Third slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h3 className="text-white">Heading Title Carousel</h3>
                                                <p>Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>  </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>  </a>
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

export default Carousel;