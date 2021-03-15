import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'rsuite';
import {Link} from 'react-router-dom';

import SignInHeader from './headers/SignInHeader';
import '../styles/signup.css';

function Login() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };
    console.log(errors);
    return (
        <div>
            <header>
                <SignInHeader />
            </header>
            <section className="auth-container">
                <div className="auth-title">
                    <h5>Welcome Back</h5>
                    <p>Sign In to see posts</p>
                    <p>made by teammates!</p>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                
                
                <div className="form-field">
                    
                    <input name="email" placeholder="Email" 
                        ref={
                            register({
                              required: 'This field is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                              }
                            })
                          }
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="form-field">
                    <input name="password" placeholder="Password" 
                        ref={
                            register({
                              required: 'This field is required',
                              minLength: {
                                value: 6,
                                message: 'password should be at least 6 characters' 
                              }
                            })
                          }
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="auth-btn">
                    <Button className="primary-btn" type="submit">LOGIN</Button>
                    <p>
                        New user? 
                        <Link to="/signup" style={{color: '#4C506D', textDecoration: '', marginLeft: '0.5rem'}}>Create an account</Link>
                    </p>
                </div>
            </form>
            </section>
        </div>
    )
}

export default Login;
