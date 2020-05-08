import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import Invoice from './invoice.jsx';
import Blank from './blank.jsx';
import BlankHeader from './blank-header.jsx';
import Pricing from './pricing.jsx';
import Timeline from './timeline.jsx';
import Calendar from './calendar.jsx';
import Sortable from './sortable.jsx';
import Widgets from './widgets.jsx';
import MediaObject from './media-object.jsx';
import CropperImage from './cropper-image.jsx';
import ColorPicker from './color-picker.jsx';

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      match: this.props.match
    }
  }
  
  render() {
    return (
        
      <Switch>
            <Route path={`${this.state.match.url}/invoice`} render={(props) => 
                <Invoice {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/blank-page`} render={(props) => 
                <Blank {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/blank-page-header`} render={(props) => 
                <BlankHeader {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/pricing`} render={(props) => 
                <Pricing {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/timeline`} render={(props) => 
                <Timeline {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/calendar`} render={(props) => 
                <Calendar {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/sortable-nestable-lists`} render={(props) => 
                <Sortable {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/widgets`} render={(props) => 
                <Widgets {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/media-object`} render={(props) => 
                <MediaObject {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/cropper-image`} render={(props) => 
                <CropperImage {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route path={`${this.state.match.url}/color-picker`} render={(props) => 
                <ColorPicker {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  
                />}
            />
        </Switch>
    );
  }
}

export default Pages;