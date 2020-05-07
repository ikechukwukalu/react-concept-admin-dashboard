import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Sortable extends Component {
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
                        <h2 className="pageheader-title">Sortable Nestable Lists</h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Sortable Nestable Lists</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-short-list">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
                        <section className="card card-fluid">
                            <h5 className="card-header drag-handle"> Shortable List </h5>
                            <ul className="sortable-lists list-group list-group-flush list-group-bordered" id="items">
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item one </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item two </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div>Item three</div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item four </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item five </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
                        <section className="card card-fluid">
                            <h5 className="card-header drag-handle">Shortable List </h5>
                            <ul className="sortable-lists list-group list-group-flush list-group-bordered" id="item-2">
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item one </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item two </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item three </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div>Item four </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center drag-handle">
                                    <span className="drag-indicator"></span>
                                    <div> Item five </div>
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                        <button className="btn btn-sm btn-outline-light">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
                        <section className="card card-fluid">
                            <h5 className="card-header drag-handle"> Nestable List </h5>
                            <div className="dd" id="nestable">
                                <ol className="dd-list">
                                    <li className="dd-item" data-id="13">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item one</div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dd-item" data-id="2">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item two</div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <ol className="dd-list">
                                            <li className="dd-item" data-id="3">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item three</div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dd-item" data-id="4">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item four </div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dd-item" data-id="5">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item five </div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <ol className="dd-list">
                                                    <li className="dd-item" data-id="6">
                                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                                            <div> Item six </div>
                                                            <div className="dd-nodrag btn-group ml-auto">
                                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                                <button className="btn btn-sm btn-outline-light">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dd-item" data-id="7">
                                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                                            <div> Item seven </div>
                                                            <div className="dd-nodrag btn-group ml-auto">
                                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                                <button className="btn btn-sm btn-outline-light">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dd-item" data-id="8">
                                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                                            <div> Item eight </div>
                                                            <div className="dd-nodrag btn-group ml-auto">
                                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                                <button className="btn btn-sm btn-outline-light">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="dd-item" data-id="9">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item nine</div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dd-item" data-id="10">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item ten </div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="dd-item" data-id="11">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item eleven </div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dd-item" data-id="12">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item twelve </div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </section>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
                        <section className="card card-fluid">
                            <h5 className="card-header drag-handle">Nestable List </h5>
                            <div className="dd" id="nestable2">
                                <ol className="dd-list">
                                    <li className="dd-item" data-id="13">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item one </div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dd-item" data-id="14">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item two </div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dd-item" data-id="15">
                                        <div className="dd-handle"> <span className="drag-indicator"></span>
                                            <div> Item three </div>
                                            <div className="dd-nodrag btn-group ml-auto">
                                                <button className="btn btn-sm btn-outline-light">Edit</button>
                                                <button className="btn btn-sm btn-outline-light">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <ol className="dd-list">
                                            <li className="dd-item" data-id="16">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item four </div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dd-item" data-id="17">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item five </div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dd-item" data-id="18">
                                                <div className="dd-handle"> <span className="drag-indicator"></span>
                                                    <div> Item six </div>
                                                    <div className="dd-nodrag btn-group ml-auto">
                                                        <button className="btn btn-sm btn-outline-light">Edit</button>
                                                        <button className="btn btn-sm btn-outline-light">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default Sortable;