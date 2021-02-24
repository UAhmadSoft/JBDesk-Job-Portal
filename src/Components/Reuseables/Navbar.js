import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

import {
   AppBar,
   Toolbar,
   Typography,
   useTheme,
   Drawer,
   Box,
   IconButton,
   Divider,
} from '@material-ui/core';
import { Close, Search as SearchIcon } from '@material-ui/icons';
import { v4 as uuid } from 'uuid';
import { Navigation } from 'react-minimal-side-navigation';

import { withRouter } from 'react-router-dom';

import Styles from '../../Styles/reuseables/Navbar.styles';

//  color: #F2396E;
//  border-bottom: 1px solid #F2396E;

const Navbar = (props) => {
   const theme = useTheme();
   const { location } = props;

   const styleProps = {
      ...props,
      theme,
   };

   const [drawerOpen, setDrawerOpen] = useState(false);

   const [searchValue, setSearchValue] = useState('');

   const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
   };

   const classes = Styles(styleProps);

   const isActive = (slug) => {
      console.log('slug', slug.toLowerCase());
      console.log(
         'location.pathName',
         location.pathname.toLowerCase()
      );
      return location.pathname
         .toLowerCase()
         .includes(slug.toLowerCase());
   };

   return (
      <>
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
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color:
                           location.pathname === '/'
                              ? theme.palette.pink
                              : '#222',
                        borderBottom:
                           location.pathname === '/'
                              ? `1px solid ${theme.palette.pink}`
                              : '',
                     }}
                  >
                     Home
                  </Typography>
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color: isActive('jobs')
                           ? theme.palette.pink
                           : '#222',
                        borderBottom: isActive('jobs')
                           ? `1px solid ${theme.palette.pink}`
                           : '',
                     }}
                  >
                     Jobs
                  </Typography>
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color: isActive('candidates')
                           ? theme.palette.pink
                           : '#222',
                        borderBottom: isActive('candidates')
                           ? `1px solid ${theme.palette.pink}`
                           : '',
                     }}
                  >
                     Candiates
                  </Typography>
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color: isActive('pages')
                           ? theme.palette.pink
                           : '#222',
                        borderBottom: isActive('pages')
                           ? `1px solid ${theme.palette.pink}`
                           : '',
                     }}
                  >
                     Pages
                  </Typography>
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color: isActive('dashboard')
                           ? theme.palette.pink
                           : '#222',
                        borderBottom: isActive('dashboard')
                           ? `1px solid ${theme.palette.pink}`
                           : '',
                     }}
                  >
                     Dashboard
                  </Typography>
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color: isActive('blog')
                           ? theme.palette.pink
                           : '#222',
                        borderBottom: isActive('blog')
                           ? `1px solid ${theme.palette.pink}`
                           : '',
                     }}
                  >
                     Blog
                  </Typography>
                  <Typography
                     variant='h6'
                     className={classes.LinkItem}
                     style={{
                        color: isActive('contact')
                           ? theme.palette.pink
                           : '#222',
                        borderBottom: isActive('contact')
                           ? `1px solid ${theme.palette.pink}`
                           : '',
                     }}
                  >
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
                  <div
                     className={classes.toggleBtn}
                     onClick={toggleDrawer}
                  ></div>
               </div>
            </Toolbar>
         </AppBar>
         <Drawer
            open={drawerOpen}
            onClose={toggleDrawer}
            className={classes.Drawer}
         >
            <Box
               display='flex'
               justifyContent='space-between'
               className={classes.DrawerHeader}
            >
               <div>
                  <h3 style={{ fontSize: '1.8em', color: '#2D3A4b' }}>
                     JobDesks
                  </h3>
               </div>
               <div>
                  <IconButton
                     className={classes.CloseIcon}
                     onClick={toggleDrawer}
                  >
                     <Close />
                  </IconButton>
               </div>
            </Box>
            <Divider />
            <SearchBar
               className={classes.DrawerSearchbar}
               value={searchValue}
               onChange={(newValue) => setSearchValue(newValue)}
            />
            <Divider />
            <div className={classes.DrawerNav}>
               <Navigation
                  // you can use your own router's api to get pathname
                  activeItemId='/management/members'
                  onSelect={({}) => {
                     // maybe push to the route
                  }}
                  items={[
                     {
                        title: 'Home',
                        itemId: uuid(),
                        elemBefore: () => <div name='users' />,
                        subNav: [
                           {
                              title: 'Home |',
                              itemId: uuid(),
                           },
                           {
                              title: 'Home ||',
                              itemId: uuid(),
                           },
                           {
                              title: 'Home ||',
                              itemId: uuid(),
                           },
                        ],
                     },
                     {
                        title: 'Jobs',
                        itemId: uuid(),
                        subNav: [
                           {
                              title: 'Services',
                              itemId: uuid(),
                           },
                           {
                              title: 'Services ||',
                              itemId: uuid(),
                           },
                        ],
                     },
                     {
                        title: 'Candidates',
                        itemId: uuid(),
                        subNav: [
                           {
                              title: 'Pricing Plans',
                              itemId: uuid(),
                           },
                           {
                              title: 'Login / Register',
                              itemId: uuid(),
                           },
                           {
                              title: 'Error 404',
                              itemId: uuid(),
                           },
                           {
                              title: 'Error 404 ||',
                              itemId: uuid(),
                           },
                           {
                              title: 'Coming Soon',
                              itemId: uuid(),
                           },
                           {
                              title: 'Coming Soon',
                              itemId: uuid(),
                           },
                           {
                              title: 'About Us',
                              itemId: uuid(),
                           },
                           {
                              title: 'Services',
                              itemId: uuid(),
                           },
                           {
                              title: 'Error 404 ||',
                              itemId: uuid(),
                           },
                           {
                              title: 'Error 404 ||',
                              itemId: uuid(),
                           },
                           {
                              title: 'Error 404 ||',
                              itemId: uuid(),
                           },
                        ],
                     },
                     {
                        title: 'Employees',
                        itemId: uuid(),
                        subNav: [
                           {
                              title: 'About Us',
                              itemId: uuid(),
                           },
                           {
                              title: 'About Us ||',
                              itemId: uuid(),
                           },
                        ],
                     },
                     {
                        title: 'Blog',
                        itemId: uuid(),
                        subNav: [
                           {
                              title: 'Blog width Sidebar',
                              itemId: uuid(),
                           },
                           {
                              title: 'Blog Full WIdth',
                              itemId: uuid(),
                           },
                           {
                              title: 'Blog ||| Column ',
                              itemId: uuid(),
                           },
                           {
                              title: 'Blog || Column ',
                              itemId: uuid(),
                           },
                           {
                              title: 'Blog Single',
                              itemId: uuid(),
                           },
                        ],
                     },
                     {
                        title: 'Contact Us',
                        itemId: uuid(),
                        subNav: [
                           {
                              title: 'Contact Us',
                              itemId: uuid(),
                           },
                           {
                              title: 'Contact Us ||',
                              itemId: uuid(),
                           },
                        ],
                     },
                  ]}
               />
            </div>
         </Drawer>
      </>
   );
};

export default withRouter(Navbar);
