import { Routes, Route, redirect } from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router'
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer);
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route 
                    path={route.path} 
                    Component={route.component} 
                    key={route.path}
                    />
                    )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route 
                    path={route.path} 
                    Component={route.component} 
                    key={route.path}
                    />
                    )}
            </Routes>
    );
};

export default AppRouter;