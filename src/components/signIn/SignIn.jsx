import { useState } from 'react';
import { Button, FormInput } from '..';
import { auth, signInWithGoogle } from '../../firebase/firebase';

import './signIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
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
          onChange={(e) => setEmail(e.target.value)}
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
