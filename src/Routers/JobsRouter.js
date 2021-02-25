import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import PageHeader from '../Components/Reuseables/PageHeader';

import Navbar from '../Components/Reuseables/Navbar';
import Footer from '../Components/Reuseables/Footer';

import AllJobs from '../Components/Jobs/AllJobs';
import JobSingle from '../Components/Jobs/JobSingle';

const CompanyRouter = ({ match }) => {
   console.log('match.url', match.url);

   return (
      <div>
         <Navbar />
         <Switch>
            <Route
               exact
               path={match.url + '/single/:id'}
               component={JobSingle}
            />
            <Route
               exact
               path={match.url + '/AllJobs'}
               component={AllJobs}
            />
         </Switch>
         <Footer />
      </div>
   );
};

export default withRouter(CompanyRouter);
