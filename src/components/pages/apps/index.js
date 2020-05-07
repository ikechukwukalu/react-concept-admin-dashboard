import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import Inbox from './inbox.jsx';
import EmailDetails from './email-details.jsx';
import EmailCompose from './email-compose.jsx';
import MessageChat from './message-chat.jsx';

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      basename: this.props.basename,
      match: this.props.match
    }
  }
  
  render() {
    return (
        
      <Switch>
            <Route path={`${this.state.match.url}/inbox`} render={(props) => 
                <Inbox {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}  
            />
            <Route path={`${this.state.match.url}/email-details`} render={(props) => 
                <EmailDetails {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/email-compose`} render={(props) => 
                <EmailCompose {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}  
            />
            <Route path={`${this.state.match.url}/message-chat`} render={(props) => 
                <MessageChat {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}  
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
        </Switch>
    );
  }
}

export default Apps;