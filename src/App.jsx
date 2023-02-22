import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { SocialMediaUsersProvider } from './commons';
import { Home } from './Pages/Home/Home';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1>Loanding...</h1>;
  return (
    <SocialMediaUsersProvider>
      <Home />
    </SocialMediaUsersProvider>
  );
}

export default App;
