import React, { FC } from 'react';
import styles from './ButtonComponent.module.scss';

interface ButtonProps {
  text: string;
  selected?: boolean;
  onClick: () => void;
}

const ButtonComponent: FC<ButtonProps> = ({ selected, onClick, text }) => {
  return (
    <div
      className={`${styles.buttonGroup} ${!selected ? styles.transparentButton : ''}`}
      onClick={onClick}
    >
      <div className={styles.buttonPrimary}>{text}</div>
    </div>
  );
};

export default ButtonComponent;
