import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import CompanyDashboard from '../Components/Dashboard/CompanyDashboard';
import DashboardLayout from '../Components/Layouts/Dashboard.layout';

const CompanyRouter = ({ match }) => {
   console.log('match.url', match.url);

   return (
      <Switch>
         <DashboardLayout
            exact
            path={match.url + '/dashboard'}
            pathName='Company Dashboard'
            title='Company Dashboard'
            component={CompanyDashboard}
         />
      </Switch>
   );
};

export default withRouter(CompanyRouter);
