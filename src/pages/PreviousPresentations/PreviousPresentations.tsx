import { FC, useEffect, useState } from "react";
import styles from "./PreviousPresentations.module.scss";
import PresentationCard from "../../components/PresentationCard";
import Header from "../../components/Header";
import UserRepository from "../../api/repositories/userRepository";
import { useNavigate } from "react-router";

const list = [];
const PreviousPresentations: FC = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate()
  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    const phoneNumber = window.localStorage.getItem("login");
    const getPresentaions = async () => {
      var cleanedPhoneNumber = "";
      if (phoneNumber) {
        cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      }
      try {
        const response = await UserRepository.getPresentations(
          cleanedPhoneNumber
        );
        setPresentations(response.data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    };
    getPresentaions();
  }, []);
  return (
    <>
      <Header role={role} />
      {presentations.length > 0 ? (
        <div className={styles.container}>
          <section className={styles.info}>
            <img src="../images/infoIcon.png" alt="info" />
            <span className={styles.infoText}>
              Сгенерированные презентации храняться 30 дней. После чего
              безвозвратно удаляются
            </span>
          </section>
          <section className={styles.list}>
            {presentations.map((item, index) => {
              return <PresentationCard key={index} presentation={item} />;
            })}
          </section>
        </div>
      ) : (
       <div className={styles.container}>
          <div className={styles.empty}>
            <img src="../images/roll.png" alt="empty" />
            <span className={styles.emptyText}>Нет сгенерированных презентаций</span>
            <div className={styles.buttonContainer}>
               <button onClick={() => navigate("/user/generation")}>Сгенерировать</button>
            </div>
          </div>
       </div>
      )}
    </>
  );
};

export default PreviousPresentations;
