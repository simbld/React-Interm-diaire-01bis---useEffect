import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    console.log('email has changed');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLoggout = (e) => {
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="elon@spacex.com"
          value={email}
          onChange={handleChangeEmail}
        />
        <input type="submit" value="submit" />
      </form>
      {isUserLoggedIn ? <Message /> : null}
      <button onClick={handleLoggout}>Loggout</button>
    </div>
  );
}
