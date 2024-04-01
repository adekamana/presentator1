import { FC, useState } from 'react'
import styles from './Login.module.scss'
import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import { useNavigate } from "react-router-dom";
import cn from "classnames"
import { validationSchema } from './utils';
import Header from '../../../components/Header';
import Logo from '../../../components/Logo';
import InputMask from 'react-input-mask';

const Login: FC = () => {
	const navigate = useNavigate()
	const role = window.localStorage.getItem('role')
	const [showErrorText, setShowErrorText] = useState(false);

	return (
		<main className={styles.container}>
			<div className={styles.opacityBox}>
				<div className={styles.headerContainer}>
					<Header role={role}/>
				</div>
				<div className={styles.content}>
					<div className={styles.logoContainer}>
						<Logo/>
					</div>
					<Formik 
						validationSchema={validationSchema}
						initialValues={{
							login:'',
							password: ''
						}}
					
						onSubmit={async (values, { resetForm }) => {
							const phoneNumber = values.login;
							const password = values.password;
							const cleanedPhoneNumber = values.login.replace(/\D/g, '');
							const encodedPhoneNumber = encodeURIComponent(cleanedPhoneNumber);
							const encodedPassword = encodeURIComponent(password);
							const url = `https://презентатор.рф/api/check_credentials/?phone_number=${encodedPhoneNumber}&password=${encodedPassword}`;
							
							try {
								const response = await axios.post(url);
								if (response.data.status === "success") {
									window.localStorage.setItem("role", "user");
									window.localStorage.setItem("isAuth", "true");
									window.localStorage.setItem('login', phoneNumber); 
									navigate("/user/homepage");
									resetForm();
								} else {
									setShowErrorText(true); // Показываем текст ошибки
								}
							} catch(error) {
								setShowErrorText(true);
							}
						}}
					>
						{({ errors, touched }) => (
							<Form className={styles.form}>
								<div className={styles.formContainer}>
									<div className={styles.title}>Вход</div>
									
									
									<div className={styles.subtitle}>
                    <span className={styles.subtitleLabel}>Еще нет аккаунта?</span>
                    <span 
                      className={styles.subtitleLink}
                      onClick={() => navigate('/registration')}
                    >
                      Зарегистрироваться
                    </span>
                  </div>
				  <label className={cn(styles.label, {[styles.labelError]: errors.login && touched.login})}>
										Номер телефона привязанный к Telegram
									</label>
									<div className={styles.inputWithPrefix}>
										<div className={styles.prefix}>+7</div>
										<Field
											name="login"
											placeholder="(999) 999-99-99"
											className={cn(styles.registerInput, {[styles.inputError]: errors.login && touched.login})}
										>
											{({ field }: { field: any }) => (
												<InputMask
													{...field}
													mask="(999) 999-99-99"
												>
													
													{(inputProps: any) => <input {...inputProps} className={styles.registerInput} />}
												</InputMask>
											)}
										</Field>
									</div>
									<label className={cn(styles.label, {[styles.labelError]: errors.password && touched.password})}>
										Пароль
									</label>
									<Field 
										name='password' 
										type='password' 
										placeholder='Пароль' 
										className={cn(styles.loginInput, {[styles.inputError]: errors.password && touched.password})}
									/>
									{showErrorText ? (
										<span className={styles.errorText}>Неверный пароль</span>
									) : <div className={styles.errorTextSizeBlock}></div>}
									<div className={styles.buttonContainer}>
										<button type='submit'>Войти</button>
									</div>
									<span className={styles.forgot}>
										<a href="https://t.me/presentator_helper_bot" target="_blank" rel="noopener noreferrer">Забыли пароль?</a>
									</span>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</main>
	);
};

export default Login;