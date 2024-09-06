import React from 'react';
import './HomePage.css';
import './Login.css'
import { CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { Link } from 'react-router-dom'; 

const Login  = () => {
    return (
        <div>
        <div className="slider">
            <div className="slide_track">
            <div className="slide">
                <p>~ 10% Off Your First Order On Full Price Items ~</p>
            </div>
            </div>
        </div>
        <header>
            <p>Perito Moreno 2397, Godoy Cruz</p>
            <h3 className='title'>ULI _ TINO</h3>
            <div className='top_right_header'>
            <Link to='/login'><p>Login</p></Link>
            <CiSearch />
            <CiHeart /> 
            <CiBag1 />
            </div>
        </header>
        <div className="form">
        <div className="login_item">
        <h2>Sign in in your account</h2>
        <input type='email' min="1" max="10" placeholder='Correo electronico'></input>
        <input type='password' min="1" max="10" placeholder='Contraseña'></input>
        </div>
        <div className="login_item">
        <h2>Log in in a new account</h2>
        </div>
        </div>
        </div>)};

export default Login;