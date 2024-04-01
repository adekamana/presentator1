
import { lazy } from "react";
import {createBrowserRouter, Navigate} from 'react-router-dom'
import Layout from "../containers/Layout";
import { routeDetection, routeHandler } from "../utils/functions";
import { userRouter } from "./constants/userRouter";
import { viewerRouter } from "./constants/viewerRouter";

const Login = lazy(() => import('../pages/Auth/Login/Login'))
const Registration = lazy(() => import('../pages/Auth/Registration/Registration'))
const Confirm = lazy(() => import('../pages/Auth/Confirm/Confirm'))
const NotFound = lazy(() => import('../pages/404/404'))

export const router = createBrowserRouter([
	...userRouter,
	...viewerRouter,
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/registration',
		element: <Registration />
	},
	{
		path: '/confirmation',
		element: <Confirm />
	},
	{
		path: '*',
		element: <NotFound/>
	},
	{
    path: '/',
    element: <Navigate to={routeDetection()} />,
  }
])