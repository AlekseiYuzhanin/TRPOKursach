import React from "react";
import LoginPage from "../components/LoginPage";
import RegistrationPage from "../components/RegistrationPage";
import HomePage from "../components/HomePage";

export interface IRoute {
    path:string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouterNames{
    LOGIN = '/login',
    REGISTRATION = '/registration',
    HOME = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouterNames.LOGIN, exact:true,component:LoginPage},
    {path: RouterNames.REGISTRATION,exact:true,component:RegistrationPage},
    {path: RouterNames.HOME, exact:true, component:HomePage}
]

export const privateRoutes: IRoute[] = [

]