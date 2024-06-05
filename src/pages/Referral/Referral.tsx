import { FC, useContext, useEffect, useState } from "react";
import styles from "./Referral.module.scss";
import Header from "../../components/Header";
import Tooltip from "../../components/Tooltip";
import UserRepository from "../../api/repositories/userRepository";
import RewardModal from "../../components/RewardModal";
import NoAddModal from "../../components/NoAddModal";
import { context } from "../../containers/Layout";
import ButtonComponent from "../../components/ui/Button/ButtonComponent";

const Referral: FC = () => {
	const role = localStorage.getItem("role");
	const contextValue: any = useContext(context);
	const { generates, setGenerates } = contextValue;
	const [showCodeTooltip, setShowCodeTooltip] = useState(false);
	const [showLinkTooltip, setShowLinkTooltip] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isNoAddModalVisible, setIsNoAddModalVisible] = useState(false);
	const screenWidth = window.screen.width;
	const copyCode = () => {
		const code = document.querySelector("#code") as HTMLElement | null;
		const copyCode = code?.innerText

		if (copyCode) {
			navigator.clipboard.writeText(copyCode).then(function () {
				setShowCodeTooltip(true);
				console.log('Текст скопирован');
			}, function (err) {
				console.error('Ошибка: ', err);
			});
		}
	}

	const copyLink = (link: string) => {
		const linkElement = document.querySelector("#link") as HTMLElement | null;
		const linkText = linkElement?.innerText
		if (linkText) {
			navigator.clipboard.writeText(link).then(function () {
				setShowLinkTooltip(true);
				console.log('Текст скопирован');
			}, function (err) {
				console.error('Ошибка: ', err);
			});
		}
	}

	const rewardGeneration = () => {
		if (screenWidth >= 768) {
			window.yaContextCb.push(() => {
				window.Ya.Context.AdvManager.render({
					blockId: "R-A-6659913-3",
					type: "rewarded",
					platform: "desktop",
				});
			});
		} else {
			window.yaContextCb.push(() => {
				window.Ya.Context.AdvManager.render({
					blockId: "R-A-6659913-4",
					type: "rewarded",
					platform: "touch",
				});
			});
		}
		setTimeout(async () => {
			setIsModalVisible(true);
			const phoneNumber = window.localStorage.getItem("login");
			var cleanedPhoneNumber = "";
			if (phoneNumber) {
				cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
			}
			try {
				const response = await UserRepository.updateFreeGenerates(
					cleanedPhoneNumber
				);
				setGenerates(response.data);
			} catch (error) {
				console.error("Ошибка при отправке запроса:", error);
			}
		}, 3000);
	};

	const handleCheckAddsGenerates = async () => {
		const phoneNumber = window.localStorage.getItem("login");
		var cleanedPhoneNumber = "";
		if (phoneNumber) {
			cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
		}
		try {
			const response = await UserRepository.checkAddsGenerates(cleanedPhoneNumber);
			if (response.data) {
				rewardGeneration()
			} else {
				setIsNoAddModalVisible(true)
			}
		} catch (error) {
			console.error("Ошибка при выполнении запроса:", error);
		}
	};
	return (
		<main>

			<div className={styles.container}>
				<div className={styles.opacityBox}>
					<div className={styles.contentBox}>
						<Header role={role} />
						<div className={styles.content}>
							<div className={styles.referral}>
								<div className={styles.form}>
									<div className={styles.title}>Получить бесплатные генерации</div>

									<div className={styles.infoBox}>

										<div className={styles.info}>
											<div className={styles.infoTitle}>
												<img src="../images/infoIcon.png" alt="info" />
												<span className={styles.label}>Инструкция</span>
											</div>
											<ol>
												<li>Нажмите на кнопку “Cкопировать ссылку” </li>
												<li>Отправьте ее другу </li>
												<li>Получайте <b>генерации</b> бесплатные за каждого зарегистрированного пользователя по вашей ссылке </li>
											</ol>
										</div>
									</div>

									<div className={styles.infoBox}>
										<span className={styles.label}>Мои рефералы</span>
										<div className={styles.info}>
											<span className={styles.label}>8 генераций</span>
										</div>
									</div>

									<div className={styles.infoBox}>
										<span className={styles.label}>Реферальная ссылка</span>
										<div className={styles.info}>
											<button id='link' type='button' onClick={() => copyLink('https://www.google.com')} className={styles.buttonLink}>Скопировать ссылку</button>
											<Tooltip text="Ссылка скопирована" showTooltip={showLinkTooltip} setShowTooltip={setShowLinkTooltip} />
										</div>
									</div>
									<div className={styles.infoBox}>
										<span className={styles.label}>Реферальный код</span>
										<div className={styles.info}>

											<div className={styles.code}>
												<span id='code' onClick={copyCode}>5264725956</span>
											</div>
											<Tooltip text="Код скопирован" showTooltip={showCodeTooltip} setShowTooltip={setShowCodeTooltip} />
										</div>
									</div>

									<ButtonComponent
										text="Получить бесплатные генерации"
										onClick={() => { handleCheckAddsGenerates() }}
									/>

									<div className={styles.hint}>
										<img src="../images/infoIcon.png" alt="info" />
										<span >Вам доступно 3 генерации в месяц за просмотр рекламы. </span>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<RewardModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>

			<NoAddModal
				isModalVisible={isNoAddModalVisible}
				setIsModalVisible={setIsNoAddModalVisible}
			/>
		</main>
	)
}

export default Referral