import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'rsuite';
import {Link, useHistory} from 'react-router-dom';

import SignUpHeader from './headers/SignUpHeader';
import '../styles/signup.css';

function SignUp() {
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };
    // firstname, lastname, username, profile_img, email, password, gender, jobrole, location
    console.log(errors);
    return (
        <div>
            <header>
                <SignUpHeader />
            </header>
            <section className="auth-container">
                <div className="auth-title">
                    <h5>Welcome to Teamy</h5>
                    <p>Register an individual account</p>
                    <p>to join the team!</p>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                <div className="form-field">
                    <input name="firstname" placeholder="First Name" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.firstname && <span>{errors.firstname.message}</span>}
                </div>
                <div className="form-field">
                    <input name="lastname" placeholder="Last Name" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                </div>
                <div className="form-field">
                    <input name="username" placeholder="User Name" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
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
                <div className="form-field">
                <select name="gender" 
                    ref={
                        register({
                          required: 'This field is required' // JS only: <p>error message</p> TS only support string
                        })
                      }
                >
                    <option value="" selected disabled >Gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>                    
                {errors.gender && <span>{errors.gender.message}</span>}
                </div>
                <div className="form-field">
                    <select name="jobrole" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    >
                        <option value="" selected disabled >Job Role</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="dev Ops">Dev Ops</option>
                        <option value="info Secs">Info Secs</option>
                    </select>
                    {errors.jobrole && <span>{errors.jobrole.message}</span>}
                </div>
                <div className="form-field">
                    <input name="location" placeholder="San Franciso" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.location && <span>{errors.location.message}</span>}
                </div>
                <div className="auth-btn">

                <Button className="primary-btn" type="submit">SIGN UP</Button>
                    <p>
                        Already have an account? 
                        <Link to="/login" style={{color: '#4C506D', textDecoration: '', marginLeft: '0.5rem'}}>LOGIN</Link>

                    </p>
                </div>
            </form>
            </section>
        </div>
    )
}

export default SignUp;
