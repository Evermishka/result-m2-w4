import styles from './App.module.css';
import './App.css';
import { useEffect, useRef } from 'react';
import { LOGIN_FORM } from './consts';
import { FormField } from './components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormFieldsSchema } from './utils';

const sendFormData = (formData) => {
	console.log('formData', formData);
};

export const App = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordRepeat: '',
		},
		resolver: yupResolver(loginFormFieldsSchema),
		mode: 'all',
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const passwordRepeatError = errors.passwordRepeat?.message;

	const isEmptyField = Object.values(getValues()).some((value) => value === '');

	const isSubmitDisabled =
		!!emailError || !!passwordError || !!passwordRepeatError || isEmptyField;

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (!isSubmitDisabled) {
			submitButtonRef.current.focus();
		}		
	}, [isSubmitDisabled]);

	return (
		<div className="App">
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				<FormField
					fieldType="text"
					fieldName={LOGIN_FORM.EMAIL}
					error={emailError}
					register={register}
				/>
				<FormField
					fieldType="text"
					fieldName={LOGIN_FORM.PASSWORD}
					error={passwordError}
					register={register}
				/>
				<FormField
					fieldType="text"
					fieldName={LOGIN_FORM.PASSWORD_REPEAT}
					error={passwordRepeatError}
					register={register}
				/>
				<button
					className={styles.button}
					type="submit"
					disabled={isSubmitDisabled}
					ref={submitButtonRef}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
