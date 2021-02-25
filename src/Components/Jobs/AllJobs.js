import React from 'react';
import PageHeader from '../Reuseables/PageHeader';

const AllJobs = () => {
   return (
      <>
         <PageHeader
            title={'Job Listing'}
            pathName={'Job Listing'}
            path={'/jobs/allJobs'}
         />
         All Jobs
      </>
   );
};

export default AllJobs;
