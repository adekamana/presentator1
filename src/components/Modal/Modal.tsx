import React, {FC} from "react";
import ReactDom from 'react-dom';
import styles from './Modal.module.scss'

interface ModalProps {
	isModalVisible: boolean;
	setIsModalVisible: (isModalVisible: boolean) => void;
}

const Modal: FC<ModalProps> = ({isModalVisible, setIsModalVisible}) => {
	const screenWidth = window.screen.width;
	const rewardGeneration = () => {
		console.log('screenWidth', screenWidth)
		if (screenWidth >= 768) {
			 window.yaContextCb.push(() => {
				window.Ya.Context.AdvManager.render({
					"blockId": "R-A-6659913-3",
					"type": "rewarded",
					"platform": "desktop"
				});
			});
		} else {
			 window.yaContextCb.push(() => {
				window.Ya.Context.AdvManager.render({
					blockId: "R-A-6659913-4",
					type: "rewarded",
					platform: "touch"
				});
			});
		}
	}
	if (!isModalVisible) return null
	return ReactDom.createPortal(
		<div className={styles.overlay}>
			<div className={styles.container}>

				<div className={styles.close} onClick={() => setIsModalVisible(false)}>
					<img  src='../images/x.svg' alt='close' />
				</div>

				<div className={styles.content}>
						<span className={styles.title}>Скачиваний не осталось</span>
						<span className={styles.subtitle}>Вы можете их приобрести</span>
						<div className={styles.buttonPrimary}>
							Приобрести скачивания
						</div>
						<div className={styles.rewardGeneration} onClick={rewardGeneration}>
							Генерации за рекламу
						</div>
				</div>
			
			</div>
		</div>,
		document.getElementById('portal') as HTMLElement
	)
}

export default Modal