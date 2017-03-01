import decode from 'jwt-decode';
import { browserHistory } from "react-router";
import Auth0Lock from "auth0-lock";
import {DOMAIN, CLIENT_ID} from './env';

// Token Name
const ID_TOKEN_KEY = "id_token";


const lock = new Auth0Lock(CLIENT_ID, DOMAIN, {
    auth : {
        redirectUrl: `${window.location.origin}`,
        responseType: 'token'
    }
});

const setIdToken = ((idToken) => {
    return localStorage.setItem(ID_TOKEN_KEY, idToken);
});

const getIdToken = () => {
    return localStorage.getItem(ID_TOKEN_KEY);
}

lock.on("authenticated", authResult => {
    setIdToken(authResult.idToken);
    browserHistory.push('/special');
});

const login = ((options) => {
    lock.show(options);

    return {
        hide() {
            lock.hide();
        }
    }
});

const clearToken = () => {
    localStorage.removeItem(ID_TOKEN_KEY);
}

const logout = () => {
    clearToken();
    browserHistory.replace("/");
}

const getTokenExpirationDate = ((encodedToken) => {
    const token = decode(encodedToken);
    if(!token.exp) { return null ;}

    const date = new Date(0);
          date.setUTCSeconds(token.exp);

    return date;
});

const isTokenExpired = ((token) => {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
});

const isLoggedIn = () => {
    const idToken = getIdToken();
    return !! idToken && !isTokenExpired(idToken);
}

const requireAuth = ((nextState, replace) => {
    if(!isLoggedIn()){
        replace({pathname: "/"});
    }
});



export {login, logout, requireAuth, isLoggedIn};
