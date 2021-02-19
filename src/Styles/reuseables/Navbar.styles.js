import { makeStyles } from '@material-ui/core';

import { genMediaQuery } from './MediaQueries';
import toggleSvg from '../Svgs/toggleBtn.svg';

const Styles = makeStyles((styleProps) => ({
   AppBar: {
      padding: '15px 10px',
   },
   title: {
      color: '#222',
      width: '20%',
   },
   NavLinks: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '70%',
      alignItems: 'center',
      [genMediaQuery('sm')]: {
         display: 'none',
      },
   },
   LinkItem: {
      cursor: 'pointer',
      color: '#222',
      '&:hover': {
         color: (styleProps) => styleProps.theme.palette.pink,
         borderBottom: (styleProps) =>
            `1px solid ${styleProps.theme.palette.pink}`,
      },
   },
   SearchIcon: {
      color: (styleProps) => styleProps.theme.palette.pink,
      cursor: 'pointer',
   },
   ProfileBox: {
      marginLeft: 'auto',
      [genMediaQuery('sm')]: {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         width: '40%',
      },
   },
   ProfileTxt: {
      display: 'none',
      [genMediaQuery('sm')]: {
         display: 'unset',
      },
      [genMediaQuery('xs')]: {
         display: 'none',
      },
   },
   Txt2: {
      color: (styleProps) => styleProps.theme.palette.pink,
   },
   toggleBtn: {
      cursor: 'pointer',
      backgroundImage: `url(${toggleSvg})`,
      backgroundRepeat: 'no-repeat',
      width: 25,
      height: 25,
      display: 'none',
      [genMediaQuery('sm')]: {
         display: 'unset',
      },
   },
   Drawer: {
      '& .MuiDrawer-paper': {
         display: 'none',
         minWidth: '50%',
         [genMediaQuery('sm')]: {
            display: 'unset',
         },
         [genMediaQuery('xs')]: {
            minWidth: '80%',
         },
      },
   },
   DrawerHeader: {
      padding: '10px 20px',
   },
   CloseIcon: {
      '& svg': {
         color: '#222',
      },
   },
   DrawerSearchbar: {
      boxShadow: 'none',
   },
   DrawerNav: {
      textTransform: 'uppercase',
      '& .border-pink-500': {
         color: '#fff',
         backgroundColor: (styleProps) =>
            styleProps.theme.palette.pink,
      },
   },
}));

export default Styles;
