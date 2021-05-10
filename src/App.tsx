import React from 'react';
import Login from './views/login';
import { Router, RouteComponentProps } from "@reach/router"
import PassReset from './views/reset-password';
import Register from './views/register';
import ProtectedApp from './protected-app';
import useAuth from './hooks/auth';
import { Heading } from '@chakra-ui/layout';

const App = () => {
  let LoginRoute = (props: RouteComponentProps) => <Login />
  let PassResetRoute = (props: RouteComponentProps) => <PassReset />
  let RegisterRoute = (props: RouteComponentProps) => <Register />
  let AppRoute = (props: RouteComponentProps) => <ProtectedApp />

  const { isAuthenticating, authenticated } = useAuth()

  if(isAuthenticating) return <Heading as="h1">Loading...</Heading>
  return (
    <Router>
        <LoginRoute default />
        <PassResetRoute path="/reset-password" />
        <RegisterRoute path="/register" />
        {authenticated && <AppRoute path="/*" />}
    </Router>
  );
}

export default App;
