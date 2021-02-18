import React from 'react';
import {
   AppBar,
   withStyles,
   Toolbar,
   IconButton,
   Typography,
   Button,
   useTheme,
} from '@material-ui/core';
import {
   Menu as MenuIcon,
   Search as SearchIcon,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

import Styles from '../../Styles/reuseables/Navbar.styles';

const Navbar = (props) => {
   const theme = useTheme();
   const styleProps = {
      ...props,
      theme,
   };

   const classes = Styles(styleProps);
   return (
      <AppBar
         position='static'
         color='transparent'
         className={classes.AppBar}
      >
         <Toolbar>
            <div className={classes.title}>
               <Typography variant='h4'>JBDesks</Typography>
            </div>
            <div className={classes.NavLinks}>
               <Typography variant='h6' className={classes.LinkItem}>
                  Home
               </Typography>
               <Typography variant='h6' className={classes.LinkItem}>
                  Jobs
               </Typography>
               <Typography variant='h6' className={classes.LinkItem}>
                  Candiates
               </Typography>
               <Typography variant='h6' className={classes.LinkItem}>
                  Pages
               </Typography>
               <Typography variant='h6' className={classes.LinkItem}>
                  Dashboard
               </Typography>
               <Typography variant='h6' className={classes.LinkItem}>
                  Blog
               </Typography>
               <Typography variant='h6' className={classes.LinkItem}>
                  Contact
               </Typography>
               <SearchIcon
                  className={`${classes.SearchIcon}`}
               ></SearchIcon>
            </div>
            <div className={classes.ProfileBox}>
               <div>
                  <img
                     style={{
                        width: 60,
                        cursor: 'pointer',
                     }}
                     src='https://ui-avatars.com/api/?rounded=true'
                     alt=''
                  />
               </div>
               <div className={classes.ProfileTxt}>
                  <p className={classes.Txt1}>Luca Wallace</p>
                  <p className={classes.Txt2}>Luca@example.com</p>
               </div>
               <div className={classes.toggleBtn}></div>
            </div>
            {/* <IconButton
               edge='start'
               className={classes.menuButton}
               color='inherit'
               aria-label='menu'
            >
               <MenuIcon />
            </IconButton> */}
         </Toolbar>
      </AppBar>
   );
};

export default withRouter(Navbar);
