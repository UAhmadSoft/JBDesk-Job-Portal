import {
   Grid,
   makeStyles,
   useTheme,
   withStyles,
} from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Styles = makeStyles((styles) => ({
   root: {
      background: `linear-gradient(
45deg
, rgba(209,72,127,1) 10%, rgba(248,54,106,1) 100%)`,
      padding: 15,
      color: '#Fff',
   },
}));

const PageHeader = ({ title, pathName }) => {
   const theme = useTheme();
   const styleProps = {
      theme,
   };

   const classes = Styles(styleProps);
   return (
      <div className={classes.root}>
         <Grid container className={classes.GridContainer}>
            <Grid item xs={12} sm={7}>
               <h1>{title}</h1>
            </Grid>
            <Grid
               item
               xs={12}
               sm={5}
               style={{
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <ul
                  style={{
                     listStyle: 'none',
                     padding: 0,
                     display: 'inline-flex',
                  }}
               >
                  <li
                     style={{
                        marginRight: 5,
                     }}
                  >
                     Home
                  </li>
                  <li
                     style={{
                        marginRight: 5,
                     }}
                  >
                     /
                  </li>
                  <li> {pathName}</li>
               </ul>
            </Grid>
         </Grid>
      </div>
   );
};

export default withRouter(withStyles(Styles)(PageHeader));
