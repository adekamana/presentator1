import {FC} from "react";
import styles from './Guide.module.scss'
import {staisticContent} from './utils'

const Guide: FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<span>Это проще, чем кажется</span>
			</div>
			
			<div className={styles.content}>
				<img className={styles.guideImage} src="../images/maingif.gif" alt="guide"/>
					<div className={styles.guideStatistics}>
					{
						staisticContent.map((item, index) => {
							return (
								<div className={styles.guideStatisticsItem} key={index}>
									<span className={styles.guideStatisticsValue}>{item.value}</span>
									<span className={styles.guideStatisticsLabel}>{item.label}</span>
								</div>
							)
						})
					}
				</div>
			</div>
			
		</section>
	)
}

export default Guide