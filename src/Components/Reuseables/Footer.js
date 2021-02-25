import {
   Box,
   Typography,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   useTheme,
} from '@material-ui/core';
import React from 'react';

import {
   LocationOn as LocationIcon,
   Email as EmailIcon,
   Mail,
} from '@material-ui/icons/';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

import makeStyles from '../../Styles/reuseables/FooterStyles';
import { Link } from 'react-router-dom';

const Footer = (props) => {
   const theme = useTheme();
   const styleProps = {
      ...props,
      theme,
   };

   const classes = makeStyles(styleProps);

   return (
      <Box className={classes.root}>
         <Grid container>
            <Grid item md={4} sm={6} xs={12}>
               <div className={classes.title}>
                  <Typography variant='h4'>JBDesks</Typography>
               </div>
               <List>
                  <ListItem>
                     <ListItemAvatar>
                        <LocationIcon
                           className={classes.ListIcon}
                           style={{
                              marginRight: 10,
                           }}
                        />
                     </ListItemAvatar>
                     <ListItemText
                        className={classes.ListItemText}
                        primary='123 City Avenue, Floor 10,
Malbourne, Australia.'
                        secondary=''
                     ></ListItemText>
                  </ListItem>

                  <ListItem>
                     <ListItemAvatar>
                        <PhoneInTalkIcon
                           className={classes.ListIcon}
                           style={{
                              marginRight: 10,
                           }}
                        />
                     </ListItemAvatar>
                     <ListItemText
                        className={classes.ListItemText}
                        primary='1 -234 -456 -7890'
                        secondary='1 -234 -456 -7890'
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <ListItemAvatar>
                        <Mail
                           className={classes.ListIcon}
                           style={{
                              marginRight: 10,
                           }}
                        />
                     </ListItemAvatar>
                     <ListItemText
                        className={classes.ListItemText}
                        primary='Info@Jbdesks.Com'
                        secondary='Support@Jbdesks.Com'
                     ></ListItemText>
                  </ListItem>
               </List>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
               <div className={classes.title}>
                  <Typography variant='h4'>Features</Typography>
               </div>
               <List>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Job Management & Billing`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Time & Materials Tracking`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Standards Compliance`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Real Time GPS Tracking `}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={` Client Portal`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Powerful Workflow`}
                     ></ListItemText>
                  </ListItem>
               </List>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
               <div className={classes.title}>
                  <Typography variant='h4'>Browse</Typography>
               </div>
               <List>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Freelancers By Category`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={` Freelancers In USA`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Freelancers In UK`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Freelancers In Canada `}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Freelancers In Turkey`}
                     ></ListItemText>
                  </ListItem>
                  <ListItem>
                     <i
                        className={`fa fa-square ${classes.ListStyleIcon}`}
                     ></i>
                     <ListItemText
                        className={`${classes.ListItemText}`}
                        primary={`Find Jobs`}
                     ></ListItemText>
                  </ListItem>
               </List>
            </Grid>
         </Grid>
         <Box>
            <List
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  maxWidth: 250,
                  alignItems: 'center',
                  flexWrap: 'wrap',
               }}
            >
               <ListItem className={classes.FooterLinks}>
                  <Link to='#'>
                     <i className='fab fa-facebook-f'></i>
                  </Link>
               </ListItem>
               <ListItem className={classes.FooterLinks}>
                  <a to='#'>
                     <i className='fab fa-twitter'></i>
                  </a>
               </ListItem>
               <ListItem className={classes.FooterLinks}>
                  <a to='#'>
                     <i className='fab fa-linkedin-in'></i>
                  </a>
               </ListItem>
               <ListItem className={classes.FooterLinks}>
                  <a to='#'>
                     <i className='fab fa-google-plus-g'></i>
                  </a>
               </ListItem>
            </List>
         </Box>
         <div
            style={{
               marginTop: 20,
            }}
         >
            <i class='fa fa-copyright'></i>
            <p> 2021 JB Desks. All Rights Reserved.</p>
         </div>
      </Box>
   );
};

export default Footer;
