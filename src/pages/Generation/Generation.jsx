import React, { FC, useState, useEffect, useContext } from "react";
import styles from "./Generation.module.scss";
import Header from "../../components/Header";
import { Field, Formik } from "formik";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { validationSchema } from "./utils";
import cn from "classnames";
import { context } from "../../containers/Layout";
import ServerErrorModal from "../../components/ServerErrorModal";

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
      const response = await fetch("https://презентатор.рф/api2/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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
    
    let interval;

    if (isGenerating) {
      let messages = [
        "Почти готово, пара минут осталось!",
        "Осталось совсем чуть-чуть!",
        "Подбираем картинки для вас!",
        "Всего пару минут и все будет готово!",
        "Минутка терпения, мы почти закончили!"
      ];

      let index = 0;
      interval = setInterval(() => {
        setGenerationMessage(messages[index]);
        index = (index + 1) % messages.length;
      }, 3500);

      return () => clearInterval(interval);
    }

  }, [isGenerating]);

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
                        Количество слайдов (от 2 до 15)
                      </label>
                      <Field
                        name="slides"
                        type="number"
                        min="2"
                        max="15"
                        placeholder="Укажите кол-во слайдов"
                        onInput={(e) => {
                          const maxLimit = 15;
                          const inputVal = parseInt(e.target.value) || 2;
                          const sanitizedVal = Math.min(maxLimit, inputVal);
                          e.target.value = sanitizedVal.toString();
                        }}
                        className={cn(styles.generationInput, { [styles.inputError]: errors.slides && touched.slides })}
                      />
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

                      {isGenerating ? (
                        <div className={styles.labelgen}>
                          <label >
                            {generationMessage}
                          </label>
                        </div>
                      ) : (
                        <div className={styles.buttonContainer}>
                          {/*
                          TODO: Применить метод для начала генерации
                          */}
                          <button type="submit" onClick={free_generate ? handleSubmit : () => setIsModalVisible(true)} className={styles.button}>
                            Начать магию
                          </button>
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