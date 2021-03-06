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
   Box,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Styles from '../../Styles/Company Styles/dashboard.styles';
import image from '../../Assets/Images/companyImg.png';

import rc1Img from '../../Assets/Images/rc1.png';
import rc2Img from '../../Assets/Images/rc2.png';
import rc3Img from '../../Assets/Images/rc3.png';
import rc4Img from '../../Assets/Images/rc4.png';
import Chart from './Chart/Chart';

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

const CompanyDashboard = () => {
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
                           marginBottom: 30,
                           margin: 'auto',
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
                           <div>Manage Jobs</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <ResumeIcon />
                           </div>
                           <div>Applications</div>
                        </div>
                     </li>
                     <li className={classes.NavItem}>
                        <div className={classes.ListItemContent}>
                           <div className={classes.ListIcon}>
                              <FavoriteIcon />
                           </div>
                           <div>Post New Job</div>
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
                           <h3>Webstrot Technology</h3>
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

                  <Grid item xs={12}>
                     <List className={classes.Section3B}>
                        <ListItem
                           className={classes.Section3BListItem}
                        >
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
                                 sm={2}
                                 md={4}
                                 lg={2}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#FF9500',
                                 }}
                              >
                                 <i class='fas fa-book'></i>
                              </Grid>
                              <Grid
                                 item
                                 xs={8}
                                 style={{
                                    paddingLeft: 30,
                                 }}
                              >
                                 <ListItemText
                                    primary='360'
                                    secondary='Jobs Posted'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                        <ListItem
                           className={classes.Section3BListItem}
                        >
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
                                 sm={2}
                                 md={4}
                                 lg={2}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#FF5E3A',
                                 }}
                              >
                                 <i class='fas fa-user'></i>
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
                                    secondary='Shortlisted Resume'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                        <ListItem
                           className={classes.Section3BListItem}
                        >
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
                                 sm={2}
                                 md={4}
                                 lg={2}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#1FBBA6',
                                 }}
                              >
                                 <i class='fas fa-eye'></i>
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
                                    secondary='Total Page View'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                        <ListItem
                           className={classes.Section3BListItem}
                        >
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
                                 sm={2}
                                 md={4}
                                 lg={2}
                                 className={classes.Icon}
                                 style={{
                                    backgroundColor: '#76C80E',
                                 }}
                              >
                                 <i class='fas fa-envelope-open-text'></i>
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
                                    secondary='Total Applications'
                                 />
                              </Grid>
                           </Grid>
                        </ListItem>
                     </List>
                  </Grid>

                  <Grid item xs={12} className={classes.ChartGrid}>
                     <Chart />
                  </Grid>
                  <Grid
                     item
                     md={6}
                     xs={12}
                     className={classes.Section2}
                  >
                     <div className={classes.Section2A}>
                        <h3 className={classes.Section2Header}>
                           Company Overview
                        </h3>
                        <List>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <CalenderIcon
                                    style={{
                                       color: '#ff5353',
                                    }}
                                 />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Categories :'
                                 secondary='Desgin and Creative'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <LocationIcon
                                    style={{
                                       color: '#ff5353',
                                    }}
                                 />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Location :'
                                 secondary='Los Angeles , California'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <InfoIco
                                    style={{
                                       color: '#ff5353',
                                    }}
                                 />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Hotline :'
                                 secondary='1021234112'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <EmailIcon
                                    style={{
                                       color: '#ff5353',
                                    }}
                                 />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Email :'
                                 secondary='luca@lucee.com'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <PersonIcon
                                    style={{
                                       color: '#ff5353',
                                    }}
                                 />
                              </ListItemAvatar>
                              <ListItemText
                                 primary='Company Size :'
                                 secondary='20-50'
                              />
                           </ListItem>
                           <ListItem className={classes.ListItem}>
                              <ListItemAvatar>
                                 <PublicIcon
                                    style={{
                                       color: '#ff5353',
                                    }}
                                 />
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
                              padding: '20px 20px',
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
                  {/* <Grid
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
                     
                  </Grid> */}
                  <Grid
                     item
                     xs={12}
                     className={classes.Section5GridMain}
                  >
                     <Grid
                        container
                        className={classes.Section5GridContainer}
                     >
                        <Grid
                           item
                           md={7}
                           sm={12}
                           className={classes.Section5A}
                        >
                           <h3 className={classes.Section2Header}>
                              Recent Applicants
                           </h3>
                           <List className={classes.ListBorder}>
                              <ListItem
                                 className={`${classes.ListItem} ${classes.ListItemDivider}`}
                              >
                                 <Grid container>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={8}
                                       style={{
                                          display: 'flex',
                                          justifyContent:
                                             'space-evenly',
                                       }}
                                    >
                                       <div>
                                          <img src={rc1Img} alt='' />
                                       </div>
                                       <Box
                                          display='flex'
                                          flexDirection='column'
                                          alignItems='flex-start'
                                          justifyContent='center'
                                       >
                                          <h5>Aradya S.</h5>
                                          <p
                                             style={{
                                                color: '#777777',
                                             }}
                                          >
                                             App Designer
                                          </p>
                                       </Box>
                                    </Grid>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={4}
                                       style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'flex-end',
                                       }}
                                    >
                                       <Button
                                          variant='contained'
                                          className={
                                             classes.ProfileBtn
                                          }
                                          style={{
                                             borderRadius: 0,
                                             marginLeft: 'unset',
                                          }}
                                       >
                                          Send
                                       </Button>
                                    </Grid>
                                 </Grid>
                              </ListItem>
                              <ListItem
                                 className={`${classes.ListItem} ${classes.ListItemDivider}`}
                              >
                                 <Grid container>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={8}
                                       style={{
                                          display: 'flex',
                                          justifyContent:
                                             'space-evenly',
                                       }}
                                    >
                                       <div>
                                          <img src={rc2Img} alt='' />
                                       </div>
                                       <Box
                                          display='flex'
                                          flexDirection='column'
                                          alignItems='flex-start'
                                          justifyContent='center'
                                       >
                                          <h5>Aradya S.</h5>
                                          <p
                                             style={{
                                                color: '#777777',
                                             }}
                                          >
                                             App Designer
                                          </p>
                                       </Box>
                                    </Grid>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={4}
                                       style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'flex-end',
                                       }}
                                    >
                                       <Button
                                          variant='contained'
                                          className={
                                             classes.ProfileBtn
                                          }
                                          style={{
                                             borderRadius: 0,
                                             marginLeft: 'unset',
                                          }}
                                       >
                                          Send
                                       </Button>
                                    </Grid>
                                 </Grid>
                              </ListItem>
                              <ListItem
                                 className={`${classes.ListItem} ${classes.ListItemDivider}`}
                              >
                                 <Grid container>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={8}
                                       style={{
                                          display: 'flex',
                                          justifyContent:
                                             'space-evenly',
                                       }}
                                    >
                                       <div>
                                          <img src={rc3Img} alt='' />
                                       </div>
                                       <Box
                                          display='flex'
                                          flexDirection='column'
                                          alignItems='flex-start'
                                          justifyContent='center'
                                       >
                                          <h5>Aradya S.</h5>
                                          <p
                                             style={{
                                                color: '#777777',
                                             }}
                                          >
                                             App Designer
                                          </p>
                                       </Box>
                                    </Grid>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={4}
                                       style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'flex-end',
                                       }}
                                    >
                                       <Button
                                          variant='contained'
                                          className={
                                             classes.ProfileBtn
                                          }
                                          style={{
                                             borderRadius: 0,
                                             marginLeft: 'unset',
                                          }}
                                       >
                                          Send
                                       </Button>
                                    </Grid>
                                 </Grid>
                              </ListItem>
                              <ListItem
                                 className={`${classes.ListItem}`}
                              >
                                 <Grid container>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={8}
                                       style={{
                                          display: 'flex',
                                          justifyContent:
                                             'space-evenly',
                                       }}
                                    >
                                       <div>
                                          <img src={rc4Img} alt='' />
                                       </div>
                                       <Box
                                          display='flex'
                                          flexDirection='column'
                                          alignItems='flex-start'
                                          justifyContent='center'
                                       >
                                          <h5>Aradya S.</h5>
                                          <p
                                             style={{
                                                color: '#777777',
                                             }}
                                          >
                                             App Designer
                                          </p>
                                       </Box>
                                    </Grid>
                                    <Grid
                                       item
                                       xs={12}
                                       sm={4}
                                       style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'flex-end',
                                       }}
                                    >
                                       <Button
                                          variant='contained'
                                          className={
                                             classes.ProfileBtn
                                          }
                                          style={{
                                             borderRadius: 0,
                                             marginLeft: 'unset',
                                          }}
                                       >
                                          Send
                                       </Button>
                                    </Grid>
                                 </Grid>
                              </ListItem>
                           </List>
                        </Grid>
                        <Grid
                           item
                           md={5}
                           sm={12}
                           className={classes.Section5B}
                        >
                           <h3 className={classes.Section2Header}>
                              Recent Applicants
                           </h3>
                           <List className={classes.ListBorder}>
                              <ListItem
                                 className={`${classes.ListItem} ${classes.ListItemDivider}`}
                              >
                                 <ListItemAvatar>
                                    <LeftIcon />
                                 </ListItemAvatar>
                                 <ListItemText
                                    primary='Dobrick Published An Article :'
                                    secondary='5 hours ago'
                                 />
                              </ListItem>
                              <ListItem
                                 className={`${classes.ListItem} ${classes.ListItemDivider}`}
                              >
                                 <ListItemAvatar>
                                    <LeftIcon />
                                 </ListItemAvatar>
                                 <ListItemText
                                    secondary='5 hours ago'
                                    primary='Dobrick Published An Article :'
                                 />
                              </ListItem>
                              <ListItem
                                 className={`${classes.ListItem} ${classes.ListItemDivider}`}
                              >
                                 <ListItemAvatar>
                                    <LeftIcon />
                                 </ListItemAvatar>
                                 <ListItemText
                                    primary='Someone Bookmarked You :'
                                    secondary='5 hours ago'
                                 />
                              </ListItem>
                              <ListItem
                                 className={`${classes.ListItem}`}
                              >
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

export default CompanyDashboard;
