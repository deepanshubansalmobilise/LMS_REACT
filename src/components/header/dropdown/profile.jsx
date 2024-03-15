import React from 'react';
import { useDispatch } from 'react-redux';
import {Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../../../Store/AuthSlice';




function DropdownProfile() {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	function handleLogOut(){

		dispatch(logout())
		localStorage.removeItem('user')
		localStorage.removeItem('isAuthenticated')
		navigate('/login')
	}
	return (
		<div className="navbar-item navbar-user dropdown">
			<a href="#/" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
				<div className="image image-icon bg-gray-800 text-gray-600">
					<i className="fa fa-user"></i>
				</div>
				<span>
					<span className="d-none d-md-inline">Adam Schwartz</span>
					<b className="caret"></b>
				</span>
			</a>
			<div className="dropdown-menu dropdown-menu-end me-1">
				<a href="#/" className="dropdown-item">Edit Profile</a>
				<a href="#/" className="dropdown-item d-flex align-items-center">
					Inbox
					<span className="badge bg-danger rounded-pill ms-auto pb-4px">2</span> 
				</a>
				<a href="#/" className="dropdown-item">Calendar</a>
				<a href="#/" className="dropdown-item">Settings</a>
				<div className="dropdown-divider"></div>
				<a onClick={handleLogOut} className="dropdown-item">Log Out</a>
			</div>
		</div>
	);
};

export default DropdownProfile;
