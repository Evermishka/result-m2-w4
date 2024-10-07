import * as yup from 'yup';

export const loginFormFieldsSchema = yup.object().shape({
	email: yup.string().email('Не валидный email'),
	password: yup
		.string()
		.required('Обязательное поле')
		.min(8, 'Неверный пароль. Должно быть не меньше 8 символов')
		.matches(
			/^[\w_]*$/,
			'Неверный пароль. Допустимые символы: буквы, цифры и нижнее подчёркивание',
		)
		.matches(
			/[A-Z]/,
			'Неверный пароль. Пароль должен содержать хотя бы один символ в верхнем регистре',
		)
		.matches(/[0-9]/, 'Неверный пароль. Пароль должен содержать хотя бы одну цифру'),
	passwordRepeat: yup
		.string()
		.required('Обязательное поле')
		.oneOf([yup.ref('password')], 'Passwords must match'),
});
