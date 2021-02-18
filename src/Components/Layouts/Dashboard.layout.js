import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Reuseables/Navbar';
import PageHeader from '../Reuseables/PageHeader';

const DashboardLayout = ({
   title,
   path,
   pathName,
   component: Component,
   ...rest
}) => {
   return (
      <div>
         <Navbar />
         <PageHeader title={title} path={path} pathName={pathName} />
         <Route path={path} component={Component} {...rest} />
      </div>
   );
};

export default DashboardLayout;
