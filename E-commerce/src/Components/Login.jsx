import React, { useState } from 'react';
import './HomePage.css';
import './Login.css';
import Header from './Header'; 

const Login = () => {
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    return (
        <div>
            <div className="slider">
                <div className="slide_track">
                    <div className="slide">
                        <p>~ 10% Off Your First Order On Full Price Items ~</p>
                    </div>
                </div>
            </div>
            <Header />
            <div className="form-container">
                <div className="form">
                    {/* Sección de inicio de sesión */}
                    <div className="login_item">
                        <h2>Sign in to your account</h2>
                        <input type='email' placeholder='Email' className="input-field" />
                        <input 
                            type={showLoginPassword ? 'text' : 'password'} 
                            placeholder='Password' 
                            className="input-field" 
                        />
                        <div className="checkbox-container">
                            <input 
                                type="checkbox" 
                                id="showLoginPassword" 
                                checked={showLoginPassword}
                                onChange={() => setShowLoginPassword(!showLoginPassword)} 
                            />
                            <label htmlFor="showLoginPassword">Show password</label>
                        </div>
                        <button className="btn-login">Login</button>
                    </div>

                    <div className="login_item">
                        <h2>Create a new account</h2>
                        <input type='text' placeholder='Name' className="input-field" />
                        <input type='text' placeholder='LastName' className="input-field" />
                        <input type='email' placeholder='Email' className="input-field" />
                        <input 
                            type={showSignupPassword ? 'text' : 'password'} 
                            placeholder='Password' 
                            className="input-field" 
                        />
                        <div className="checkbox-container">
                            <input 
                                type="checkbox" 
                                id="showSignupPassword" 
                                checked={showSignupPassword}
                                onChange={() => setShowSignupPassword(!showSignupPassword)} 
                            />
                            <label htmlFor="showSignupPassword">Show password</label>
                        </div>
                        <button className="btn-signup">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
