
import { lazy } from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { routeDetection } from "../utils/functions";
import { userRouter } from "./constants/userRouter";
import { viewerRouter } from "./constants/viewerRouter";
import RestoreAccess from "../pages/Auth/RestoreAccess";

const Login = lazy(() => import('../pages/Auth/Login/Login'))
const Registration = lazy(() => import('../pages/Auth/Registration/Registration'))
const Confirm = lazy(() => import('../pages/Auth/Confirm/Confirm'))
const NotFound = lazy(() => import('../pages/404/404'))
const ConfirmPassword = lazy(() => import('../pages/Auth/ConfirmPassword/ConfirmPassword'))

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
		path: '/confirmation-registration',
		element: <Confirm />
	},
	{
		path: '/confirmation-password',
		element: <ConfirmPassword />
	},
	{
		path: '/restore-access',
		element: <RestoreAccess />
	},
	{
		path: '*',
		element: <NotFound />
	},
	{
		path: '/',
		element: <Navigate to={routeDetection()} />,
	}
])