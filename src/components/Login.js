import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { Button, Alert, Loader } from 'rsuite';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../store/actions/authActions';
import {resetAuthState} from '../store/actions/resetStateAction';
import SignInHeader from './headers/SignInHeader';
import {saveToken} from './helpers/token';

import '../styles/signup.css';

function Login({loginSuccessTime, loginErrorTime, logindata, loginUser}) {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = data => {
        setLoading(true)
        loginUser(data)
        console.log(data);
    };
    useEffect(() => {
        if(loginSuccessTime || loginErrorTime){
          setLoading(false)
          if(logindata.status === 'error'){
            Alert.error(logindata.message, 5000)
            resetAuthState();
          }
          if(logindata.status === 'success'){
            saveToken(logindata.token)
            history.push('/posts')
          }
        }
      }, [loginSuccessTime, loginErrorTime])

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
                    <input name="password" placeholder="Password" type='password'
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
                    {loading && <Loader speed="fast" center backdrop content="" />}
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        loginSuccessTime: state.auth.loginSuccessTime,
        loginErrorTime: state.auth.loginErrorTime,
        logindata: state.auth.data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userData) => dispatch(loginUser(userData)),
        resetAuthState: () => dispatch(resetAuthState())
  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  