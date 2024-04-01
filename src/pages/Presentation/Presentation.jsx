import React, { useRef, useState, useEffect } from "react";
import styles from "./Presentation.module.scss";
import axios from 'axios';
import Header from "../../components/Header";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";



const Presentation = () => {
  let role = window.localStorage.getItem("role");
  let presentationLink = localStorage.getItem("presentationLink");

  const handleDownload = () => {
    if (presentationLink) {
      window.location.href = presentationLink;
    }
  };

  const docs = [
    {
      uri: presentationLink,
      fileType: "pptx",
      fileName: "presa.pptx",
    },
  ];
  const [data, setData] = useState({
    free_generate: 0,
    current_generate: 0,
  });
    
  
  useEffect(() => {
    const fetchData = async () => {
      const phoneNumber = window.localStorage.getItem('login');
      var cleanedPhoneNumber = '';
      if (phoneNumber) {
        cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
      }

      const serverData = {
        phone_number: phoneNumber,
      };

      try {
        const response = await axios.post(
          `https://презентатор.рф/api/get_generates/?phone_number=${cleanedPhoneNumber}`
        );
        setData({
          free_generate: response.data.free_generate,
          current_generate: response.data.current_generate,
        });
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    };

    fetchData();
  }, []);

  const docViewerRef = useRef(null);


  return (
    <main className={styles.container}>
      <div className={styles.opacityBox}>
        <div className={styles.contentBox}>
          <Header generation role={role} />
          <div className={styles.content}>
            <div className={styles.presentation}>
              <span className={styles.title}>Презентация готова!</span>
              <span className={styles.subtitle}>Вы можете её скачать</span>
              <div className={styles.preview}>
                {presentationLink && (
                  <DocViewer
                    ref={docViewerRef}
                    documents={docs}
                    pluginRenderers={DocViewerRenderers}
                    className={styles.preview}
                  />
                )}
              </div>

              <div className={styles.buttonContainer}>
                <div className={styles.sizeBlock}></div>

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.presentationButton}
                    onClick={handleDownload}
                  >
                    Скачать
                  </button>
                  <span className={styles.footerLabel}>Осталось: <strong>{data.free_generate}</strong> скачиваний</span>
                 
                </div>

                <div className={styles.radioGroup}>
                  <div>
                    <input
                      type="radio"
                      id="ppx"
                      name="format"
                      value="ppx"
                      checked
                      className={styles.radio}
                    />
                    <label className={styles.radioLabel} htmlFor="ppx">
                      .ppx
                    </label>
                  </div>

                  {/* <div>
                    <input
                      type="radio"
                      id="pdf"
                      name="format"
                      value="pdf"
                      className={styles.radio}
                    />
                    <label className={styles.radioLabel} htmlFor="pdf">
                      .pdf
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentation;
