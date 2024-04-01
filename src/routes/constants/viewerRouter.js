import { lazy } from "react";

const Layout = lazy(() => import('../../containers/Layout'))

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const Generation = lazy(() => import('../../pages/Generation/Generation'))
const Presentation = lazy(() => import('../../pages/Presentation/Presentation'))

export const viewerRouter = [
	{
		path: 'viewer',
		element: <Layout/>,
		children: [
			{
				path: 'homepage',
				element: <HomePage/>
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