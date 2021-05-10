import React from 'react';
import { Router, RouteComponentProps } from "@reach/router"
import Dashboard from './views/dashboard';
import { Flex } from '@chakra-ui/layout';

const ProtectedApp = () => {
  let DashboardRoute = (props: RouteComponentProps) => <Dashboard />

  return (
    <Flex>
      <nav></nav>
      <Router>
        <DashboardRoute default path="/dashboard" />
      </Router>
      <footer></footer>
    </Flex>
  );
}

export default ProtectedApp;
