import React, { useEffect } from 'react';

export default function Message() {
  useEffect(() => {
    console.log("user is logged in");

    return () => console.log('Bye !');
  }, []);

  return <h1>User is logged in</h1>;
}