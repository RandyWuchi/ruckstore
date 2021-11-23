import { useState } from 'react';
import { Button, FormInput } from '..';
import { auth, createUserToDB } from '../../firebase/firebase';

import './signUp.scss';

const SignUp = () => {
  const [displayName, setdisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('The password you entered do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserToDB(user, { displayName });

      setdisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log('Error signing up:', error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          label="Display Name"
          required
          onChange={(e) => setdisplayName(e.target.value)}
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
