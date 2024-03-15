import React from 'react';
import App from './../app.jsx';
import Home from './../pages/home/home.js';
import Dashboard from './../pages/Dashboard/Dashboard.js';
import Course from '../pages/Courses/Courses.js';
import MyTeamLearning from '../pages/TeamLearning/MyTeamLearning.js';
import Login from '../pages/Login/Login.js';
import OneCourse from '../pages/Courses/One-course.js';
import AuthDashboard from '../pages/AuthDashboard/AuthDashboard.js';
import { Route, Navigate } from 'react-router-dom'; // Updated import

const AppRoute = [
  {
    path: '/', 
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'dashboard',
        loader : dashboardLoader,
        element: <AuthDashboard/>,
        children: [
          {
            path: '',
            element: <Dashboard/>
          },
          {
            path: 'team-learning',
            element: <MyTeamLearning/>
          },
          {
            path: 'courses',
            element: <Course/>
          },
          {
            path: 'courses/:courseName', // Updated route with dynamic parameter
            element: <OneCourse/>
          },
          {
            path: 'home', 
            element: <Home />
          },
        ]
      },
    ]
  }
];

function dashboardLoader(){
  if(localStorage.getItem('isAuthenticated')){
    return true
  }
  else{
    return <Navigate to="/login" />; // Updated redirection
  }
}

export default AppRoute;
