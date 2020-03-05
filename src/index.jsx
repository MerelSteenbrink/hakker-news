// React //
import React from 'react';
import ReactDOM from 'react-dom';

// Router //
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createHistory as history } from 'history';

// Style //
import '../assets/stylesheets/application.scss';

// Components //
import App from './components/app';
import ItemShow from './components/item_show'

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route  path="/item" component={ItemShow} />
      </Switch>
    </Router>
    , root);
}
