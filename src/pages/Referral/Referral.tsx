import { FC, useEffect, useState } from "react";
import styles from "./Referral.module.scss";
import Header from "../../components/Header";
import Tooltip from "../../components/Tooltip";

const Referral: FC = () => {
	const role = localStorage.getItem("role");
	const [showCodeTooltip, setShowCodeTooltip] = useState(false);
	const [showLinkTooltip, setShowLinkTooltip] = useState(false);
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
	return (
		<main>

			<div className={styles.container}>
				<div className={styles.opacityBox}>
					<div className={styles.contentBox}>
						<Header role={role} />
						<div className={styles.content}>
							<div className={styles.referral}>
								<div className={styles.form}>
									<div className={styles.title}>Реферальная программа</div>
									<div className={styles.infoBox}>
										<span className={styles.label}>Мои рефералы</span>
										<div className={styles.info}>
											<span className={styles.label}>8 токенов</span>
										</div>
									</div>
									<div className={styles.infoBox}>
										<span className={styles.label}>Реферальная ссылка</span>
										<div className={styles.info}>
											{/* 
												внутрь copyText() ссылка на рефералку, сделал так, чтобы спрятать ссылку в кнопке
											*/}
											<button id='link' type='button' onClick={() => copyLink('https://www.google.com')} className={styles.buttonLink}>Cсылка</button>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Referral