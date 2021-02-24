import { makeStyles } from '@material-ui/core';
import { genMediaQuery } from '../reuseables/MediaQueries';

const styles = makeStyles((styleProps) => ({
   GridContainer: {
      padding: '60px 50px',
      [genMediaQuery('xs')]: {
         padding: '60px 30px',
      },
   },
   ProfileSection: {
      //   width: '80%',
   },
   Txt2: {
      color: (styleProps) => styleProps.theme.palette.pink,
   },
   ProfileDetails: {
      width: '70%',
      margin: '30px auto',
      [genMediaQuery('sm')]: {
         width: '90%',
      },
   },
   ProgressBar: {
      backgroundColor: '#f3f3f3',
      position: 'relative',
      width: '100%',
      height: 5,
   },
   Progress: {
      width: '70%',
      height: 5,
      position: 'absolute',
      left: 0,
      backgroundColor: (styleProps) => styleProps.theme.palette.pink,
   },
   NavItem: {
      width: '100%',
      cursor: 'pointer',
      marginBottom: 10,
      height: 48,
      '&:hover': {
         background: '#f8f8f8',
         borderLeft: '3px solid #ff3366',
      },
   },
   NavItemActive: {
      background: '#f8f8f8',
      borderLeft: '3px solid #ff3366',
   },
   ListItemContent: {
      display: 'flex',
      alignItems: 'center',
      width: '75%',
      margin: 'auto',
      height: '100%',
   },
   ListIcon: {
      color: (styleProps) => styleProps.theme.palette.pink,
      marginRight: 20,
   },
   LogoutSection: {
      borderTop: '1px solid #e2e2e2',
      paddingTop: 30,
   },
   Section1: {
      border: '1px solid #e2e2e2',
      padding: 25,
      display: 'flex',
      alignItems: 'center',
   },

   Section1Details: {
      marginLeft: 30,
   },
   ProfileBtn: {
      '&.MuiButton-contained': {
         backgroundColor: (styleProps) =>
            styleProps.theme.palette.pink,
         color: '#fff',
         textTransform: 'capitalize',
      },
      marginLeft: 'auto',
   },
   Section2: {},
   Section2A: {
      border: '1px solid #e2e2e2',
   },
   Section2Header: {
      backgroundColor: (styleProps) => styleProps.theme.palette.pink,
      color: '#fff',
      textTransform: 'capitalize',
      padding: 20,
      marginTop: 0,
   },
   ListItem: {
      color: '#222222',
      '& svg': {
         color: (styleProps) => styleProps.theme.palette.pink,
      },
   },
   ListAvatar: {
      position: 'relative',
      border: '1px solid #c2c2c2c2',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
   },
   ListIcon2: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
   },
   Section2B: {
      width: '90%',
      margin: 'auto',
      marginTop: 20,
      paddingBottom: 20,
      border: '1px solid #e2e2e2e2',
   },
   Icon: {
      height: 80,
      width: 85,
      position: 'relative',
      '& i': {
         position: 'absolute',
         left: '50%',
         top: '50%',
         transform: 'translate(-50%,-50%)',
         fontSize: 30,
         color: '#fff',
      },
   },
   Section3B: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
   },
   Section3BListItem: {
      width: '50%',
      [genMediaQuery('sm')]: {
         width: '100%',
      },
   },
}));

export default styles;
