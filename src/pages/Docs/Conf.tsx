import React, {FC, useLayoutEffect, useRef} from "react";
import {Outlet} from "react-router-dom";
import styles from './HomePage.module.scss'
import Header from "../../components/Header";
import Greeting from "../../components/Greeting/Greeting";
import Guide from "../../components/Guide";
import Footer from "../../components/Footer";
import Examples from "../../components/Examples";
import Info from "../../components/Info";
import Slider from "../../components/Slider/Slider";
import Create from "../../components/Create";
const HomePage: FC = () => {
	let role = localStorage.getItem('role')
	return (
		<section className={styles.container}> 
			<div className={styles.greetingContainer}>
				<Header role={role}/>
				<Greeting/>
			</div>
			<Guide/>
			<Examples/>
			<Info/>
			<Slider />
			<Create/>
			<Footer/>
    </section>
	)
}

export default HomePage