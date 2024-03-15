import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import { login } from "../../Store/AuthSlice";

function AuthDashboard(){

    const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      dispatch(login({ isAuthenticated: true, user  }));
    }

  }, [dispatch]);

    return(
        <>
        <Outlet/>
        </>
    )
}
export default AuthDashboard