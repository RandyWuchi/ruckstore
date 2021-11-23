import { useState } from 'react';
import { Button, FormInput } from '..';
import { signInWithGoogle } from '../../firebase/firebase';

import './signIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };
  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="buttons">
          <Button type="submit">SIGN IN</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
