import React, {FC, useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss"
import Logo from "../Logo";
import content from "./Header.content.json";
import MobileModal from "../MobileModal";
interface HeaderProps {
	role?: string | null;
	isAuth?: boolean;
	generation?: boolean;
}
const Header: FC<HeaderProps> = ({generation, role}: HeaderProps) => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const navigate = useNavigate();
	
	return (
		<header className={styles.root}>
			<Logo/>
			<div className={styles.menu}>
				<div className={styles.menuGroup}>
					{
						!generation && (
							<>
								<div className={styles.menuItem}><a href="https://t.me/presentatorai/2">{content.faq}</a></div>
								<div className={styles.menuItem}><a href="mailto:ai.presentator@gmail.com">{content.support}</a></div>
							</>
						)
					}
				
				</div>
				{
					role === 'user'
					? (
			
							<div className={styles.buttonGroup}>
								<div className={styles.buttonAccountContainer}>
									<div className={styles.buttonAccount} onClick={() => navigate("/user/account")}>

										<div className={styles.iconContainer}>

											<div className={styles.icon}>
												<img src="../images/user.svg" alt="user" />
											</div>

										</div>

										<div className={styles.buttonAccountText}>
											<span>{content.account}</span>
										</div>

									</div>
								</div>
						
							</div>
					)		
					:
					( 
						
						<div className={styles.buttonGroup}>
							<div className={styles.buttonPrimary} onClick={() => navigate("/login")}>{content.login}</div>
							<div className={styles.buttonDefaultBorder}>
								<div className={styles.buttonDefault} onClick={() => navigate("/registration")}>
									{content.register}
								</div>
							</div>
						</div>
					)
				}
		
			</div>
			

			{!isModalVisible ? (
		
				<div className={styles.mobileMenu} >
					{
						role === 'user'  ? (
								<div className={styles.mobileButtonGroup}>
								<div className={styles.mobileButtonAccountContainer}>
									<div className={styles.mobileButtonAccount} onClick={() => navigate("/user/account")}>

										<div className={styles.mobileIconContainer}>

											<div className={styles.mobileIcon}>
												<img src="../images/user.svg" alt="user" />
											</div>

										</div>

										<div className={styles.mobileButtonAccountText}>
											<span>Кабинет</span>
										</div>

									</div>
								</div>
						
							</div>
						) : <></> 
					}
					<img src="../images/menu.svg" alt="menu" onClick={() => setIsModalVisible(true)}/>
				</div>
			) : null}
			<MobileModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
		</header>
	)
}

export default Header