import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Accordions extends Component {
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
                        <h2 className="pageheader-title">Accordions </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Accordions</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
         
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="section-block">
                            <h5 className="section-title">Regular Accordions</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="accrodion-regular">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           Accordion Heading Title Here
                                           </button>
                                          </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="lead"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                            <p> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                            <a href="#" className="btn btn-secondary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Heading Title Here
                                         </button>       </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                             Accordion Heading Title Here
                                         </button>
                                                   </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tabhetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="section-block">
                            <h5 className="section-title">Outline Accordions</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="accrodion-outline">
                            <div id="accordion2">
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                           Accordion Heading Title Here
                                           </button>
                                          </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordion2">
                                        <div className="card-body">
                                            <p className="lead"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                            <p> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                            <a href="#" className="btn btn-secondary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Accordion Heading Title Here
                                         </button>       </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion2">
                                        <div className="card-body">
                                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingSix">
                                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                             Accordion Heading Title Here
                                         </button>
                                                   </h5>
                                    </div>
                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion2">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tabhetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="section-block">
                            <h5 className="section-title">Accordions with Icon</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="accrodion-regular">
                            <div id="accordion3">
                                <div className="card">
                                    <div className="card-header" id="headingSeven">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                             <span className="fas fa-angle-down mr-3"></span>Accordion Heading Title Here
                                           </button>
                                          </h5>
                                    </div>
                                    <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven" data-parent="#accordion3">
                                        <div className="card-body">
                                            <p className="lead"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                            <p> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                            <a href="#" className="btn btn-secondary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-2">
                                    <div className="card-header" id="headingEight">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                             <span className="fas fa-angle-down mr-3"></span>Accordion Heading Title Here
                                         </button>       </h5>
                                    </div>
                                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion3">
                                        <div className="card-body">
                                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-2">
                                    <div className="card-header" id="headingNine">
                                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                              <span className="fas fa-angle-down mr-3"></span>Accordion Heading Title Here
                                         </button>
                                                   </h5>
                                    </div>
                                    <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion3">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tabhetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="section-block">
                            <h5 className="section-title">Accordions with Color</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="accrodion-regular">
                            <div id="accordion4">
                                <div className="card bg-primary">
                                    <div className="card-header" id="headingTen">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                             <span className="fas fa-angle-down mr-3"></span>Accordion Heading Title Here
                                           </button>
                                          </h5>
                                    </div>
                                    <div id="collapseTen" className="collapse show" aria-labelledby="headingTen" data-parent="#accordion4">
                                        <div className="card-body">
                                            <p className="lead text-white"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                            <p> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                            <a href="#" className="btn btn-secondary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-brand ">
                                    <div className="card-header" id="headingEleven">
                                        <h5 className="mb-0">
                                           <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                             <span className="fas fa-angle-down mr-3"></span>Accordion Heading Title Here
                                         </button>       </h5>
                                    </div>
                                    <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordion4">
                                        <div className="card-body">
                                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-secondary">
                                    <div className="card-header" id="headingTwelve">
                                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                              <span className="fas fa-angle-down mr-3"></span>Accordion Heading Title Here
                                         </button>
                                                   </h5>
                                    </div>
                                    <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordion4">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tabhetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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

export default Accordions;