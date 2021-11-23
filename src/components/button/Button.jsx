import './button.scss';

const Button = ({ children, isGoogleSignIn, ...otherButtonProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default Button;
