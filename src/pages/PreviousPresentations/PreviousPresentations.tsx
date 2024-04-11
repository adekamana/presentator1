import { FC, useEffect, useState } from "react";
import styles from "./PreviousPresentations.module.scss";
import PresentationCard from "../../components/PresentationCard";
import Header from "../../components/Header";
import UserRepository from "../../api/repositories/userRepository";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader";

const list = [];
const PreviousPresentations: FC = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate()
  const [presentations, setPresentations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const phoneNumber = window.localStorage.getItem("login");
    setIsLoading(true);
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
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    };
    getPresentaions();
  }, []);
  return (
    <>
      <Header role={role} />
      {isLoading && <Loader />}
      {presentations.length > 0 && !isLoading ? (
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
       null
      )}
      {
        presentations.length === 0 && !isLoading ? (
          <div className={styles.container}>
          <div className={styles.empty}>
            <img src="../images/roll.png" alt="empty" />
            <span className={styles.emptyText}>Нет сгенерированных презентаций</span>
            <div className={styles.buttonContainer}>
               <button onClick={() => navigate("/user/generation")}>Сгенерировать</button>
            </div>
          </div>
       </div>
        ) : null
      }
    </>
  );
};

export default PreviousPresentations;
