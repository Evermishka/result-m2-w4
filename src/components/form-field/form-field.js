import React from 'react';
import styles from './form-field.module.css';

export const FormField = ({
    fieldType,
    fieldName,
    fieldValue,
	error,
	isErrorShown,
	handleChange,
	handleBlur,
}) => {
	return (
		<>
			{error[fieldName].length > 0 &&
				isErrorShown[fieldName] && (
					<ul className={styles.errorsList}>
						{error[fieldName].map((passwordError) => (
							<li className={styles.errorLabel} key={passwordError}>
								{passwordError}
							</li>
						))}
					</ul>
				)}
			<input
				className={styles.input}
				type={fieldType}
				name={fieldName}
				value={fieldValue}
				onChange={handleChange}
				onBlur={handleBlur}
			></input>
		</>
	);
};
