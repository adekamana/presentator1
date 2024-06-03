import {FC, useEffect, useState} from 'react'
import axios from "axios";
import styles from './Confirm.module.scss'
import { useNavigate } from 'react-router'
import { Field, Formik } from 'formik'
import { Form, Link } from 'react-router-dom'
import cn from "classnames"
import { validationSchema } from './utils';
import Header from '../../../components/Header';
import Logo from '../../../components/Logo';
const Confirm = () => {
	const navigate = useNavigate()
	const [checked, setChekecd] = useState(false)
	const role = window.localStorage.getItem('role')
	const [showErrorText, setShowErrorText] = useState(false);
	function focusChange(e) {
		if (e.target.value.length < e.target.getAttribute("maxLength")) {
			const previousElement = e.target.previousElementSibling;
			if (previousElement && previousElement.tagName === "INPUT") {
				previousElement.focus();
			}
		} else if (e.target.value.length === 0) {
			const previousElement = e.target.previousElementSibling;
			if (previousElement && previousElement.tagName === "INPUT") {
				previousElement.focus();
			}
		} else {
			const nextElement = e.target.nextElementSibling;
			if (nextElement && nextElement.tagName === "INPUT") {
				nextElement.focus();
			}
		}
	}

function setupInputNavigation() {
  const inputs = document.querySelectorAll('input'); // Select all input fields

  inputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
      const maxLength = parseInt(event.target.getAttribute('maxlength'));
      const value = event.target.value;

      if (value.length >= maxLength) {
        // Move focus to the next input field
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      } else if (value.length === 0 && index > 0) {
        // Move focus to the previous input field
        inputs[index - 1].focus();
      } else if (value.length === 1 && index > 0) {
        // Move focus to the previous input field if only one character is entered
        inputs[index - 1].focus();
      }
    });

    input.addEventListener('keypress', (event) => {
      const maxLength = parseInt(event.target.getAttribute('maxlength'));
      const value = event.target.value;

      if (value.length >= maxLength) {
        event.preventDefault();
      }
    });
  });
}

useEffect(() => {
  setupInputNavigation();
}, []);
	return(
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
								first: '',
								second: '',
								third: '',
								fourth: '',
								
							}}

							onSubmit={async (values) => {
								const code = values.first.toString() + values.second.toString() + values.third.toString() + values.fourth.toString();
								const phoneNumber = window.localStorage.getItem("login");
								const serverData = {
									phone_number: phoneNumber,
									code: code
								};
							
								try {
									console.log("Отправка: ", serverData);
									const response = await axios.post(
										"https://презентатор.рф/api/check_code/",
										serverData
									);
							
									if (response.data.status === "success") {
										// TODO: переход на страницу подтверждения пароля
										navigate("/confirmation-password");
									} else {
										setShowErrorText(true);
									}
								} catch (error) {
									setShowErrorText(true);
								}
							}}
							
							>
							{({errors, touched, handleSubmit}) => (
								<Form className={styles.form}>
									<div className={styles.formContainer}>
										<div className={styles.title}>Подтверждение регистрации</div>

										<div className={styles.subtitle}>
										Введите <b>последние 4 цифры номера</b> телефона, с которого вам позвонят для подтверждения аккаунта
										</div>

										<div className={styles.hint}>
											<img className={styles.hintImage} src='../images/infoIcon.png'/>
											<span className={styles.hintLabel}>
												Вам не нужно брать данный телефон, просто введите 4 последние цифры
											</span>
										</div>

										{/* <div className={styles.subtitle}>
												Пожалуйста перейдите в{" "}
												<a
												className={styles.subtitleLink}
												href="https://t.me/presentator_help_bot"
												target="_blank"
												rel="noopener noreferrer"
												>
												Telegram бот
												</a>{" "}
												и получите код подтверждения.
											</div> */}

										<label className={cn(styles.label, {})}>Введите 4-х значный код подтверждения</label>

										<div className={styles.inputContainer}>
											<Field
											id='number'
											key='first'
											name='first'
											type='number'
											maxLength={1}
											size="1"
											autoFocus
											className={cn(styles.confirmInput, {[styles.inputError]: errors.first && touched.first})}

											/>
											<Field
											id='number'
											key='second'
											name='second'
											type='number'
											maxLength={1}
											size="1"
											className={cn(styles.confirmInput, {[styles.inputError]: errors.second && touched.second})}

											/>
											<Field
											key='third'
											name='third'
											type='number'
											maxLength={1}
											size="1"
											className={cn(styles.confirmInput, {[styles.inputError]: errors.third && touched.third, })}

											/>
											<Field
											key='fourth'
											name='fourth'
											type='number'
											maxLength={1}
											size="1"
											className={cn(styles.confirmInput, {[styles.inputError]: errors.fourth && touched.fourth, })}
	
											/>

	
										</div>
										
										<div className={styles.confirmCheckboxContainer}>
												<Field type='checkbox' checked={checked} onChange={() => setChekecd(!checked)} className={styles.confirmCheckbox}/>
												<div className={styles.confirmCheckboxLabel}>
												<span>
														Я прочитал(а) <a href='https://презентатор.рф/docs/termsofuse.pdf' className={styles.link}>пользовательское соглашение</a>
														</span>
													<span> и принимаю его условия </span>
												</div>
										</div>
										
										<div className={styles.buttonContainer}>
                   	 <button type="submit" onClick={handleSubmit} className={styles.button} disabled={!checked}>
											Подтвердить
										</button>
                  	</div>
					  				{showErrorText && (
										<p className={styles.errorText}>Неверный код!</p>
									)}	
									</div>
								</Form>
							)}
						</Formik>
					</div>
			</div>
		</main>
	)
}

export default Confirm