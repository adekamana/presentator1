import { FC } from "react";
import styles from './NoAddModal.module.scss'
import ReactDom from "react-dom";

interface ModalProps {
	isModalVisible: boolean;
	setIsModalVisible: (isModalVisible: boolean) => void;
}

const NoAddModal: FC<ModalProps> = ({ isModalVisible, setIsModalVisible }) => {
	const handleClose = () => {
		setIsModalVisible(false);
	};
	if (!isModalVisible) return null;
	return ReactDom.createPortal(<div className={styles.overlay}>
		<div className={styles.rewardContainer}>
			<div className={styles.close} onClick={handleClose}>
				<img src="../images/x.svg" alt="close" />
			</div>
			<div className={styles.rewardContent}>
				<div className={styles.rewardSubtitle}>Генерации за рекламу будут доступны в следующем месяце</div>
				<div className={styles.rewardButtonPrimary} onClick={handleClose}>
					Продолжить
				</div>
			</div>
		</div>
	</div>,
		document.getElementById('portal') as HTMLElement)
}

export default NoAddModal