import { forwardRef } from 'react';
import './FormInput.scss';

type FormInputProps = {
	type?: string;
	name: string;
	label?: string;
	onChange?: any;
	value?: any;
} & any;

const FormInput = forwardRef(
	(
		{ type, name, label, onChange, value, error, ...rest }: FormInputProps,
		ref: any
	) => {
		return (
			<div className='form-input-container' data-error=''>
				{label && <label htmlFor={name}>{label}</label>}
				<input
					className={error ? 'error' : ''}
					type={type}
					name={name}
					id={name}
					ref={ref}
					value={value}
					onChange={onChange}
					{...rest}
				/>
				{error && <div className='error-tooltip'>{error}</div>}
			</div>
		);
	}
);

export default FormInput;
