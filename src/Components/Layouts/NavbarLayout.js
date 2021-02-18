import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Reuseables/Navbar';

const NavbarLayout = ({
   component: Component,
   path: Path,
   ...rest
}) => {
   console.log('Path', Path);
   return (
      <>
         <Navbar />
         <Route exact component={Component} path={Path} {...rest} />
      </>
   );
};

export default NavbarLayout;
