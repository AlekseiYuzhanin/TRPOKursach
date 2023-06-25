import React from "react";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";

export interface IRoute {
    path:string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouterNames{
    LOGIN = '/login',
    HOME = '/'
}

export const privateRoutes: IRoute[] = [
    {path: RouterNames.LOGIN, exact:true,component:LoginPage},
    {path: RouterNames.HOME, exact:true, component:HomePage}
]

export const publicRoutes: IRoute[] = [
    
]