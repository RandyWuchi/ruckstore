import './button.scss';

const Button = ({ children, ...otherButtonProps }) => {
  return (
    <button className="button" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default Button;
