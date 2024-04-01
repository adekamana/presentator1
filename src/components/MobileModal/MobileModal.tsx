import { FC } from "react";
import ReactDom from 'react-dom';
import styles from './MobileModal.module.scss'
import { useNavigate } from "react-router-dom";

interface MobileModalProps {
	isModalVisible: boolean;
	setIsModalVisible: any;
}

const MobileModal: FC<MobileModalProps> = ({isModalVisible, setIsModalVisible}) => {
	const role = window.localStorage.getItem('role')
	const navigate = useNavigate();
	if (!isModalVisible) return null

	return ReactDom.createPortal(
		<>
			<div className={styles.container}>
				{
					role && role === 'user' ? (
						<div className={styles.modal}>

							<div className={styles.close} >
								<img src="../images/x.svg" alt="close" onClick={() => setIsModalVisible(false)}/>
							</div>	

							<div className={styles.authContent}>
								<span className={styles.menuItem}>
									<a href="https://t.me/presentatorai/2">FAQ</a>
								</span>
								<span className={styles.menuItem}>Поддержка</span>
							</div>
						</div>
					) : (
						<div className={styles.authModal}>

							<div className={styles.close} >
								<img src="../images/x.svg" alt="close" onClick={() => setIsModalVisible(false)}/>
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