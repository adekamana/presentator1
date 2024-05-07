import { FC, useContext } from "react";
import ReactDom from 'react-dom';
import styles from './MobileModal.module.scss'
import { useNavigate } from "react-router-dom";
import { context } from "../../containers/Layout";

interface MobileModalProps {
	isModalVisible: boolean;
	setIsModalVisible: any;
}

const MobileModal: FC<MobileModalProps> = ({ isModalVisible, setIsModalVisible }) => {
	const role = window.localStorage.getItem('role')
	const navigate = useNavigate();
	const contextValue: any = useContext(context);
	const { setGenerates, generates } = contextValue;
	if (!isModalVisible) return null

	return ReactDom.createPortal(
		<>
			<div className={styles.container}>
				{
					role && role === 'user' ? (
						<div className={styles.authModal}>

							<div className={styles.close} >
								<img src="../images/x.svg" alt="close" onClick={() => setIsModalVisible(false)} />
							</div>

							<div className={styles.content}>
								<span className={styles.menuItem}>
									<a href="https://t.me/presentatorai/2">FAQ</a>
								</span>
								<span className={styles.menuItem}>Поддержка</span>
								<span className={styles.menuItem}>Баланс: </span>
								<span className={styles.menuItem}>{`${generates.free_generate} токенов`}</span>
							</div>
						</div>
					) : (
						<div className={styles.authModal}>

							<div className={styles.close} >
								<img src="../images/x.svg" alt="close" onClick={() => setIsModalVisible(false)} />
							</div>

							<div className={styles.content}>
								<span className={styles.menuItem}>
									<a href="https://t.me/presentatorai/2">FAQ</a>
								</span>
								<span className={styles.menuItem}>Поддержка</span>
								<span className={styles.authItem} onClick={() => navigate('/login')}>Вход</span>
								<span className={styles.authItem} onClick={() => navigate('/registration')}>Регистрация</span>
							</div>
						</div>
					)
				}
			</div>
		</>,
		document.getElementById('portal') as HTMLElement
	)
}

export default MobileModal