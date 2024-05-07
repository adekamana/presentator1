import { FC } from "react";
import styles from "./Registration.module.scss";
import { Field, Form, Formik } from 'formik'
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./utils";
import cn from "classnames"
import Header from "../../../components/Header";
import Logo from "../../../components/Logo";
import InputMask from 'react-input-mask';

const Registration: FC = () => {
  const navigate = useNavigate()
  const role = window.localStorage.getItem('role')

  return (
    <main className={styles.container}>
      <div className={styles.opacityBox}>
        <div className={styles.headerContainer}>
          <Header role={role} />
        </div>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              login: ""
            }}
            onSubmit={(values, { resetForm }) => {
              const cleanedPhoneNumber = values.login.replace(/\D/g, '');
              window.localStorage.setItem('login', cleanedPhoneNumber);
              navigate('/confirmation-registration');
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <div className={styles.formContainer}>
                  <div className={styles.title}>Регистрация</div>
                  <div className={styles.subtitle}>
                    <span className={styles.subtitleLabel}>Уже есть аккаунт?</span>
                    <span
                      className={styles.subtitleLink}
                      onClick={() => navigate('/login')}
                    >
                      Войти
                    </span>
                  </div>
                  <label className={cn(styles.label, { [styles.labelError]: errors.login && touched.login })}>Номер телефона</label>
                  <div className={styles.inputWithPrefix}>
                    <div className={styles.prefix}>+7</div>
                    <Field
                      name="login"
                      placeholder="(999) 999-99-99"
                      className={cn(styles.registerInput, { [styles.inputError]: errors.login && touched.login })}
                    >
                      {({ field }: { field: any }) => (
                        <InputMask
                          {...field}
                          mask="(999) 999-99-99"
                          placeholder="(999) 999-99-99"
                        >
                          {(inputProps: any) => <input {...inputProps} className={styles.registerInput} />}
                        </InputMask>
                      )}
                    </Field>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button type="submit">Регистрация</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default Registration;
