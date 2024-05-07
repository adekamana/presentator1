import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	password: yup
		.string()
		.matches(
			/^[a-zA-Z0-9 !"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]{6,32}$/,
			'Неверный формат'
		),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Пароли не совпадают')
		.test('match', 'Пароли не совпадают', function (value) {
			return value === this.parent.password || value === null;
		}),
});