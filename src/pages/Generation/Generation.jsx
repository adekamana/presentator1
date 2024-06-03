import React, { FC, useState, useEffect, useContext } from "react";
import styles from "./Generation.module.scss";
import Header from "../../components/Header";
import { Field, Formik } from "formik";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { validationSchema, getTimer } from "./utils";
import cn from "classnames";
import { context } from "../../containers/Layout";
import ServerErrorModal from "../../components/ServerErrorModal";
import StepProgressBar from "../../components/ProgressBar";

const Generation = () => {
  const {generates} = useContext(context)
  const {free_generate} = generates
  let role = window.localStorage.getItem("role");
  const navigate = useNavigate();
  const [typeGeneration, setTypeGeneration] = useState("automatic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationMessage, setGenerationMessage] = useState("Презентация генерируется...");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const [loadTime, setLoadTime] = useState(0);
  const [timeFromSlides, setTimeFromSlides] = useState(0);

  const handleRadioChange = (value) => {
    setTypeGeneration(value);
  };

  const checkRole = () => {
    if (role) {
      return `/${role}/presentation`;
    } else {
      return "/viewer/presentation";
    }
  };

  const sendPostRequest = async (data) => {
    try { 
      setIsGenerating(true);
      setTimeFromSlides(data.count_list)
      let timer = getTimer(data.count_list) * 1000
      
      const fetchPromise = fetch("https://презентатор.рф/api2/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const timerPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, timer);
      });
      
      await Promise.all([fetchPromise, timerPromise]);
  
      const response = await fetchPromise;
      if (!response.ok) {
        if (response.status === 502) {
          throw new Error("Bad Gateway: сервер недоступен");
        } else if (response.status === 524) {
          throw new Error("A Timeout Occurred: сервер не ответил вовремя");
        } else {
          throw new Error("Failed to generate presentation");
        }
      }
      const responseData = await response.json();
      setIsGenerating(false);
      localStorage.setItem("presentationLink", responseData);
      navigate(`${checkRole()}`);
    } catch (error) {
      setIsErrorModalVisible(true);
    } finally {
      setIsGenerating(false);
    }
  };

    // const updateGen = async () => {
    //   try {

    //     const phoneNumber = window.localStorage.getItem("login");
    //     var cleanedPhoneNumber = "";
    //     if (phoneNumber) {
    //        cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    //     } else {
    //     }
    //     const response = await axios.post(
    //       `https://презентатор.рф/api/update_generates/?phone_number=${cleanedPhoneNumber}`
    //     );
  
    //     if (!response.ok) {
    //       throw new Error("Failed to generate presentation");
    //     }
  
    //     const responseData = await response.json();
    //     localStorage.setItem("presentationLink", responseData);
    //     navigate(`${checkRole()}`);
    //   } catch (error) {
    //   }
    // };

  

  useEffect(() => {
    console.log('loadTime', loadTime)
    console.log('timeFromSlides', timeFromSlides)
    console.log('getTimer(timeFromSlides)', getTimer(timeFromSlides))
    let interval;
      // let messages = [
    //   "Почти готово, пара минут осталось!",
    //   "Осталось совсем чуть-чуть!",
    //   "Подбираем картинки для вас!",
    //   "Всего пару минут и все будет готово!",
    //   "Минутка терпения, мы почти закончили!"
    // ];

    // let index = 0;
    // interval = setInterval(() => {
    //   setGenerationMessage(messages[index]);
    //   index = (index + 1) % messages.length;
    // }, 3500);
    if (isGenerating) {
      interval = setInterval(() => {
        setLoadTime(prevLoadTime => {
          if (prevLoadTime < 100) {
            let step = 100 / getTimer(timeFromSlides);
            let nextLoadTime = Math.min(prevLoadTime + step, 100); 
            return nextLoadTime;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      clearInterval(interval);
      setTimeFromSlides(0);
      setLoadTime(0);
    }
  }, [isGenerating, loadTime]);

  useEffect(() => {
	if (role) {
	} else {
	  navigate (`/login`)
	}
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.opacityBox}>
        <div className={styles.contentBox}>
          <Header generation role={role} />
          <div className={styles.content}>
            <div className={styles.generation}>
              <div className={styles.title}>Генератор презентаций</div>
              <div className={styles.subtitle}>Заполните все пункты</div>

              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  theme: "",
                  slides: "",
                  locale: false,
                }}
                onSubmit={(values, { resetForm }) => {
                  const data = {
                    promt: values.theme,
                    count_list: parseInt(values.slides, 10),
                    phone_number: window.localStorage.getItem("login").replace(/\D/g, ""),
                  };
                  sendPostRequest(data);                  
                }}
              >
                {({ errors, touched, handleSubmit }) => (
                  <>
                    <Form className={styles.form}>
                      <label className={cn(styles.label, { [styles.labelError]: errors.theme && touched.theme })}>
                        Тема презентации (до 200 символов)
                      </label>
                      <Field
                        name="theme"
                        placeholder="Укажите тему"
                        className={cn(styles.generationInput, { [styles.inputError]: errors.theme && touched.theme })}
                      />

                      <label className={cn(styles.label, { [styles.labelError]: errors.slides && touched.slides })}>
                        Количество слайдов (от 4 до 17)
                      </label>
                      <Field
                        name="slides"
                        placeholder="Укажите кол-во слайдов"
                        type="number"
                        className={cn(styles.generationInput, { [styles.inputError]: errors.slides && touched.slides })}
                      />
                    
                       {errors.slides && touched.slides 
                        ? (<div className={styles.minError}>{errors.slides}</div>) 
                        : (<div className={styles.sizeBox}></div>) }
                      {/* <div className={styles.checkboxContainer}>
                        <Field name="locale" type="checkbox" className={styles.checkbox} />
                        <span className={styles.checkboxLabel}>Формировать презентацию на английском языке</span>
                      </div> */}

                      {/* <div className={styles.radioContainer}>
                        <span className={styles.radioTitle}>План презентации</span>
                        <div className={styles.radioBox}>
                          <div className={styles.radioGroup}>
                            <input
                              type="radio"
                              id="automatic"
                              name="type"
                              className={styles.radio}
                              checked={typeGeneration === "automatic"}
                              onChange={() => handleRadioChange("automatic")}
                            />
                            <label className={styles.radioLabel} htmlFor="automatic">
                              Сделать автоматически
                            </label>
                          </div>

                          <div className={styles.radioGroup}>
                            <input
                              type="radio"
                              id="manually"
                              name="type"
                              className={styles.radio}
                              checked={typeGeneration === "manually"}
                              onChange={() => handleRadioChange("manually")}
                            />
                            <label className={styles.radioLabel} htmlFor="manually">
                              Указать вручную
                            </label>
                          </div>
                        </div>
                      </div> */}

                      {(isGenerating) ? (
                        <div className={styles.labelgen}>
                          <StepProgressBar load={loadTime} />
                        </div>
                      ) : (
                        <div className={styles.buttonContainer}>
                          <button type="submit" onClick={free_generate ? handleSubmit : () => setIsModalVisible(true)} className={styles.button}>
                            Начать магию
                          </button>
                          <div className={styles.tokenPriceContainer}>
                            <img src="../images/infoIcon.png" alt="hint" />
                            <span className={styles.tokenPrice}>
                              С Вас спишется 5 токенов
                            </span>
                          </div>
                         
                        </div>
                      )}
                     
                    </Form>       
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <ServerErrorModal isModalVisible={isErrorModalVisible} setIsModalVisible={setIsErrorModalVisible} />
    </main>
  );
};

export default Generation;