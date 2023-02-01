import React from 'react';
import './Card.scss';

type CardProps = {
	children: React.ReactNode;
	className?: string;
};

const Card = ({ children }: CardProps) => {
	return <div className='card-container'>{children}</div>;
};

Card.Body = ({ children, className, ...rest }: CardProps) => {
	return (
		<div className={`card-body ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Card;
