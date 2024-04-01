import React, {FC, useEffect, useLayoutEffect, useRef} from "react";
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

declare global {
  interface Window {
    Ya: any;
    yaContextCb?: any;
  }
}

const HomePage: FC = () => {
	let role = localStorage.getItem('role')
	useEffect(() => {
    window.yaContextCb?.push(() => {
      window.Ya.Context.AdvManager.render({
        "blockId": "R-A-6659913-2",
        "renderTo": "yandex_rtb_R-A-6659913-2"
      });
    });
  }, []);
	return (
		<section className={styles.container}> 
			<div className={styles.greetingContainer}>
				<Header role={role}/>
				<Greeting/>
			</div>
			<div id="yandex_rtb_R-A-6659913-2"></div>
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