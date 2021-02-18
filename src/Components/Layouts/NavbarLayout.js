import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Reuseables/Navbar';

const NavbarLayout = ({ component: Component, ...rest }) => {
   return (
      <>
         <Navbar />
         <Route exact {...rest} component={Component} />
      </>
   );
};

export default NavbarLayout;
