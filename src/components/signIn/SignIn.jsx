import { useState } from 'react';
import { Button, FormInput } from '..';

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

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};

export default SignIn;
