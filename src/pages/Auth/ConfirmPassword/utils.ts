import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	password: yup
		.string()
		.required('Обязательное поле')
		.matches(
			/^[a-zA-Z0-9 !"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]{6,32}$/,
			'Неверный формат'
		),
	confirmPassword: yup
		.string()
		.required('Подтверждение пароля обязательно')
		.oneOf([yup.ref('password')], 'Пароли не совпадают')
});