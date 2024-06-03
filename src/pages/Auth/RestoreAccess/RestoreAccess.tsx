import { FC } from "react";
import styles from "./RestoreAccess.module.scss";
import { useNavigate } from "react-router";
import Header from "../../../components/Header";
import Logo from "../../../components/Logo";
import { Field, Formik } from "formik";
import InputMask from 'react-input-mask';
import cn from "classnames"
import { validationSchema } from "./utils";
import { Form } from "react-router-dom";
const RestoreAccess: FC = () => {
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
									<div className={styles.title}>Восстановление доступа к аккаунту</div>
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
											className={cn(styles.restoreAccessInput, { [styles.inputError]: errors.login && touched.login })}
										>
											{({ field }: { field: any }) => (
												<InputMask
													{...field}
													mask="(999) 999-99-99"
													placeholder="(999) 999-99-99"
												>
													{(inputProps: any) => <input {...inputProps} className={cn(styles.restoreAccessInput, { [styles.inputError]: errors.login && touched.login })} />}
												</InputMask>
											)}
										</Field>
									</div>
									<div className={styles.buttonContainer}>
										<button type="submit">Восстановить доступ</button>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</main>
	)
}

export default RestoreAccess