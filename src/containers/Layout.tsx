import React, {createContext, FC, memo, useEffect, useState} from "react";
import Header from "../components/Header";
import { Navigate, Outlet } from 'react-router-dom';
import axios from "axios";


export const context = createContext({})
const Layout: FC = () => {
	// TODO check auth
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
        const response = await axios.get(
          `https://презентатор.рф/api/get_generates/?phone_number=${cleanedPhoneNumber}`
        );
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
