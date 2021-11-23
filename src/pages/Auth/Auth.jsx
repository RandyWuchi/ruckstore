import { SignIn, SignUp } from '../../components';
import './auth.scss';

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
