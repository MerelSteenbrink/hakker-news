// React //
import React from 'react';
import ReactDOM from 'react-dom';

// Router //
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { createHistory as history } from 'history';

// Style //
import '../assets/stylesheets/application.scss';

// Components //
import App from './components/app';
import ItemList from './components/item_list';
import ItemShow from './components/item_show';
import Navbar from './components/navbar';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Router history={history}>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route  path="/item" component={ItemShow} />
        <Route path='/:tab' component={App} />
      </Switch>
    </Router>
    , root);
}
