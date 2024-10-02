import { useState } from 'react';
import { LOGIN_FORM } from '../consts';

const initialState = {
	[LOGIN_FORM.EMAIL]: '',
	[LOGIN_FORM.PASSWORD]: '',
	[LOGIN_FORM.PASSWORD_REPEAT]: '',
};

export const useFormStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
	};
};
