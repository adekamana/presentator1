import * as yup from 'yup';

export const validationSchema = yup.object({
	first: yup
		.string()
		.required('required')
		.max(1),
	second: yup
		.string()
		.required('required')
		.max(1),
	third: yup
		.string()
		.required('required')
		.max(1),
	fourth: yup
		.string()
		.required('required')
		.max(1),
})