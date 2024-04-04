import React, { FC, useEffect, useState, ChangeEvent } from "react";
import styles from "./Account.module.scss";
import axios from "axios";
import Logo from "../../components/Logo";
import { prices } from "./utils";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import ButtonComponent from "./ButtonComponent";
import { Form, Link } from "react-router-dom";
import { Field, Formik } from "formik";
import RewardModal from "../../components/RewardModal";
interface Generates {
  free_generate: number;
  current_generate: number;
}

const Account: FC = () => {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;
  const [checked, setChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setActiveBox(!checked);
  };
  const role = localStorage.getItem("role");
  const phoneNumber = window.localStorage.getItem("login");

  const logout = () => {
    localStorage.clear();
    navigate("/viewer/homepage");
  };

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index === activeButton ? null : index);
  };

  const [activeBox, setActiveBox] = useState<boolean | null>(null);

  const handleBoxClick = (index: boolean) => {
    setActiveBox(index === activeBox ? null : index);
  };

  const [generates, setGenerates] = useState<Generates>({
    free_generate: 0,
    current_generate: 0,
  });

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
    setTimeout(async() =>  {
      setIsModalVisible(true);
      const phoneNumber = window.localStorage.getItem("login");
      var cleanedPhoneNumber = "";
      if (phoneNumber) {
        cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      }

      const serverData = {
        phone_number: phoneNumber,
      };

      try {
        const response = await axios.post(
          `https://презентатор.рф/api/update_free_generates/?phone_number=${cleanedPhoneNumber}`
        );
        setGenerates(response.data);
        console.log('data', response.data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const phoneNumber = window.localStorage.getItem("login");
      var cleanedPhoneNumber = "";
      if (phoneNumber) {
        cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      }

      const serverData = {
        phone_number: phoneNumber,
      };

      try {
        const response = await axios.post(
          `https://презентатор.рф/api/get_generates/?phone_number=${cleanedPhoneNumber}`
        );
        setGenerates(response.data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    };

    fetchData();
  }, []);

  const handleBuyGenerations = async () => {
    console.log("Купить генерации");
    const phoneNumber = window.localStorage.getItem("login");
    var cleanedPhoneNumber = "";
    if (phoneNumber) {
      cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    }

    let apiUrl = "";
    let requestBody = {};

    switch (activeButton) {
      case 0:
        apiUrl = "https://презентатор.рф/api/buy_1_download/";
        requestBody = { phone_number: cleanedPhoneNumber };
        break;
      case 1:
        apiUrl = "https://презентатор.рф/api/buy_3_download/";
        requestBody = { phone_number: cleanedPhoneNumber };
        break;
      case 2:
        apiUrl = "https://презентатор.рф/api/buy_10_download/";
        requestBody = { phone_number: cleanedPhoneNumber };
        break;
      default:
        console.log("Неверное значение activeButton");
        return;
    }

    try {
      const response = await axios.post(
        apiUrl + `?phone_number=${cleanedPhoneNumber}`
      );
      const data = response.data;
      console.log(data);
      window.open(data, "_blank");
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.opacityBox}>
        <div className={styles.contentBox}>
          <Header role={role} />

          <div className={styles.content}>
            <div className={styles.account}>
              <div className={styles.form}>
                <div className={styles.title}>Личный кабинет</div>

                <div className={styles.infoBox}>
                  <span className={styles.label}>Аккаунт</span>
                  <div className={styles.infocontainer}>
                    <div className={styles.info}>
                      <div className={styles.iconContainer}>
                        <div className={styles.icon}>
                          <img src="../images/user.svg" alt="user" />
                        </div>
                      </div>

                      <div className={styles.user}>
                        <span>{phoneNumber}</span>
                      </div>
                      <div className={styles.dot}></div>

                      <div className={styles.logout} onClick={logout}>
                        Выйти из аккаунта
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.generationBox}>
                  <span className={styles.label}>Покупка генераций</span>
                  <div className={styles.prices}>
                    {prices.map((price: any, index: number) => (
                      <div
                        key={index}
                        className={`${styles.priceContainer} ${
                          index === activeButton ? styles.activeButton : ""
                        }`}
                        onClick={() => handleButtonClick(index)}
                      >
                        <span
                          className={`${styles.priceNumber} ${
                            index === activeButton ? styles.activeText : ""
                          }`}
                        >
                          {price.price}
                        </span>
                        <span
                          className={`${styles.priceValue} ${
                            index === activeButton ? styles.activeText : ""
                          }`}
                        >
                          {price.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={styles.rewardGeneration}
                    onClick={rewardGeneration}
                  >
                    Генерации за рекламу
                  </div>
                </div>

                <span className={styles.label}>Статистика</span>
                <div className={styles.accountFooter}>
                  <span>
                    Осталось: <strong>{generates.free_generate}</strong>{" "}
                    генераций
                  </span>
                  <span>
                    Скачано: <strong>{generates.current_generate}</strong>{" "}
                    презентаций
                  </span>
                </div>
              </div>
              <div className={styles.stat}>
                <a
                  href="http://презентатор.рф/user/homepage"
                  className={styles.link}
                >
                  Перейти к генерациям...
                </a>
              </div>{" "}
              <div className={styles.accountCheckboxContainer}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                  className={styles.accountCheckbox}
                />
                <div className={styles.accountCheckboxLabel}>
                  <span>
                    Я прочитал(а){" "}
                    <a
                      href="https://презентатор.рф/docs/offer.pdf"
                      className={styles.link}
                    >
                      публичную оферту
                    </a>
                  </span>
                  <span> и принимаю его условия </span>
                </div>
              </div>
              <ButtonComponent
                selected={activeButton !== null && activeBox == true}
                onClick={handleBuyGenerations}
              />
            </div>
          </div>
        </div>
      </div>
      <RewardModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </main>
  );
};

export default Account;
