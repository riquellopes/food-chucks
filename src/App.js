import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import {login, logout, isLoggedIn} from './utils/AuthService';

class App extends Component {
  render() {
    return (
      <div>
          <nav className="nav has-shadow">
            <div className="nav-left">
                <IndexLink className="nav-item">Chuck Norris World</IndexLink>
                <Link className="nav-item" to="/">Food Jokes</Link>
                {
                    ( isLoggedIn() ) ? <Link className="nav-item" to="/special">Celebrity Jokes</Link> : null
                }
            </div>

            <span className="nav-item">
                {
                    (!isLoggedIn() ) ? (
                        <a className="button is-info" onClick={() => login() }>
                            <span>Log In</span>
                        </a>
                    ) : (
                        <a className="button is-danger" onClick={() => logout() }>
                            <span>Log Out</span>
                        </a>
                    )
                }
            </span>
          </nav>

          <section className="section">
              <div className="container">
                  {this.props.children}
              </div>
          </section>
      </div>
    );
  }
}

export default App;
