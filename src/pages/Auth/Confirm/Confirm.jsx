import {FC, useState} from 'react'
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
    if (e.target.value.length >= e.target.getAttribute("maxLength")) {
      e.target.nextElementSibling.focus();
    }
  }

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
								first:"",
								second: "",
								third: "",
								fourth: "",
								
							}}

							onSubmit={async (values) => {
								const code = values.first.toString() + values.second.toString() + values.third.toString() + values.fourth.toString();
								const phoneNumber = window.localStorage.getItem("login");
								const serverData = {
									phone_number: phoneNumber,
									code: code
								};
							
								try {
									const response = await axios.post(
										"https://презентатор.рф/api/check_code/",
										serverData
										
									);
							
									if (response.data.status === "success") {
										navigate("/login");
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
											</div>

										<label className={cn(styles.label, {})}>Введите 4-х значный код подтверждения</label>

										<div className={styles.inputContainer}>
											<Field
											id='number'
											key='first'
											name='first'
											type='number'
											maxlength="1"
											size="1"
											onInput={(e) => focusChange(e)}
											autoFocus
											className={cn(styles.confirmInput, {[styles.inputError]: errors.first && touched.first})} 
											/>
											<Field
											id='number'
											key='second'
											name='second'
											type='number'
											maxlength="1"
											size="1"
											onInput={(e) => focusChange(e)}
											className={cn(styles.confirmInput, {[styles.inputError]: errors.second && touched.second})} 
											/>
											<Field
											key='third'
											name='third'
											type='number'
											maxlength="1"
											size="1"
											onInput={(e) => focusChange(e)}
											className={cn(styles.confirmInput, {[styles.inputError]: errors.third && touched.third, })} 
											/>
											<Field
											key='fourth'
											name='fourth'
											type='number'
											maxlength="1"
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