import {FC} from "react";
import styles from './404.module.scss'
import { useNavigate } from "react-router";

const NotFound: FC = () => {
	let role = localStorage.getItem('role')
	const checkRole = () => {
		if (role) {
			return `/${role}/homepage`
		} else {
			return '/viewer/homepage'
		}
	}

	const navigate = useNavigate()
	return (
		<main className={styles.container}>

			<div className={styles.textSection}>
				<div className={styles.titleSection}>
					<span className={styles.titleColor}>404</span>
					<span className={styles.title}>Страница не найдена</span>
				</div>

				<div className={styles.buttonContainer}>
					<button type='button'
					onClick={() => navigate(checkRole())}
					>Вернуться на главную</button>
				</div>
			</div>


			<div className={styles.imageSection}>
				<img src='../images/roll.png' alt='paint' />
			</div>

		</main>
	)
}

export default NotFound