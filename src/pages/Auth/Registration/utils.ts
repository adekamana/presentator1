import * as yup from 'yup';

export const validationSchema = yup.object({
	login: yup
		.string()
		.required('Обязателньое поле')

})