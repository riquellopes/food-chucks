import React, {Component} from "react";
import {Link} from 'react-router';
import {get_celebrity_data} from "./utils/chuck-api";
import {isLoggedIn} from './utils/AuthService';


class CelebrityJokes extends Component {

    constructor () {
        super();
        this.state = { celebrity: []};
    }

    get_celebrity_data (){
        const celebrity = get_celebrity_data(isLoggedIn);
              this.setState({celebrity});
    }

    componentWillMount() {
        this.get_celebrity_data();
    }

    render () {
        const {celebrity} = this.state;

        return (
            <div>
                <h3 className="title is-3 has-text-centered">Privileged Chuck Norris Celebrity Jokes</h3>
                <hr />

                <div className="columns is-multiline">
                    { celebrity.map((celebrity, index) => (
                        <div className="column is-6" key={index}>
                            <article className="message is-danger">
                                <div className="message-header">#{ celebrity.id}</div>

                                <div className="message-body">
                                    <p>{celebrity.joke}</p>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="notification">
                    <div className="has-text-centered">
                        <h2 className="title is-2">View Food Jokes</h2>
                        <Link to="/" className="button is-success">Chuck Norris Food Jokes </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CelebrityJokes;
