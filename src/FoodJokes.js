import React, {Component} from "react";
import {Link} from 'react-router';
import {get_food_data} from "./utils/chuck-api";
import {isLoggedIn} from './utils/AuthService';


class FoodJokes extends Component {

    constructor () {
        super();
        this.state = { jokes: []};
    }

    get_food_jokes () {
        const jokes = get_food_data(isLoggedIn);
              this.setState({jokes});
    }

    componentWillMount() {
        this.get_food_jokes();
    }

    render(){
        const {jokes} = this.state;

        return (
            <div>
                <h3 className="title is-3 has-text-centered">Chuck Norris Food Jokes</h3>
                <hr />

                <div className="columns is-multiline">
                    { jokes.map((joke, index) => (
                        <div className="column is-6" key={index}>
                            <article className="message is-info">
                                <div className="message-header">#{ joke.id}</div>

                                <div className="message-body">
                                    <p>{joke.joke}</p>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="notification">
                    <h2 className="title is-2 has-text-centered">Get Access to Celebrity Jokes By Logging In</h2>
                </div>

                { isLoggedIn() ? (
                    <div className="notification">
                        <div className="has-text-centered">
                            <h2 className="title is-2">View Celebrity Jokes</h2>
                            <Link to="/special" className="button is-success">Celebrity Jokes</Link>
                        </div>
                    </div> ) : null }
            </div>
        )
    }
}

export default FoodJokes;
