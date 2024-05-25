import React, { useEffect } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
	showTooltip: boolean;
	setShowTooltip: (showTooltip: boolean) => void
	text: string;
}
const Tooltip: React.FC<TooltipProps> = ({ text, showTooltip, setShowTooltip }) => {

	const handleClick = () => {
		setShowTooltip(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			console.log(showTooltip)
			setShowTooltip(false);
		}, 1500);

		return () => {
			clearTimeout(timeout);
		};
	}, [showTooltip]);

	return (
		<div className={`${styles.tooltip} ${showTooltip ? styles.show : styles.hide}`} onClick={handleClick}>
			{showTooltip && <div className={styles.tooltip}>
				<span>{text}</span>
			</div>}
		</div>
	);
};

export default Tooltip