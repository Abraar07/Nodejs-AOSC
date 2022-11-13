import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "283138669990-16k4v0jovboq4c5896hevc4qiqbd2j74.apps.googleusercontent.com";

function Google() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Google;





/* import { googleLogout } from '@react-oauth/google';
import React from 'react'
import { useEffect } from 'react';

const Google = () => {
    const google  =null;

    const handleCallBackResponse =(res) => {
        console.log("JWT ID Token : " + res.credential)
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "283138669990-5k99m2k4bv8j2hngk3j05ratviautpii.apps.googleusercontent.com",
            callback: handleCallBackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size : "large"}
        )
    }, [])

  return (
    <div id='signInDiv'></div>
  )
}

export default Google; */


