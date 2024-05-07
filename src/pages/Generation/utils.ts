
import * as yup from 'yup';

export const validationSchema = yup.object({
	theme: yup
		.string()
		.required('required'),
	slides:
		yup
			.number()
			.min(4, 'Минимальное количество слайдов - 4')
			.max(17, 'Максимальное количество слидов - 17')
})

export const getTimer = (slidesCount: number) => {
	switch (slidesCount) {
		case 4:
			return 42;
		case 5:
			return 50;
		case 6:
			return 58;
		case 7:
			return 66;
		case 8:
			return 74;
		case 9:
			return 82;
		case 10:
			return 90;
		case 11:
			return 98;
		case 12:
			return 106;
		case 13:
			return 114;
		case 14:
			return 122;
		case 15:
			return 130;
		case 16:
			return 138;
		case 16:
			return 146;
	}
}