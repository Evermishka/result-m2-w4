import { LOGIN_FORM } from '../consts';
import { useState } from 'react';
import { useFormStore, useFormValidation } from '../hooks';

const sendFormData = (formData) => {
	console.log(formData);
};

const isErrorShownInitialState = {
	[LOGIN_FORM.EMAIL]: false,
	[LOGIN_FORM.PASSWORD]: false,
	[LOGIN_FORM.PASSWORD_REPEAT]: false,
};

export const useFormHandler = () => {
	const { getState, updateState } = useFormStore();
	const { email, password, passwordRepeat } = getState();

	const { getError, updateError } = useFormValidation();
	const error = getError();

	const [isErrorShown, setIsErrorShown] = useState(isErrorShownInitialState);

    const isSubmitDisabled = 
		() =>
			Object.values(error).some((error) => error.length > 0) ||
			email.length === 0 ||
			password.length === 0 ||
			passwordRepeat.length === 0;

	return {
		getState: () => getState(),

		getError: () => getError(),

		getIsSubmitDisabled: () => isSubmitDisabled,

		getIsErrorShown: () => isErrorShown,

		handleChange: ({ target }) => {
			updateState(target.name, target.value);
			updateError(target, getState()[LOGIN_FORM.PASSWORD]);
		},

		handleBlur: ({ target }) => {
			setIsErrorShown({ ...isErrorShown, [target.name]: true });
		},

		handleSubmit: (event) => {
			event.preventDefault();
			sendFormData(getState());
		},
	};
};
