import {Route, Navigate} from "react-router-dom";

function ProtectedRoute({children}){
    if(true){
        return children;
    }
    else {
        return <Navigate to="/" replace/>;
    }
}

export default ProtectedRoute;