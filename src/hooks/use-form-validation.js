import { useState } from 'react';
import { LOGIN_FORM } from '../consts';
import {
	isErrorInEmail,
	isErrorInPassword,
	isErrorInPasswordRepeat,
} from '../utils';

const initialErrorState = {
	[LOGIN_FORM.EMAIL]: [],
	[LOGIN_FORM.PASSWORD]: [],
	[LOGIN_FORM.PASSWORD_REPEAT]: [],
};

export const useFormValidation = () => {
	const [error, setError] = useState(initialErrorState);

	return {
		getError: () => error,
		updateError: (field, password = '') => {
			let newError = { ...error };

			switch (field.name) {
				case LOGIN_FORM.EMAIL:
					newError[LOGIN_FORM.EMAIL] = isErrorInEmail(field.value);
					break;
				case LOGIN_FORM.PASSWORD:
					newError[LOGIN_FORM.PASSWORD] = isErrorInPassword(field.value);
					break;
				case LOGIN_FORM.PASSWORD_REPEAT:
					newError[LOGIN_FORM.PASSWORD_REPEAT] = isErrorInPasswordRepeat(
						field.value,
						password,
					);
					break;
				default:
					break;
			}

			setError(newError);
		},
	};
};
