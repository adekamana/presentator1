import {createContext, FC, memo, useEffect, useState} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import axios from "axios";
import UserRepository from "../api/repositories/userRepository";


export const context = createContext({})
const Layout: FC = () => {
	const isAuth = true
	const ProtectedRoute = ({children}: any) => {
		if(!isAuth) {
			return <Navigate to="/viewer/homepage" replace/>
		}

		return children
	}

	const [generates, setGenerates] = useState({
    free_generate: 0,
    current_generate: 0,
  });
	const [checkAddGenerates, setCheckAddGenerates] = useState({
		checkAddGenerates: false
	})

	useEffect(() => {
		const fetchData = async () => {
      const phoneNumber = window.localStorage.getItem("login");
      var cleanedPhoneNumber = "";
      if (phoneNumber) {
        cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      }

      try {
        const response = await UserRepository.getGenerates(cleanedPhoneNumber);
        setGenerates(response.data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    };

    fetchData();
	}, [])

	return (
		<>
			<main>
				<ProtectedRoute>
					<context.Provider value={{generates, setGenerates, checkAddGenerates}}>
						<Outlet/>
					</context.Provider>			
				</ProtectedRoute>
			</main>
		</>
	)
}


export default memo(Layout)
