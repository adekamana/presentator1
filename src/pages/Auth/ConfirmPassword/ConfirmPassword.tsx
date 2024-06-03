import { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import styles from './ConfirmPassword.module.scss'
import Header from '../../../components/Header'
import Logo from '../../../components/Logo'
import { Field, Form, Formik } from 'formik'
import cn from "classnames"
import { validationSchema } from './utils'

const ConfirmPassword: FC = () => {
	const navigate = useNavigate()
	const role = window.localStorage.getItem('role')
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	return (
		<main className={styles.container}>
			<div className={styles.opacityBox}>
				<div className={styles.content}>
					<div className={styles.logoContainer}>
						<Logo />
					</div>

					<Formik
						initialValues={{
							password: '',
							confirmPassword: '',
						}}
						validationSchema={validationSchema}
						onSubmit={async (values) => {
							console.log(values)
						}}
					>
						{({ errors, touched }) => (
							<Form className={styles.form}>
								<div className={styles.formContainer}>
									<div className={styles.title}>Подтвержение пароля</div>
									<label className={cn(styles.label, { [styles.labelError]: errors.password && touched.password })}>
										Введите пароль
									</label>
									<div className={styles.inputWithIcon}>
										<Field
											name='password'
											type={isPasswordVisible ? 'text' : 'password'}
											placeholder='Пароль'
											className={cn(styles.confirmPasswordInput, { [styles.inputError]: errors.password && touched.password })}
										/>
										<img src={isPasswordVisible ? '../images/eyeOff.svg' : '../images/eye.svg'} className={styles.icon} onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
									</div>

									{
										errors.password && touched.password
											? <span className={styles.labelError}>{errors.password}</span>
											: <div className={styles.sizeBlock}></div>
									}
									<label className={cn(styles.label, { [styles.labelError]: errors.confirmPassword && touched.confirmPassword })}>
										Подтвердите пароль
									</label>
									<div className={styles.inputWithIcon}>
										<Field
											name='confirmPassword'
											type={isPasswordVisible ? 'text' : 'password'}
											placeholder='Пароль'
											className={cn(styles.confirmPasswordInput, { [styles.inputError]: errors.confirmPassword && touched.confirmPassword })}
										/>
									</div>
									{
										errors.confirmPassword && touched.confirmPassword
											? <span className={styles.labelError}>{errors.confirmPassword}</span>
											: <div className={styles.sizeBlock}></div>
									}
									<div className={styles.buttonContainer}>
										<button type='submit'>Подтвердить</button>
									</div>
								</div>

							</Form>
						)}
					</Formik>
				</div>
			</div>
		</main>)
}

export default ConfirmPassword