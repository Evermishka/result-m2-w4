import styles from './App.module.css';
import './App.css';
import { useRef, useEffect } from 'react';
import { useFormHandler } from './hooks';
import { LOGIN_FORM } from './consts';
import { FormField } from './components';

export const App = () => {
	const {
		getState,
		getError,
		getIsSubmitDisabled,
		getIsErrorShown,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useFormHandler();
	
	const { email, password, passwordRepeat } = getState();

	const error = getError();

	const isErrorShown = getIsErrorShown();

	const isSubmitDisabled = getIsSubmitDisabled();

	const submitButtonRef = useRef(null);

	useEffect(() => {
		submitButtonRef.current.focus();
	}, [isSubmitDisabled]);

	return (
		<div className="App">
			<form className={styles.form} onSubmit={handleSubmit}>
				<FormField
					fieldType="text"
					fieldName={LOGIN_FORM.EMAIL}
					fieldValue={email}
					error={error}
					isErrorShown={isErrorShown}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
				<FormField
					fieldType="password"
					fieldName={LOGIN_FORM.PASSWORD}
					fieldValue={password}
					error={error}
					isErrorShown={isErrorShown}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
				<FormField
					fieldType="password"
					fieldName={LOGIN_FORM.PASSWORD_REPEAT}
					fieldValue={passwordRepeat}
					error={error}
					isErrorShown={isErrorShown}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
				<button
					className={styles.button}
					type="submit"
					disabled={isSubmitDisabled()}
					ref={submitButtonRef}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
