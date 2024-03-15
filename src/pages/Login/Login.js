import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import users from '../../Services/loginDetails.js';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Store/AuthSlice.js';

function Login() {

  // useSelector hook to access the state
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  const context = useContext(AppSettings);
  // const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
    console.log(isAuthenticated)
    const user = localStorage.getItem('isAuthenticated')
    console.log(user, 'user')
    if (isAuthenticated || user){
      navigate('/dashboard')
    }
  },[dispatch])

  useEffect(() => {
    context.handleSetAppSidebarNone(true);
    context.handleSetAppHeaderNone(true);
    context.handleSetAppContentClass('p-0');

    return () => {
      context.handleSetAppSidebarNone(false);
      context.handleSetAppHeaderNone(false);
      context.handleSetAppContentClass('');
    };
  }, [context]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // check the credentials from form and user entered credentials
    const matchedUser = users.find(user => user.email === formData.email && user.password === formData.password);

    console.log(matchedUser)

    if (matchedUser) {
      dispatch(login({ isAuthenticated: true, user: matchedUser  }));
      localStorage.setItem('isAuthenticated' , true)
      localStorage.setItem('user' , JSON.stringify(matchedUser))
      navigate('/dashboard')
    } else {
      alert('Invalid email or password');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  // if (redirect) {
  //   return <Navigate to='/dashboard' />;
  // }

  return (
    <>
    {
      !isAuthenticated && 

    <div className="login login-with-news-feed">
      <div className="news-feed">
        <div className="news-image" style={{backgroundImage: 'url(/assets/img/login-bg/login-bg-11.jpg)'}}></div>
        <div className="news-caption">
          <h4 className="caption-title"><b>Corp</b> Ed App</h4>
          <p>
            Download the Corp Ed app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="login-container">
        <div className="login-header mb-30px">
          <div className="brand">
            <div className="d-flex align-items-center">
              <span className="logo"></span>
              <b>Color</b> Admin
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-sign-in-alt"></i>
          </div>
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit} className="fs-13px">
            <div className="form-floating mb-15px">
              <input type="text" className="form-control h-45px fs-13px" placeholder="Email Address" id="email" value={formData.email} onChange={handleChange} />         
              <label htmlFor="email" className="d-flex align-items-center fs-13px text-gray-600">Email Address</label>
            </div>
            <div className="form-floating mb-15px">
              <input type="password" className="form-control h-45px fs-13px" placeholder="Password" id="password" value={formData.password} onChange={handleChange} />
              <label htmlFor="password" className="d-flex align-items-center fs-13px text-gray-600">Password</label>
            </div>
            <div className="mb-15px">
              <button type="submit" className="btn btn-theme d-block h-45px w-100 btn-lg fs-14px">Sign me in</button>
            </div>
            <div className="mb-40px pb-40px text-body">
              Not a member yet? Click <Link to="/user/register-v3" className="text-primary">here</Link> to register.
            </div>
            <hr className="bg-gray-600 opacity-2" />
            <div className="text-gray-600 text-center text-gray-500-darker mb-0">
              &copy; All Right Reserved 2023
            </div>
          </form>
        </div>
      </div>
    </div>
    
    }
    </>
  );
}

export default Login;
