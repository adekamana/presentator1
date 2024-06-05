import React, { FC, useState } from "react";
import { useNavigate } from "react-router";
import styles from './Footer.module.scss'
import Logo from "../Logo";
import { icons, iconsMobile } from "./utils";
const Footer: FC = () => {
	const navigate = useNavigate();
	const role = window.localStorage.getItem('role')
	const [visibleProducts, setVisibleProducts] = useState(true)
	const [visibleContacts, setVisibleContacts] = useState(true)
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerInfo}>
					<div className={styles.footerLogo}>
						<Logo />
					</div>
					<div className={styles.footerInfoItem}>
						<span className={styles.footerInfoTitle}>Контакты</span>
						{/* <span className={styles.footerInfoLink}>+7 (982)836-76-76</span> */}
						<span className={styles.footerInfoLink}>ai.presentator@gmail.com</span>
					</div>
					<div className={styles.footerInfoItem}>
						<span className={styles.footerInfoTitle}>Продукт</span>
						{
							role && role === 'user' ? (
								<span className={styles.footerInfoLink} onClick={() => navigate('/user/generation')}>Сгенерировать презентацию</span>
							) : (
								<span className={styles.footerInfoLink} onClick={() => navigate('/viewer/generation')}>Сгенерировать презентацию</span>
							)
						}

						<span className={styles.footerInfoLink}>Купить генерации</span>
						{
							role && role === 'user' ? (
								<span className={styles.footerInfoLink} onClick={() => navigate('/user/account')}>Личный кабинет</span>
							) : (
								<span className={styles.footerInfoLink} onClick={() => navigate('/login')}>Вход</span>
							)
						}
					</div>
					<div className={styles.footerInfoItem}>
						<span className={styles.footerInfoLink}>Мы в соцсетях</span>
						<div className={styles.socialWeb}>
							{
								icons.map((icon, index) => (
									<a href={icon.url} key={index}>
										<img className={styles.socialWebIcon} src={icon.src} alt='socialWebIcon' />
									</a>
								))
							}
						</div>

					</div>
				</div>

				{/* Разметка для мобильной версии */}

				<div className={styles.footerInfoMobile}>
					<div className={styles.footerInfoItem}>
						<div onClick={() => setVisibleProducts(!visibleProducts)}>
							<span className={styles.footerInfoTitle}>Продукт</span>
							<img className={styles.arrow} src={visibleProducts ? '../images/arrow_up.svg' : '../images/arrow_down.svg'} />
						</div>
						<div className={visibleProducts ? styles.dropdownVisible : styles.dropdownHidden}>
							{
								role && role === 'user' ? (
									<span className={styles.footerInfoLink} onClick={() => navigate('/user/generation')}>Сгенерировать презентацию</span>
								) : (
									<span className={styles.footerInfoLink} onClick={() => navigate('/viewer/generation')}>Сгенерировать презентацию</span>
								)
							}
							<span className={styles.footerInfoLink}>Купить генерации</span>
							{
								role && role === 'user' ? (
									<span className={styles.footerInfoLink} onClick={() => navigate('/user/account')}>Личный кабинет</span>
								) : (
									<span className={styles.footerInfoLink} onClick={() => navigate('/login')}>Вход</span>
								)
							}
						</div>
					</div>

					<div className={styles.footerInfoItem}>
						<div onClick={() => setVisibleContacts(!visibleContacts)}>
							<span className={styles.footerInfoTitle}>Контакты</span>
							<img className={styles.arrow} src={visibleContacts ? '../images/arrow_up.svg' : '../images/arrow_down.svg'} />
						</div>

						<div className={visibleContacts ? styles.dropdownVisible : styles.dropdownHidden}>
							{/* <span className={styles.footerInfoLink}>+7 (982)836-76-76</span> */}
							<span className={styles.footerInfoLink}>ai.presentator@gmail.com</span>

							<div className={styles.socialWeb}>
								{
									iconsMobile.map((icon, index) => (
										<a href={icon.url} key={index}>
											<img className={styles.socialWebIcon} src={icon.src} alt='socialWebIcon' />
										</a>

									))
								}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.footerImageContainer}>
					<img className={styles.footerImage} src='../images/footer.png' alt='FOOTER' />
				</div>

			</div>

		</footer>
	)
}

export default Footer