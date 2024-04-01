import React, {FC, memo} from "react";
import Header from "../components/Header";
import { Navigate, Outlet } from 'react-router-dom';

const Layout: FC = () => {
	// TODO check auth
	const isAuth = true
	const ProtectedRoute = ({children}: any) => {
		if(!isAuth) {
			return <Navigate to="/viewer/homepage" replace/>
		}

		return children
	}

	return (
		<>
			<main>
				<ProtectedRoute>
					<Outlet/>
				</ProtectedRoute>
			</main>
		</>
	)
}


export default memo(Layout)
