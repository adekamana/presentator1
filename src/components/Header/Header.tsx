import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss"
import Logo from "../Logo";
import content from "./Header.content.json";
import MobileModal from "../MobileModal";
import UserRepository from "../../api/repositories/userRepository";
import { context } from "../../containers/Layout";
interface HeaderProps {
	role?: string | null;
	isAuth?: boolean;
	generation?: boolean;
}
const Header: FC<HeaderProps> = ({ generation, role }: HeaderProps) => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const navigate = useNavigate();
	const contextValue: any = useContext(context);
	const { setGenerates, generates } = contextValue;
	const checkGenerates = () => {
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
	}


	return (
		<header className={styles.root}>
			<Logo />
			<div className={styles.menu}>
				<div className={styles.menuGroup}>
					{
						!generation && (
							<>
								<div className={styles.menuItem}><a href="https://t.me/presentatorai/2">{content.faq}</a></div>
								<div className={styles.menuItem}><a href="https://t.me/vlados_manager">{content.support}</a></div>
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

										<div className={styles.buttonAccountText} onClick={() => checkGenerates()}>
											<span>{content.account}</span>
										</div>

									</div>
								</div>
								<div className={styles.buttonAccountContainer}>

									<div className={styles.buttonAccount}>

										<div className={styles.buttonAccountText} onClick={() => checkGenerates()}>
											<span>{`Баланс: ${generates.free_generate} токенов`}</span>
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
						role === 'user' ? (
							<div className={styles.mobileButtonGroup}>
								<div className={styles.mobileButtonAccountContainer}>
									<div className={styles.mobileButtonAccount} onClick={() => navigate("/user/account")}>

										<div className={styles.mobileIconContainer}>

											<div className={styles.mobileIcon}>
												<img src="../images/user.svg" alt="user" />
											</div>

										</div>

										<div className={styles.mobileButtonAccountText} onClick={() => checkGenerates()}>
											<span>Кабинет</span>
										</div>

									</div>
								</div>

							</div>
						) : <></>
					}
					<img src="../images/menu.svg" alt="menu" onClick={() => setIsModalVisible(true)} />
				</div>
			) : null}
			<MobileModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
		</header>
	)
}

export default Header