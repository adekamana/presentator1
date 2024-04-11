import { FC } from "react";
import styles from "./PresentationCard.module.scss";

interface PresentationCardProps {
  presentation: { date: string; name: string; url: string };
}
const PresentationCard: FC<PresentationCardProps> = ({presentation}) => {
  const { date, name, url } = presentation;
  const parseDate = date.split('-')
  return (
    <div className={styles.card}>
      <div className={styles.title}>{name}</div>
      <form action="ya.ru" className={styles.form}>
        <span className={styles.date}>{`${parseDate[2]}.${parseDate[1]}.${parseDate[0]}`}</span>
        <a className={styles.buttonPrimary} href={url}>
          Скачать
        </a>
      </form>
    </div>
  );
};

export default PresentationCard;
