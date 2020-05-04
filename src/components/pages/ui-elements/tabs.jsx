import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Tabs extends Component {
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
        <div className="container-fluid  dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Tabs</h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Tabs</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
         
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Basic Tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="tab-regular">
                            <ul className="nav nav-tabs " id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab Title #1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab Title #2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab Title #3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h3>Tab Content Heading</h3>
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <h3>Tab Heading Content </h3>
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Outline Tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="tab-outline">
                            <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab-outline-two" data-toggle="tab" href="#outline-two" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab-outline-three" data-toggle="tab" href="#outline-three" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent2">
                                <div className="tab-pane fade show active" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="outline-two" role="tabpanel" aria-labelledby="tab-outline-two">
                                    <h3>Heading Title of Outline Tabs</h3>
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                    <p>Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. </p>
                                </div>
                                <div className="tab-pane fade" id="outline-three" role="tabpanel" aria-labelledby="tab-outline-three">
                                    <h3>Heading Title of Outline Tabs</h3>
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                    <p>Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Vertical tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="tab-vertical">
                            <ul className="nav nav-tabs" id="myTab3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-vertical-tab" data-toggle="tab" href="#home-vertical" role="tab" aria-controls="home" aria-selected="true">Tab Vertical #1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-vertical-tab" data-toggle="tab" href="#profile-vertical" role="tab" aria-controls="profile" aria-selected="false">Tab Vertical #2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-vertical-tab" data-toggle="tab" href="#contact-vertical" role="tab" aria-controls="contact" aria-selected="false">Tab Vertical #3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent3">
                                <div className="tab-pane fade show active" id="home-vertical" role="tabpanel" aria-labelledby="home-vertical-tab">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="profile-vertical" role="tabpanel" aria-labelledby="profile-vertical-tab">
                                    <h3>Tab Heading Vertical Title</h3>
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                    <p> Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                                <div className="tab-pane fade" id="contact-vertical" role="tabpanel" aria-labelledby="contact-vertical-tab">
                                    <h3>Tab Heading Vertical Title</h3>
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                    <p> Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Outline Vertical tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="tab-vertical-outline">
                            <ul className="nav nav-tabs " id="myTab4" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-outline-verti-tab" data-toggle="tab" href="#home-outline-vertical" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-outline-verti-tab" data-toggle="tab" href="#profile-outline-vertical" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-outline-verti-tab" data-toggle="tab" href="#contact-outline-vertical" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent4">
                                <div className="tab-pane fade show active" id="home-outline-vertical" role="tabpanel" aria-labelledby="home-outline-verti-tab">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="profile-outline-vertical" role="tabpanel" aria-labelledby="profile-outline-verti-tab">
                                    <h3>Outline Vertical tabs</h3>
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                    <p>Pellentesque quis rutrum lacus. Aenean gravida massa dolor, mattis viverra quam luctus sed. Nunc nunc enim, aliquet sit amet consectetur sed, rutrum feugiat dolor. In convallis augue sed augue tincidunt, sit amet volutpat sapien cursus. Sed neque dolor, vehicula sit amet orci et, dapibus tincidunt mauris. </p>
                                </div>
                                <div className="tab-pane fade" id="contact-outline-vertical" role="tabpanel" aria-labelledby="contact-outline-verti-tab">
                                    <h3>Outline Vertical tabs</h3>
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                    <p>Aenean a malesuada libero, id consequat tellus. In in varius metus. Suspendisse cursus blandit ipsum, sit amet venenatis lacus finibus ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas bibendum turpis sit amet odio scelerisque, sit amet maximus metus hendrerit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Simple Card Tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="simple-card">
                            <ul className="nav nav-tabs" id="myTab5" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active border-left-0" id="home-tab-simple" data-toggle="tab" href="#home-simple" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-simple" data-toggle="tab" href="#profile-simple" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab-simple" data-toggle="tab" href="#contact-simple" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent5">
                                <div className="tab-pane fade show active" id="home-simple" role="tabpanel" aria-labelledby="home-tab-simple">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="profile-simple" role="tabpanel" aria-labelledby="profile-tab-simple">
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                </div>
                                <div className="tab-pane fade" id="contact-simple" role="tabpanel" aria-labelledby="contact-tab-simple">
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Simple Card Outline Tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="simple-outline-card">
                            <ul className="nav nav-tabs" id="myTab6" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active border-left-0" id="home-tab-simple-outline" data-toggle="tab" href="#home-simple-outline" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-simple-outline" data-toggle="tab" href="#profile-simple-outline" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab-simple-outline" data-toggle="tab" href="#contact-simple-outline" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent6">
                                <div className="tab-pane fade show active" id="home-simple-outline" role="tabpanel" aria-labelledby="home-tab-simple-outline">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="profile-simple-outline" role="tabpanel" aria-labelledby="profile-tab-simple-outline">
                                    <h3>Simple Card Outline Tabs</h3>
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                </div>
                                <div className="tab-pane fade" id="contact-simple-outline" role="tabpanel" aria-labelledby="contact-tab-simple-outline">
                                    <h3>Simple Card Outline Tabs</h3>
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Pills tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="pills-regular">
                            <ul className="nav nav-pills mb-1" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum. In hac habitasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante. Vestibulum dui tortor, consectetur quis sagittis vitae, dapibus ut magna. Cras ante dui, tincidunt et turpis vel, suscipit viverra eros. Ut auctor augue feugiat hendrerit feugiat.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Outline Pills tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="pills-outline">
                            <ul className="nav nav-pills mb-1" id="pills-tab1" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab-outline" data-toggle="pill" href="#pills-home-outline" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab-outline" data-toggle="pill" href="#pills-profile-outline" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab-outline" data-toggle="pill" href="#pills-contact-outline" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent1">
                                <div className="tab-pane fade show active" id="pills-home-outline" role="tabpanel" aria-labelledby="pills-home-tab-outline">
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum. In hac habitasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante. Vestibulum dui tortor, consectetur quis sagittis vitae, dapibus ut magna. Cras ante dui, tincidunt et turpis vel, suscipit viverra eros. Ut auctor augue feugiat hendrerit feugiat.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-profile-outline" role="tabpanel" aria-labelledby="pills-profile-tab-outline">
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                </div>
                                <div className="tab-pane fade" id="pills-contact-outline" role="tabpanel" aria-labelledby="pills-contact-tab-outline">
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Vertical Pills tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="pills-vertical">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Tab#1</a>
                                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tab#2</a>
                                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tab#3</a>
                                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tab#4</a>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                            <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                            <a href="#" className="btn btn-secondary">Go somewhere</a>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="section-block">
                            <h5 className="section-title">Justified Tabs</h5>
                            <p>Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface..</p>
                        </div>
                        <div className="tab-regular">
                            <ul className="nav nav-tabs nav-fill" id="myTab7" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab-justify" data-toggle="tab" href="#home-justify" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-justify" data-toggle="tab" href="#profile-justify" role="tab" aria-controls="profile" aria-selected="false">Tab#2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab-justify" data-toggle="tab" href="#contact-justify" role="tab" aria-controls="contact" aria-selected="false">Tab#3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent7">
                                <div className="tab-pane fade show active" id="home-justify" role="tabpanel" aria-labelledby="home-tab-justify">
                                    <p className="lead"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>Phasellus non ante gravida, ultricies neque a, fermentum leo. Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiasse platea dictumst. Pellentesque sed justo aliquet, posuere sem nec, elementum ante.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                <div className="tab-pane fade" id="profile-justify" role="tabpanel" aria-labelledby="profile-tab-justify">
                                    <p>Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas id molestie est, a commodo nisi. Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed purus in odio ullamcorper congue consectetur in neque. Aenean sem ex, tempor et auctor sed, congue id neque. </p>
                                </div>
                                <div className="tab-pane fade" id="contact-justify" role="tabpanel" aria-labelledby="contact-tab-justify">
                                    <p>Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus scelerisque risus, a commodo mi tempus eu.</p>
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

export default Tabs;