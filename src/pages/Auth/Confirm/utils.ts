import * as yup from 'yup';

export const validationSchema = yup.object({
	first: yup
		.string()
		.required('required'),
	second: yup
		.string()
		.required('required'),
	third: yup
		.string()
		.required('required'),
	fourth: yup
		.string()
		.required('required'),
})