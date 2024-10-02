export const isErrorInEmail = (email) => {
	let errors = [];

	if (
		!email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			)
	)
		errors.push('Не верный email');

	return errors;
};

export const isErrorInPassword = (password) => {
	let errors = [];

	if (password.length < 8)
		errors.push('Пароль должен быть длинной не менее 8 символов');
	if (!password.match(/[a-z]/))
		errors.push('Пароль должен содержать хотя бы одну букву латинского алфавита');
	if (!password.match(/[A-Z]/))
		errors.push(
			'Пароль должен содержать хотя бы одну букву латинского алфавита в верхнем регистре',
		);
	if (!password.match(/[0-9]/))
		errors.push('Пароль должен содержать хотя бы одну цифру');

	return errors;
};

export const isErrorInPasswordRepeat = (passwordRepeat, password) => {
	let errors = [];

	if (!(passwordRepeat === password)) errors.push('Не верный повтор пароля')
	
	return errors;
};
