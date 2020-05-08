import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Typography extends Component {
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
        <div className="container-fluid dashboard-content ">
         
                <div className="row">
                    <div className="col-xl-10">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h2 className="pageheader-title">Typography </h2>
                                    <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Typography</li>
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
                                <div className="card" id="headings">
                                    <h5 className="card-header">Headings</h5>
                                    <div className="card-body">
                                        <h1>h1. Bootstrap heading</h1>
                                        <h2>h2. Bootstrap heading</h2>
                                        <h3>h3. Bootstrap heading</h3>
                                        <h4>h4. Bootstrap heading</h4>
                                        <h5>h5. Bootstrap heading</h5>
                                        <h6>h6. Bootstrap heading</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="d-heading">
                                    <h5 className="card-header">Display Headings</h5>
                                    <div className="card-body">
                                        <h1 className="display-1">Display 1</h1>
                                        <h1 className="display-2">Display 2</h1>
                                        <h1 className="display-3">Display 3</h1>
                                        <h1 className="display-4">Display 4</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="text">
                                    <h5 className="card-header">Body Text</h5>
                                    <div className="card-body">
                                        <p className="lead"> Maecenas eget metus quis justo semper malesuada id id leo. Mauris tristique libero mauris, vitae rutrum mi ultricies a. Vestibulum volutpat eu leo sit amet feugiat. </p>
                                        <p>Pellentesque pellentesque elementum sem, eu interdum magna. Aenean vestibulum, erat vel tincidunt luctus, ex orci interdum est, ut vehicula erat massa ut purus. Nam sit amet odio quis ante bibendum faucibus. Mauris eleifend lobortis justo vel dictum. Aenean lobortis eleifend turpis, sit amet ullamcorper dui euismod at. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="align">
                                    <h5 className="card-header">Alignment</h5>
                                    <div className="card-body">
                                        <h3 className="text-left">Left aligned text.</h3>
                                        <p className="text-left">Pellentesque vulputate arcu sed risus auctor tincidunt. Morbi eget massa turpis. Fusce aliquet dolor eu posuere tincidunt. Fusce ultricies luctus dui, dapibus pharetra risus semper non. .</p>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="text-center">Center aligned text.</h3>
                                        <p className="text-center">Pellentesque vulputate arcu sed risus auctor tincidunt. Morbi eget massa turpis. Fusce aliquet dolor eu posuere tincidunt. Fusce ultricies luctus dui, dapibus pharetra risus semper non. .</p>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="text-right">Right aligned text.</h3>
                                        <p className="text-right">Pellentesque vulputate arcu sed risus auctor tincidunt. Morbi eget massa turpis. Fusce aliquet dolor eu posuere tincidunt. Fusce ultricies luctus dui, dapibus pharetra risus semper non. .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="u-list">
                                    <h5 className="card-header">Unordered list</h5>
                                    <div className="card-body">
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>Integer molestie lorem at massa</li>
                                            <li>Facilisis in pretium nisl aliquet</li>
                                            <li>Nulla volutpat aliquam velit
                                                <ul>
                                                    <li>Phasellus iaculis neque</li>
                                                    <li>Purus sodales ultricies</li>
                                                    <li>Vestibulum laoreet porttitor sem</li>
                                                    <li>Ac tristique libero volutpat at</li>
                                                </ul>
                                            </li>
                                            <li>Faucibus porta lacus fringilla vel</li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="o-list">
                                    <h5 className="card-header">Ordered list</h5>
                                    <div className="card-body">
                                        <ol>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>Integer molestie lorem at massa</li>
                                            <li>Facilisis in pretium nisl aliquet</li>
                                            <li>Nulla volutpat aliquam velit</li>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                            <li>Faucibus porta lacus fringilla vel</li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="un-list">
                                    <h5 className="card-header">Unstyled</h5>
                                    <div className="card-body">
                                        <ul className="list-unstyled">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>Integer molestie lorem at massa</li>
                                            <li>Facilisis in pretium nisl aliquet</li>
                                            <li>Nulla volutpat aliquam velit</li>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                            <li>Faucibus porta lacus fringilla vel</li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="styled-list">
                                    <h5 className="card-header">List Styled</h5>
                                    <div className="card-body">
                                        <ul className="list-unstyled arrow">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>Integer molestie lorem at massa</li>
                                            <li>Facilisis in pretium nisl aliquet</li>
                                            <li>Nulla volutpat aliquam velit</li>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                            <li>Faucibus porta lacus fringilla vel</li>
                                            <li>Aenean sit amet erat nunc</li>
                                            <li>Eget porttitor lorem</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="text-elements">
                                    <h5 className="card-header">Text Elements</h5>
                                    <div className="card-body">
                                        <p>You can use the mark tag to
                                            <mark>highlight</mark> text.</p>
                                        <p>
                                            <del>This line of text is meant to be treated as deleted text.</del>
                                        </p>
                                        <p>
                                            <s>This line of text is meant to be treated as no longer accurate.</s>
                                        </p>
                                        <p>
                                            <ins>This line of text is meant to be treated as an addition to the document.</ins>
                                        </p>
                                        <p><u>This line of text will render as underlined</u></p>
                                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                                        <p><strong>This line rendered as bold text.</strong></p>
                                        <p><em>This line rendered as italicized text.</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card" id="blockquote">
                                    <h5 className="card-header">Blockquote</h5>
                                    <div className="card-body">
                                        <blockquote className="blockquote">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </blockquote>
                                    </div>
                                    <div className="card-body border-top">
                                        <blockquote className="blockquote">
                                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in
                                                <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 ">
                        <div className="sidebar-nav-fixed">
                            <ul className="list-unstyled">
                                <li><a href="#overview" className="active">Overview</a></li>
                                <li><a href="#headings">Headings</a></li>
                                <li><a href="#d-heading">Display Headings</a></li>
                                <li><a href="#text">Body Text</a></li>
                                <li><a href="#align">Alignment</a></li>
                                <li><a href="#u-list">Unordered list</a></li>
                                <li><a href="#o-list">Ordered list</a></li>
                                <li><a href="#un-list">Unstyled list</a></li>
                                <li><a href="#styled-list">Styled list</a></li>
                                <li><a href="#text-elements">Inline text elements</a></li>
                                <li><a href="#blockquote">Blockquote</a></li>
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

export default Typography;