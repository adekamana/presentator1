import {FC} from "react";
import { Outlet } from "react-router";

const Home: FC = () => {
	return (
		<>
			<Outlet/>
		</>
	)
}

export default Home;