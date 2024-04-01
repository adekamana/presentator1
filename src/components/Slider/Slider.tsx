import {FC} from 'react'
import styles from './Slider.module.scss'
import { sliderContent } from './utils'

const Slider : FC = () => {
	return (
		<section  className={styles.container}>
		
			<div className={styles.scroll}>
			
				<div>
						{sliderContent.map((item, index) => {
							return(
								<img className={styles.sliderImage} src={item.url} alt='sliderImage' key={index}/>
							)
						})}
					</div>
					<div>
						{sliderContent.map((item, index) => {
							return(
								<img className={styles.sliderImage} src={item.url} alt='sliderImage' key={item.url}/>
							)
						})}
					</div>
			</div>

		</section>
	)
}

export default Slider