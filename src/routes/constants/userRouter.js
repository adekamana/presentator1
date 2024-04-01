import { lazy } from "react";

const Layout = lazy(() => import('../../containers/Layout'))

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const Account = lazy(() => import('../../pages/Account/Account'))
const Generation = lazy(() => import('../../pages/Generation/Generation'))
const NotFound = lazy(() => import('../../pages/404/404'))
const Presentation = lazy(() => import('../../pages/Presentation/Presentation'))

export const userRouter = [
	{
		path: 'user',
		element: <Layout/>,
		errorElement: <NotFound/>,
		children: [
			{
				path: 'homepage',
				element: <HomePage/>
			}, 
			{
				path: 'account',
				element: <Account/>
			},
			{
				path: 'generation',
				element: <Generation/>
			},
			{
				path: 'presentation',
				element: <Presentation/>
			}
		]
	}
]