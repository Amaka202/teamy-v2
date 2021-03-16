import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { Button, Loader, Alert } from 'rsuite';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux'
import SignUpHeader from './headers/SignUpHeader';
import {createUser} from '../store/actions/authActions';
import {resetAuthState} from '../store/actions/resetStateAction';
import {saveToken} from './helpers/token';
import '../styles/signup.css';

function SignUp({createUser, signUpSuccessTime, signUpErrorTime, fetcheddata, resetAuthState}) {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = data => {
      createUser(data)
      setLoading(true)
    };

    useEffect(() => {
      if(signUpSuccessTime || signUpErrorTime){
        setLoading(false)
        if(fetcheddata.status === 'error'){
          Alert.error(fetcheddata.message, 5000)
          resetAuthState();
        }
        if(fetcheddata.status === 'success'){
          saveToken(fetcheddata.token)
          history.push('/posts')
        }
      }
    }, [signUpSuccessTime, signUpErrorTime])



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
                <div className="form-field">
                <select name="gender" 
                    ref={
                        register({
                          required: 'This field is required' // JS only: <p>error message</p> TS only support string
                        })
                      }
                >
                    <option value="gender" selected disabled >Gender</option>
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
                        <option value="jobrole" selected disabled >Job Role</option>
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
                    <input name="location" placeholder="Location" 
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
                {loading && <Loader speed="fast" center backdrop content="" />}
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


const mapStateToProps = (state) => {
  console.log(state);
  return {
      signUpSuccessTime: state.auth.signUpSuccessTime,
      signUpErrorTime: state.auth.signUpErrorTime,
      fetcheddata: state.auth.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      createUser: (userData) => dispatch(createUser(userData)),
      resetAuthState: () => dispatch(resetAuthState())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
