import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import CandidateDashboard from '../Components/Dashboard/CandidateDashboard';

const CandidateRouter = ({ match }) => {
   return (
      <Switch>
         <Route
            exact
            path={match.url + '/dashboard'}
            component={CandidateDashboard}
         />
      </Switch>
   );
};

export default withRouter(CandidateRouter);
