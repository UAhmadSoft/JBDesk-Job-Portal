import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import CandidateDashboard from '../Components/Dashboard/CandidateDashboard';
import DashboardLayout from '../Components/Layouts/Dashboard.layout';

const CandidateRouter = ({ match }) => {
   console.log('match.url', match.url);

   return (
      <Switch>
         <DashboardLayout
            exact
            path={match.url + '/dashboard'}
            pathName='Candidate Dashboard'
            title='Candidate Dashboard'
            component={CandidateDashboard}
         />
      </Switch>
   );
};

export default withRouter(CandidateRouter);
