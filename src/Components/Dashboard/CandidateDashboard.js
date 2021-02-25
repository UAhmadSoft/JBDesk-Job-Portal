import React, { useState } from 'react';
import {
   Button,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   useTheme,
   ListItemText,
   Drawer,
} from '@material-ui/core';

import Styles from '../../Styles/Candidate Styles/dashboard.styles';
import image from '../../Assets/Images/profileImg.jpg';

import {
   Palette as PaletteIcon,
   InsertDriveFile as ResumeIcon,
   Favorite as FavoriteIcon,
   Check as CheckBoxIcon,
   Email as EmailIcon,
   LocalOffer as Priceicon,
   PowerSettingsNew as PowerIcon,
   CalendarToday as CalenderIcon,
   LocationOn as LocationIcon,
   Info as InfoIco,
   Public as PublicIcon,
   ChevronLeft as LeftIcon,
} from '@material-ui/icons/';
import {
   Edit,
   Facebook,
   Trash2,
   Twitter,
   Linkedin,
   Briefcase,
} from 'react-feather';

const CandidateDashboard = () => {
   const theme = useTheme();
   const styleProps = {
      theme,
   };

   const classes = Styles(styleProps);
   return (
      <>
         <Grid
            container
            spacing={4}
            className={classes.GridContainer}
         >
            <Grid item xs={12} md={3} sm={12}>
               <div
                  style={{
                     textAlign: 'center',
                     border: '1px solid #e2e2e2',
                  }}
               >
                  <div className={classes.ProfileSection}>
                     <img
                        style={{
                           width: '100%',
                           marginBottom: 30,
                        }}
                        src={image}
                        alt='Profile Picture'
                     />
                     <div>
                        <p>Luco Wallace</p>
                        <p className={classes.Txt2}>@Username</p>
                     </div>
                     <div className={classes.ProfileDetails}>
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                           }}
                        >
                           <p>Profile</p>
                           <p>70%</p>
                        </div>
                        <div className={classes.ProgressBar}>
                           <span className={classes.Progress}></span>
                        </div>
                     </div>
                  </div>
                  <ul className={classes.NavLinks}>
                     <li
                        className={`${classes.NavItem} ${classes.NavItemActive}`}
                     >
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <PaletteIcon />
                           </div>
                           <div>Dashboard</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <Edit />
                           </div>
                           <div>Edit Profile</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <ResumeIcon />
                           </div>
                           <div>Resume</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <FavoriteIcon />
                           </div>
                           <div>Favourite</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <CheckBoxIcon />
                           </div>
                           <div>Applied Job</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <EmailIcon />
                           </div>
                           <div>Message</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <Priceicon />
                           </div>
                           <div>Pricing Plans</div>
                        </div>
                     </li>
                  </ul>
                  <ul className={classes.LogoutSection}>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <PowerIcon />
                           </div>
                           <div>Logout</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <Trash2 />
                           </div>
                           <div>Delete Profile</div>
                        </div>
                     </li>
                  </ul>
               </div>
            </Grid>
            <Grid item xs={12} md={9} sm={12}>
               <Grid container spacing={4}>
                  <Grid item xs={12}>
                     <div className={classes.Section1}>
                        <div
                           style={{
                              width: '100px',
                           }}
                        >
                           <img
                              style={{
                                 width: '100%',
                              }}
                              src={image}
                              alt='hahaaha'
                           />
                        </div>
                        <div className={classes.Section1Details}>
                           <h3>Luca Wallace</h3>
                           <ul style={{ display: 'inline-flex' }}>
                              <li
                                 style={{
                                    marginRight: 25,
                                    display: 'flex',
                                    alignItems: 'center',
                                 }}
                              >
                                 <Briefcase
                                    className={classes.ListIcon}
                                    style={{
                                       marginRight: 10,
                                    }}
                                 />
                                 <span>Software Firm</span>
                              </li>
                              <li
                                 style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                 }}
                              >
                                 <LocationIcon
                                    className={classes.ListIcon}
                                    style={{
                                       marginRight: 10,
                                    }}
                                 />
                                 <span>Los Angeles</span>
                              </li>
                           </ul>
                        </div>
                        <Button
                           variant='contained'
                           className={classes.ProfileBtn}
                        >
                           View Profile
                        </Button>
                     </div>
                  </Grid>
                  <Grid
                     item
                     md={6}
                     xs={12}
                     className={classes.Section2}
                  >
                     <div className={classes.Section2A}>
                        <h3 className={classes.Section2Header}>
                           Basic Information
                        </h3>
                        <List>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <CalenderIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Job Description :'
                                 secondary='Graphic Designer'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <LocationIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Location :'
                                 secondary='Los Angeles , California'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <InfoIco />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Phone :'
                                 secondary='0312312312'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <EmailIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Email :'
                                 secondary='luca@lucee.com'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <PublicIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Website :'
                                 secondary='www.example.com'
                              />
                           </ListItem>
                        </List>
                     </div>
                     <div className={classes.Section2B}>
                        <h3 className={classes.Section2Header}>
                           Social Profile
                        </h3>
                        <div
                           style={{
                              display: 'flex',
                              padding: '0px 20px',
                              flexWrap: 'wrap',
                           }}
                        >
                           <ListItemAvatar
                              className={classes.ListAvatar}
                           >
                              <Facebook
                                 className={classes.ListIcon2}
                              />
                           </ListItemAvatar>
                           <ListItemAvatar
                              className={classes.ListAvatar}
                           >
                              <Twitter
                                 className={classes.ListIcon2}
                              />
                           </ListItemAvatar>
                           {/* <ListItem className={classes.ListItem}>
                               <ListItemAvatar>
                                  <Google />
                               </ListItemAvatar>
                            </ListItem> */}
                           <ListItemAvatar
                              className={classes.ListAvatar}
                           >
                              <Linkedin
                                 className={classes.ListIcon2}
                              />
                           </ListItemAvatar>
                        </div>
                     </div>
                  </Grid>
                  <Grid
                     item
                     md={6}
                     xs={12}
                     className={classes.Section3}
                  >
                     <div className={classes.Section3A}>
                        <h3 className={classes.Section2Header}>
                           Our Location
                        </h3>
                     </div>
                     <List className={classes.Section3B}>
                        <ListItem>
                           <Grid
                              container
                              style={{
                                 border: '1px solid #e2e2e2e2',
                              }}
                              alignItems='center'
                           >
                              <Grid
                                 item
                                 xs={4}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#FF9500',
                                 }}
                              >
                                 <i className='fas fa-book'></i>
                              </Grid>
                              <Grid
                                 item
                                 xs={8}
                                 style={{
                                    paddingLeft: 30,
                                 }}
                              >
                                 <ListItemText
                                    primary='260'
                                    secondary='Applied Jobs'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                        <ListItem>
                           <Grid
                              container
                              style={{
                                 border: '1px solid #e2e2e2e2',
                              }}
                              alignItems='center'
                           >
                              <Grid
                                 item
                                 xs={4}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#1FBBA6',
                                 }}
                              >
                                 <i className='fas fa-book'></i>
                              </Grid>
                              <Grid
                                 item
                                 xs={8}
                                 style={{
                                    paddingLeft: 30,
                                 }}
                              >
                                 <ListItemText
                                    primary='1608'
                                    secondary='Favourite Jobs'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                        <ListItem>
                           <Grid
                              container
                              style={{
                                 border: '1px solid #e2e2e2e2',
                              }}
                              alignItems='center'
                           >
                              <Grid
                                 item
                                 xs={4}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#76C80E',
                                 }}
                              >
                                 <i className='fas fa-book'></i>
                              </Grid>
                              <Grid
                                 item
                                 xs={8}
                                 style={{
                                    paddingLeft: 30,
                                 }}
                              >
                                 <ListItemText
                                    primary='11200'
                                    secondary='Companies Viewed'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                     </List>
                  </Grid>
                  <Grid item xs={12} className={classes.Section4}>
                     <h3 className={classes.Section2Header}>
                        Recent Activity
                     </h3>
                     <List>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <LeftIcon />
                           </ListItemAvatar>
                           <ListItemText
                              primary='Our Resume Updated!Dobrick Published An Article :'
                              secondary='5 hours ago'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <LeftIcon />
                           </ListItemAvatar>
                           <ListItemText
                              secondary='5 hours ago'
                              primary='Dobrick Published An Article :'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <LeftIcon />
                           </ListItemAvatar>
                           <ListItemText
                              primary='Someone Bookmarked You :'
                              secondary='5 hours ago'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <LeftIcon />
                           </ListItemAvatar>
                           <ListItemText
                              primary='Your Resume Updated! :'
                              secondary='5 hours ago'
                           />
                        </ListItem>
                     </List>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item xs={12}>
               <Grid
                  container
                  style={{
                     alignItems: 'center',
                  }}
               >
                  <Grid item xs={12} sm={8}>
                     <h1>Looking For A Job</h1>
                     <p>
                        Your next level Product developemnt company
                        assetsYour next level Product
                     </p>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={4}
                     style={{
                        display: 'flex',
                     }}
                  >
                     <Button
                        variant='contained'
                        className={classes.ProfileBtn}
                        style={{
                           padding: '5px 55px',
                           borderRadius: 0,
                           fontSize: '1.3em',
                        }}
                     >
                        Submit
                     </Button>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
};

export default CandidateDashboard;
