import { FC } from "react";
import styles from './Create.module.scss'
import { useNavigate } from "react-router-dom";

const Create: FC = () => {

	let role = localStorage.getItem('role')
	const navigate = useNavigate();
	const checkRole = () => {
		if (role) {
			return `/${role}/generation`
		} else {
			return '/viewer/generation'
		}
	}
	return (
		<section className={styles.container}>
			<div className={styles.content}>

				<div className={styles.title}>
					<span>Оптимизируйте свое время</span>
					<span>создайте презентацию</span>
				</div>
				<div className={styles.buttonPrimary}
					onClick={() => navigate(checkRole())}
				>
					{role == 'viewer' || !role  ? 'Попробовать бесплатно' : 'Начать генерацию'}
				</div>
			</div>
		</section>
	)
}

export default Create