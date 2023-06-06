import React from "react";
import LoginPage from "../components/LoginPage";
import RegistrationPage from "../components/RegistrationPage";

export interface IRoute {
    path:string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouterNames{
    LOGIN = '/login',
    REGISTRATION = '/registration',
}

export const publicRoutes: IRoute[] = [
    {path: RouterNames.LOGIN, exact:true,component:LoginPage},
    {path: RouterNames.REGISTRATION,exact:true,component:RegistrationPage}
]

export const privateRoutes: IRoute[] = [

]