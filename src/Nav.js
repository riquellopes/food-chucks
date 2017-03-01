import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {

    render () {
        return (
            <div>
                <nav className="nav has-shadow">
                  <div className="nav-left">
                      <IndexLink className="nav-item">Chuck Norris World</IndexLink>
                  </div>

                  <div className="nav-right nav-menu">
                      <Link className="nav-item" to="/">Food Jokes</Link>
                      <Link className="nav-item" to="/special">Celebrity Jokes</Link>
                  </div>

                  <span className="nav-item">
                      <a className="button">
                          <span>Log In</span>
                      </a>
                      <a className="button">
                          <span>Log Out</span>
                      </a>
                  </span>
                </nav>
            </div>
        )
    }
}

export default Nav;
