import React, { FC } from 'react';
import styles from './Account.module.scss';

interface ButtonProps {
  selected: boolean;
  onClick: () => void;
}

const ButtonComponent: FC<ButtonProps> = ({ selected, onClick }) => {
  return (
    <div
      className={`${styles.buttonGroup} ${!selected ? styles.transparentButton : ''}`}
      onClick={onClick}
    >
      <div className={styles.buttonPrimary}>Купить генерации</div>
    </div>
  );
};

export default ButtonComponent;
