import { makeStyles } from '@material-ui/core';
import { genMediaQuery } from '../reuseables/MediaQueries';

const styles = makeStyles((styleProps) => ({
   GridContainer: {
      padding: '60px 50px',
      [genMediaQuery('xs')]: {
         padding: '60px 30px',
      },
   },
   Section2Header: {
      backgroundColor: (styleProps) => styleProps.theme.palette.pink,
      color: '#fff',
      textTransform: 'capitalize',
      padding: 20,
      marginTop: 0,
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
   formControl: {
      '& .MuiFormControlLabel-root': {
         paddingBottom: 15,
      },
   },
   PinkA: {
      color: (styleProps) => styleProps.theme.palette.pink,
      cursor: 'pointer',
   },
   Slider: {
      '&.MuiSlider-root': {
         color: (styleProps) => styleProps.theme.palette.pink,
      },
   },
   formControl2: {
      maxWidth: 200,
      '& .MuiFilledInput-root': {
         backgroundColor: '#fff',
      },
   },
   PtaNhiKiya: {
      '& i': {
         color: (styleProps) => styleProps.theme.palette.pink,
         marginRight: 15,
      },
   },
   iPink: {
      color: (styleProps) => styleProps.theme.palette.pink,
   },
   iGrey: {
      color: '#777777',
      marginRight: 15,
   },
   Is: {
      '& i': {
         fontSize: '1.5em',
         padding: 10,
         border: '1px solid #ccc',
      },
   },
}));

export default styles;
