
import * as yup from 'yup';

export const validationSchema = yup.object({
	theme: yup
		.string()
		.required('required'),
	titles: yup.array().of(
		yup.object()
	).min(6, 'Минимальное количество слайдов - 6'),
})