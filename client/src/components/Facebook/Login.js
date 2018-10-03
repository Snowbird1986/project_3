import React, { Component } from 'react';

export default class FacebookLogin extends Component {

    componentDidMount() {
        document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    componentWillUnmount() {
        document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    /**
     * Init FB object and check Facebook Login status
     */
    initializeFacebookLogin = () => {
        this.FB = window.FB;
        this.checkLoginStatus();
    }

    /**
     * Check login status
     */
    checkLoginStatus = () => {
        this.FB.getLoginStatus(this.facebookLoginHandler);
    }

    /**
     * Check login status and call login api is user is not logged in
     */
    facebookLogin = () => {
        if (!this.FB) return;

        this.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                this.facebookLoginHandler(response);
            } else {
                this.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
            }
        });
    }

    

    /**
     * Handle login response
    //  */
    // facebookLogout= response =>{
    //     this.FB.logout(function (response) {
    //         // user is now logged out
    //     });
    // }
    facebookLoginHandler = response => {
        if (response.status === 'connected') {
            var accessToken = response.authResponse.accessToken;
            console.log(accessToken);
            this.FB.api('/me?fields=email,birthday,gender,location,id,name,first_name,last_name,picture', userData => {
                console.log(userData)
                let result = {
                    ...response,
                    user: userData
                };

                console.log(result);
                this.props.onLogin(true, result);
            });
        } else {
            this.props.onLogin(false);
        }
    }

    render() {
        let { children } = this.props;
        return (
            <div onClick={this.facebookLogin}>
                {children}
            </div>
        );
    }
}

