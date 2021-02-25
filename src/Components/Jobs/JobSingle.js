import React from 'react';
import PageHeader from '../Reuseables/PageHeader';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Styles from '../../Styles/Jobs Styles/SigleJobStyles';
import {
   Box,
   Button,
   Divider,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   useTheme,
} from '@material-ui/core';

import Image1 from '../../Assets/Images/overview.png';

import it3 from '../../Assets/Images/lt3.png';
import it4 from '../../Assets/Images/lt4.png';
import it5 from '../../Assets/Images/lt5.png';
import { Link } from 'react-router-dom';

const SingleJob = () => {
   const theme = useTheme();
   const styleProps = {
      ...PageHeader,
      theme,
   };

   const classes = Styles(styleProps);

   return (
      <>
         <PageHeader
            title={'Job Listing'}
            pathName={'Job Sigle'}
            path={'/jobs/listing'}
         />
         <Grid
            container
            className={classes.GridContainer}
            spacing={4}
         >
            <Grid item sm={12} md={4}>
               <div
                  style={{
                     textAlign: 'center',
                     border: '1px solid #e2e2e2',
                  }}
               >
                  <div className={classes.ProfileSection}>
                     <h3 className={classes.Section1Header}>
                        Jobs Overview
                     </h3>
                  </div>
                  <Box
                     display='flex'
                     justifyContent='space-between'
                     alignItems='center'
                     flexDirection='column'
                     padding='30px'
                  >
                     <Box>
                        <img
                           src={Image1}
                           style={{
                              margin: 'auto',
                           }}
                           alt=''
                        />
                        <h5
                           style={{
                              fontFamily: 'Poppins',
                           }}
                        >
                           HTML Developer (1 - 2 Yrs Exp.)
                        </h5>
                        <p
                           style={{
                              fontFamily: `'Lato ', sans-serif`,
                           }}
                           className={classes.P}
                        >
                           Webstrot Technology Pvt. Ltd.
                        </p>
                        <Box
                           style={{
                              margin: '25px auto',
                           }}
                           display='flex'
                           justifyContent='space-between'
                           alignItems='center'
                           maxWidth={'160px'}
                        >
                           <div
                              style={{
                                 border: '0.5px solid #ccc',
                                 padding: '5px 10px',
                              }}
                           >
                              <i className='far fa-heart'></i>
                           </div>
                           <div>
                              <Button
                                 variant='contained'
                                 className={classes.ProfileBtn}
                              >
                                 Part Time
                              </Button>
                           </div>
                        </Box>
                     </Box>
                     <List>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='far fa-calendar'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Date Posted :'
                              secondary='october 02 , 2021'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='fas fa-map-marker-alt'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Location'
                              secondary='Los Angeles'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='fa fa-info-circle'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Job Title:'
                              secondary='HTML Programmer'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='far fa-clock'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Hours :'
                              secondary='43 Hr / Week'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='far fa-money-bill-alt'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Salary :'
                              secondary='$12k-15k'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='fa fa-th-large'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Category :'
                              secondary='Developer'
                           />
                        </ListItem>
                        <ListItem className={classes.ListItem}>
                           <ListItemAvatar>
                              <i className='fa fa-star'></i>
                           </ListItemAvatar>
                           <ListItemText
                              primary='Experience :'
                              secondary='1+ Years of Experience'
                           />
                        </ListItem>
                     </List>
                     <Button
                        variant='contained'
                        className={classes.ProfileBtn}
                        style={{
                           padding: '10px 30px',
                           fontSize: '1.2em',
                           borderRadius: '0',
                        }}
                     >
                        Apply Now
                     </Button>
                  </Box>
                  <Divider />
                  <Box
                     display='flex'
                     justifyContent='space-between'
                     alignItems='center'
                     flexDirection='column'
                     padding='30px'
                  >
                     <List>
                        <ListItem className={classes.ListItem}>
                           <i
                              className='fa fa-tags'
                              style={{
                                 marginRight: 15,
                              }}
                           ></i>
                           <ListItemText
                              primary='Trending Keywords :'
                              secondary='ui designed , mern developer'
                           />
                        </ListItem>
                     </List>
                  </Box>
               </div>
            </Grid>
            <Grid item sm={12} md={8}>
               <Grid item xs={12}>
                  <div
                     style={{
                        border: '1px solid #ccc',
                        padding: '20px 0px',
                     }}
                  >
                     <Box
                        style={{
                           padding: '20px 25px',
                        }}
                     >
                        <h3 className={classes.ParagraphHeader}>
                           Job Description
                        </h3>
                        <p>
                           Google is and always will be an engineering
                           company. We hire people with a broad set of
                           ical skills who are ready to tackle some of
                           technology's greatest challenges and make
                           an impact on millions, if not billions, of
                           users. At Google, engineers not only
                           revolutionize search, they routinely work
                           on massive scalability and storage
                           solutions, large-scale applications and
                           rely new platforms for developers around
                           the world. From AdWords to Chrome, Android
                           to Ye, Social to Local, Google engineers
                           are changing the world.
                        </p>

                        <Box
                           display='flex'
                           justifyContent='space-between'
                           maxWidth='350px'
                           alignItems='center'
                           flexWrap='wrap'
                           paddingTop='20px'
                           className={classes.PtaNhiKiya}
                        >
                           <div>
                              <i className='fas fa-globe-asia'></i>
                              <a>www.example.com</a>
                           </div>
                           <div>
                              <i className='fas fa-file-download'></i>
                              <a>Download Info</a>
                           </div>
                        </Box>
                     </Box>
                     <Divider />
                     <Box
                        style={{
                           padding: '20px 25px',
                        }}
                     >
                        <h3 className={classes.ParagraphHeader}>
                           Responsibilities
                        </h3>
                        <p>
                           Curabitur non nulla sit amet nisl tempus
                           convallis quis ac lectus. Mauris blandit
                           aliquet elit, eget tincidunt nibh pulvinar
                           a. Praesent sapien massa, convallis a
                           pellentesque nec, egestas non nisi.
                           Curabitur aliquet quam id dui posuere
                           blandit.
                        </p>

                        <Box
                           display='flex'
                           justifyContent='space-between'
                           alignItems='center'
                           flexWrap='wrap'
                           paddingTop='20px'
                           className={classes.PtaNhiKiya}
                        >
                           <List className={classes.List1}>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                           </List>
                        </Box>
                     </Box>
                     <Divider />
                     <Box
                        style={{
                           padding: '20px 25px',
                        }}
                     >
                        <h3 className={classes.ParagraphHeader}>
                           Minimal Qualifications
                        </h3>
                        <p>
                           Curabitur non nulla sit amet nisl tempus
                           convallis quis ac lectus. Mauris blandit
                           aliquet elit, eget tincidunt nibh pulvinar
                           a. Praesent sapien massa, convallis a
                           pellentesque nec, egestas non nisi.
                           Curabitur aliquet quam id dui posuere
                           blandit.
                        </p>

                        <Box
                           display='flex'
                           justifyContent='space-between'
                           alignItems='center'
                           flexWrap='wrap'
                           paddingTop='20px'
                           className={classes.PtaNhiKiya}
                        >
                           <List className={classes.List1}>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                              <ListItem>
                                 <i className='fa fa-caret-right'></i>
                                 <ListItemText secondary=' Build next-generation web applications with a focus on the client side.' />
                              </ListItem>
                           </List>
                        </Box>
                     </Box>
                     <Divider />
                     <Box
                        style={{
                           padding: '20px 25px',
                        }}
                     >
                        <h3 className={classes.ParagraphHeader}>
                           How to Apply
                        </h3>
                        <p>
                           Google is and always will be an engineering
                           company. We hire people with a broad set of
                           ical skills who are ready to tackle some of
                           technology's greatest challenges and make
                           an impact on millions, if not billions, of
                           users. At Google, engineers not only
                           revolutionize search, they routinely
                        </p>
                     </Box>

                     <Divider />
                     <Box
                        style={{
                           padding: '20px 25px',
                        }}
                     >
                        <h3 className={classes.ParagraphHeader}>
                           Location
                        </h3>
                     </Box>
                     <Divider />
                     <Box
                        style={{
                           padding: '20px 25px',
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           flexWrap: 'wrap',
                           maxWidth: 380,
                           margin: 'auto',
                        }}
                     >
                        Share :
                        <List
                           style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              minWidth: 250,
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
                  </div>
               </Grid>
               <Grid
                  item
                  xs={12}
                  style={{
                     padding: '30px 10px',
                  }}
               >
                  <Box
                     display='flex'
                     justifyContent='space-between'
                     marginTop={'30px'}
                  >
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                        }}
                     >
                        <h3>Related Jobs</h3>
                     </div>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        <div
                           style={{
                              border: '1px solid #ccc',
                              padding: 5,
                              marginRight: 15,
                           }}
                        >
                           <KeyboardBackspaceIcon />
                        </div>
                        <div
                           style={{
                              border: '1px solid #ccc',
                              padding: 5,
                              marginRight: 15,
                           }}
                        >
                           <ArrowRightAltIcon />
                        </div>
                     </div>
                  </Box>
                  <Grid
                     container
                     style={{
                        padding: '30px',
                        marginTop: '30px',
                        border: '1px solid #ccc',
                     }}
                  >
                     <Grid
                        item
                        sn={12}
                        md={9}
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                     >
                        <div>
                           <img src={it3} alt='' />
                           Google
                        </div>
                        <div
                           style={{
                              paddingTop: 15,
                           }}
                        >
                           <div className={classes.PtaNhiKiya}>
                              <a href='#'>
                                 Trainee Web Designer, (Fresher)
                              </a>
                           </div>
                           <div>
                              <div className={classes.PtaNhiKiya}>
                                 <i className='fas fa-money-bill'></i>
                                 &nbsp; $12K - 15k P.A.
                              </div>
                              <div className={classes.PtaNhiKiya}>
                                 <i className='fas fa-map-marker-alt'></i>
                                 &nbsp; Los Angeles, Califonia PO,
                                 455001
                              </div>
                           </div>
                        </div>
                     </Grid>
                     <Grid
                        item
                        sn={12}
                        md={3}
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'flex-end',
                           flexWrap: 'wrap',
                        }}
                     >
                        <div
                           style={{
                              width: 'fit-content',
                              padding: '5px 10px',
                              border: '1px solid #ccc',
                           }}
                        >
                           <i
                              className={`far fa-heart ${classes.iPink}`}
                              style={{
                                 fontSize: '1.2em',
                              }}
                           ></i>
                        </div>
                        <Button
                           style={{
                              width: 'fit-content',
                              padding: '5px 10px',
                              border: '1px solid #ccc',
                           }}
                        >
                           Part Time
                        </Button>
                        <Button
                           variant='contained'
                           className={classes.ProfileBtn}
                           style={{
                              borderRadius: '0',
                           }}
                        >
                           Apply
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
};

export default SingleJob;
