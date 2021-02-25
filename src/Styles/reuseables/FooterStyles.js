import { makeStyles } from '@material-ui/core';

import { genMediaQuery } from './MediaQueries';

const Styles = makeStyles((styleProps) => ({
   root: {
      backgroundColor: '#303D59',
      minHeight: 580,
      padding: '80px 50px',
      color: '#Fff',
   },
   ListIcon: {
      color: (styleProps) => styleProps.theme.palette.pink,
      marginRight: 20,
      fontSize: '2em',
   },
   ListItemText: {
      '& .MuiTypography-body1': {
         color: '#ffffff7d',
         fontFamily: `'Lato', sans-serif`,
         fontSize: '1.2em',
      },
      '& .MuiTypography-colorTextSecondary': {
         color: '#ffffff7d',
         fontFamily: `'Lato', sans-serif`,
         fontSize: '1.2em',
      },
   },
   ListStyleIcon: {
      color: '#ff3366',
      fontSize: '0.5em',
      marginRight: 15,
   },
   FooterLinks: {
      backgroundColor: '#3A4868',
      borderRadius: '50%',
      fontSize: '1.3em',
      width: 'fit-content',
   },
}));

export default Styles;
