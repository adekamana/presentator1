import React, { FC, useContext, useEffect } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.scss";
import NoAddModal from "../NoAddModal";
import { context } from "../../containers/Layout";
import { useNavigate } from "react-router";
import UserRepository from "../../api/repositories/userRepository";

interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

const Modal: FC<ModalProps> = ({ isModalVisible, setIsModalVisible }) => {
  const contextValue: any = useContext(context);
  const { generates, setGenerates } = contextValue;
  const [isRewarded, setIsRewarded] = React.useState(false);
  const [isNoAddModalVisible, setIsNoAddModalVisible] = React.useState(false);
  const navigate = useNavigate()
  const screenWidth = window.screen.width;
  const rewardGeneration = () => {
    if (screenWidth >= 768) {
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-6659913-3",
          type: "rewarded",
          platform: "desktop",
        });
      });
    } else {
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-6659913-4",
          type: "rewarded",
          platform: "touch",
        });
      });
    }
    setTimeout(async () => {
      setIsModalVisible(true);
      const phoneNumber = window.localStorage.getItem("login");
      var cleanedPhoneNumber = "";
      if (phoneNumber) {
        cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      }
      try {
        const response = await UserRepository.updateFreeGenerates(
          cleanedPhoneNumber
        );
        setGenerates(response.data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    }, 2000);;
  };

  const handleCheckAddsGenerates = async () => {
    const phoneNumber = window.localStorage.getItem("login");
    var cleanedPhoneNumber = "";
    if (phoneNumber) {
      cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    }
    try {
      const response = await UserRepository.checkAddsGenerates(cleanedPhoneNumber);
      if(response.data) {
        rewardGeneration()
      } else {
        setIsNoAddModalVisible(true)
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setIsRewarded(false);
  };

  if (!isModalVisible) return null;
  return ReactDom.createPortal(
    <div className={styles.overlay}>
      {isRewarded ? (
        <div className={styles.rewardContainer}>
          <div className={styles.close} onClick={handleClose}>
            <img src="../images/x.svg" alt="close" />
          </div>
          <div className={styles.rewardContent}>
            <div className={styles.rewardSubtitle}>Получена одна генерация</div>
            <div className={styles.rewardButtonPrimary} onClick={handleClose}>Продолжить</div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.close} onClick={handleClose}>
            <img src="../images/x.svg" alt="close" />
          </div>
          <div className={styles.content}>
            <span className={styles.title}>Скачиваний не осталось</span>
            <span className={styles.subtitle}>Вы можете их приобрести</span>
            <div className={styles.buttonPrimary} onClick={() => navigate('/user/account')}>Приобрести скачивания</div>
            <div className={styles.rewardGeneration} onClick={() => handleCheckAddsGenerates()}>
              Генерации за рекламу
            </div>
          </div>
        </div>
      )}
      <NoAddModal isModalVisible={isNoAddModalVisible} setIsModalVisible={setIsNoAddModalVisible} />
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
