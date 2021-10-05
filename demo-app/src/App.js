import React from 'react';
import logo from './completeCodingLogo.jpeg';
import './App.css';

// const fuck = new URLSearchParams(window.location.hash.substr(1))
// fuck.get('id_token')
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to the Note</p>
                <a
                    className="App-link"
                    href = "https://cj-luo-midterm.auth.us-east-1.amazoncognito.com/login?client_id=38pssvqqhceonfr46fcrjur490&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://aws.cj-luo-midterm.link/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click Here to Login
                </a>
                
            </header>
        </div>
    );
}

export default App;
