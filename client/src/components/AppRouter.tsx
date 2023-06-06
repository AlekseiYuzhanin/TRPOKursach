import { Routes, Route, redirect } from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router'

const AppRouter = () => {
    const auth = false;
    return (
        auth ?
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