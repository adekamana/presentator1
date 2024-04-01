import {FC} from "react";
import styles from './Examples.module.scss'
import { exampleImages } from "./utils";
const Examples: FC = () => {
	return (
		<section className={styles.container}>
			<span className={styles.title}>Примеры работ</span>
			<div className={styles.imagesContainer}>
				<div className={styles.images}>
					{
						exampleImages.map((image, index) => {
							return (
								<img className={styles.image} src={image.url} alt='example' key={index}/>
							)
						})
					}
				</div>
			</div>
			
		</section>
	)
}

export default Examples