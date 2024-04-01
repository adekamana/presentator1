import React, {FC} from "react";
import styles from './Modal.module.scss'
const Modal: FC = () => {
	return(
		<div className={styles.overlay}>
			<div className={styles.container}>

				<div className={styles.close}>
					<img  src='../images/x.svg' alt='close'/>
				</div>

				<div className={styles.content}>
						<span className={styles.title}>Скачиваний не осталось</span>
						<span className={styles.subtitle}>Вы можете их приобрести</span>
						<div className={styles.buttonPrimary}>
							Приобрести скачивания
						</div>
				</div>
			
			</div>
		</div>
	)
}

export default Modal