import React from "react";
import "./App.css";
import Dash from "./dash";
import App from "./App";



function Wrapper() {

    var curUrl = window.location.href;
    var isLoggedIn = curUrl.includes('id_token')

    const f = new URLSearchParams(window.location.hash.substr(1))
    var idToken = f.get('id_token')
    var myStorage = window.localStorage;
    myStorage.setItem("idToken",idToken)

    // console.log(idToken)
    //TODO check the ID Token is valid 

    if (isLoggedIn) {
        console.log("the user login in ")
        return <Dash />
    } else {
        console.log('not login yet')
        return <App />
    }
}

export default Wrapper;