import { Routes, Route, redirect } from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router'

const AppRouter = () => {
    const auth = true;
    return (
        auth === true
            ?
            <Routes>
                {publicRoutes.map(route=> 
                   <Route path={route.path}
                          Component={route.component}/> 
                    )}
            </Routes>
            :
            <Routes>

            </Routes>
    );
};