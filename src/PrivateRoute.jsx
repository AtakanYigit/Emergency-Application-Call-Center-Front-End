import React, {useContext} from "react";
import {Route, Redirect}   from "react-router-dom";
import {AuthContext}       from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    console.log(!!currentUser?.uid);
    return (
        <Route {...rest} render = {routeProps => !!currentUser?.uid
                                                    ? (<RouteComponent {...routeProps}/>) 
                                                    : (<Redirect to = {"/SignIn"}/>)}/>
    );
};

export default PrivateRoute;