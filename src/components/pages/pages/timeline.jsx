import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Timeline extends Component {
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
      (function(){
        // Vertical Timeline - by CodyHouse.co
        function VerticalTimeline( element ) {
            this.element = element;
            this.blocks = this.element.getElementsByClassName("js-cd-block");
            this.images = this.element.getElementsByClassName("js-cd-img");
            this.contents = this.element.getElementsByClassName("js-cd-content");
            this.offset = 0.8;
            this.hideBlocks();
        };
    
        VerticalTimeline.prototype.hideBlocks = function() {
            //hide timeline blocks which are outside the viewport
            if ( !"classList" in document.documentElement ) {
                return;
            }
            var self = this;
            for( var i = 0; i < this.blocks.length; i++) {
                (function(i){
                    if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                        self.images[i].classList.add("cd-is-hidden"); 
                        self.contents[i].classList.add("cd-is-hidden"); 
                    }
                })(i);
            }
        };
    
        VerticalTimeline.prototype.showBlocks = function() {
            if ( ! "classList" in document.documentElement ) {
                return;
            }
            var self = this;
            for( var i = 0; i < this.blocks.length; i++) {
                (function(i){
                    if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                        // add bounce-in animation
                        self.images[i].classList.add("cd-timeline__img--bounce-in");
                        self.contents[i].classList.add("cd-timeline__content--bounce-in");
                        self.images[i].classList.remove("cd-is-hidden");
                        self.contents[i].classList.remove("cd-is-hidden");
                    }
                })(i);
            }
        };
    
        var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
            verticalTimelinesArray = [],
            scrolling = false;
        if( verticalTimelines.length > 0 ) {
            for( var i = 0; i < verticalTimelines.length; i++) {
                (function(i){
                    verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
                })(i);
            }
    
            //show timeline blocks on scrolling
            window.addEventListener("scroll", function(event) {
                if( !scrolling ) {
                    scrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
                }
            });
        }
    
        function checkTimelineScroll() {
            verticalTimelinesArray.forEach(function(timeline){
                timeline.showBlocks();
            });
            scrolling = false;
        };
    })();
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
                        <h2 className="pageheader-title">Timeline </h2>
                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Timeline</li>
                                    </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="cd-timeline js-cd-timeline">
                        <div className="cd-timeline__container">
                            <div className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                                    <img src={this.state.base_url+"assets/vendor/timeline/img/cd-icon-picture.svg"} alt="Picture" />
                                </div>
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>Title of section 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                    <a href="#0" className="btn btn-primary btn-lg">Read More</a>
                                    <span className="cd-timeline__date">12 July, 2016</span>
                                </div>
                            </div>
                            <div className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--movie js-cd-img">
                                    <img src={this.state.base_url+"assets/vendor/timeline/img/cd-icon-movie.svg"} alt="Movie" />
                                </div>
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>Title of section 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                                <a href="#0" className="btn btn-primary btn-lg">Read More</a>
                                    <span className="cd-timeline__date">20 July, 2017</span>
                                </div>
                            </div>
                            <div className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                                    <img src={this.state.base_url+"assets/vendor/timeline/img/cd-icon-picture.svg"} alt="Picture" />
                                </div>
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>Title of section 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
                                <a href="#0" className="btn btn-primary btn-lg">Read More</a>
                                    <span className="cd-timeline__date">24 July, 2018</span>
                                </div>
                            </div>
                            <div className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--location js-cd-img">
                                    <img src={this.state.base_url+"assets/vendor/timeline/img/cd-icon-location.svg"} alt="Location" />
                                </div>
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>Title of section 4</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                <a href="#0" className="btn btn-primary btn-lg">Read More</a>
                                    <span className="cd-timeline__date">12 September, 2018</span>
                                </div>
                            </div>
                            <div className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--location js-cd-img">
                                    <img src={this.state.base_url+"assets/vendor/timeline/img/cd-icon-location.svg"} alt="Location" />
                                </div>
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>Title of section 5</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                                <a href="#0" className="btn btn-primary btn-lg">Read More</a>
                                
                                    <span className="cd-timeline__date">20 September, 2018</span>
                                </div>
                            </div>
                            <div className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--movie js-cd-img">
                                    <img src={this.state.base_url+"assets/vendor/timeline/img/cd-icon-movie.svg"} alt="Movie" />
                                </div>
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>Final Section</h3>
                                    <p>This is the content of the last section</p>
                                    <span className="cd-timeline__date">1 October, 2018</span>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default Timeline;