import { FC, useRef } from "react";
import './Info.scss'
import {infoContent, mobileImages} from "./utils";

interface InfoProps {}
const Info: FC<InfoProps> = () => {
	return (
		<>
			<section id='info' className= 'infoContainer'>
			{
				infoContent.map((item) => {
					return (
						<div className={item.className} key={item.image}>
						<img src={item.image} />
						<div className='descriptionContainer'>
							<div className='description'>
								{item.description}
							</div>
						</div>
					</div>
					)
				})
			}
		
		</section>
		{/* Разметка для мобильной версии */}
		<section className= 'infoContainerMobile'>
			{infoContent.map((item, index) => {
				return (
					<div className="descriptionBlock" key={index}>
						<div className='descriptionContainer'>
							<div className='description'>
								{item.description}
							</div>
						</div>
						<img className={item.divider} src='../images/divider.svg'/>
					</div>						
				
				)
			})}
			<div className="imagesBlock">
				{
					mobileImages.map((item) => {
						return (
							
							<img className='image' src={item.image} key={item.image}/>
						)
					})
				}
			</div>

		</section>
		</>

	)
}

export default Info

