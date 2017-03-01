import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";


import App from './App';
import FoodJokes from './FoodJokes';
import CelebrityJokes from './CelebrityJokes';
import { requireAuth } from './utils/AuthService';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FoodJokes}/>
            <Route path="special" component={CelebrityJokes} onEnter={requireAuth} />
        </Route>
    </Router>,
  document.getElementById('root')
);
