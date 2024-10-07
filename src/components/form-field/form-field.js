import React from 'react';
import styles from './form-field.module.css';

export const FormField = ({
    fieldType,
    fieldName,
	error,
	register,
}) => {
	return (
		<>
			{error && <div className={styles.errorLabel}>{error}</div>}
			<input
				className={styles.input}
				type={fieldType}
				name={fieldName}
				{...register(fieldName)}
			></input>
		</>
	);
};
