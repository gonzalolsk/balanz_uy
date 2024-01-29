import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
  }
  
  const Button = ({ children, className, type = 'button', ...others }: ButtonProps) => {
	return (
	  <button
		{...others}
		type={type}
		className={className}
	  >
		{children}
	  </button>
	);
  };
  

export default Button;