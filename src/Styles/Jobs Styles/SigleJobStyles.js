import { makeStyles } from '@material-ui/core';
import { genMediaQuery } from '../reuseables/MediaQueries';

const styles = makeStyles((styleProps) => ({
   GridContainer: {
      padding: '60px 50px',
      [genMediaQuery('xs')]: {
         padding: '60px 30px',
      },
   },
   Section1Header: {
      backgroundColor: (styleProps) => styleProps.theme.palette.pink,
      color: '#fff',
      textTransform: 'capitalize',
      padding: 20,
      marginTop: 0,
   },
   P: {
      marginTop: 15,
      color: (styleProps) => styleProps.theme.palette.pink,
   },
   ProfileBtn: {
      '&.MuiButton-contained': {
         backgroundColor: (styleProps) =>
            styleProps.theme.palette.pink,
         color: '#fff',
         textTransform: 'capitalize',
      },
   },
   ListItem: {
      '& i': {
         color: (styleProps) => styleProps.theme.palette.red,
      },
   },
   ParagraphHeader: {
      fontSize: '1.4em',
      fontFamily: 'Poppins',
      paddingBottom: 20,
      paddingLeft: 15,
   },
   PtaNhiKiya: {
      '& a:hover': {
         color: (styleProps) => styleProps.theme.palette.pink,
         cursor: 'pointer',
      },
      '& i': {
         color: (styleProps) => styleProps.theme.palette.pink,
         marginRight: 15,
      },
   },
   List1: {
      '& .MuiListItem-gutters': {
         paddingLeft: 0,
      },
      '& .MuiTypography-body2': {
         fontSize: '1em',
      },
   },
   FooterLinks: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      fontSize: '1.3em',
      width: 'fit-content',
      border: '1px solid #ccc',
      '& i': {
         color: '#797979',
      },
   },
   iPink: {
      color: (styleProps) => styleProps.theme.palette.pink,
   },
}));

export default styles;
