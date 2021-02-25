import { makeStyles } from '@material-ui/core';
import { genMediaQuery } from './reuseables/MediaQueries';

import CodeIcon from '../Assets/Svgs/code.svg';
import BarsIcon from '../Assets/Svgs/bars.svg';
import HallIcon from '../Assets/Svgs/city-hall.svg';
import AidIcon from '../Assets/Svgs/first-aid-kit.svg';
import LapatopaIcon from '../Assets/Svgs/laptop.svg';
import NewsIcon from '../Assets/Svgs/newspaper-folded.svg';
import RestaurantIcon from '../Assets/Svgs/fork.svg';

import CodeIconActive from '../Assets/Svgs/codeActive.svg';
import BarsIconActive from '../Assets/Svgs/barsActive.svg';
import HallIconActive from '../Assets/Svgs/city-hallActive.svg';
import AidIconActive from '../Assets/Svgs/first-aid-kitActive.svg';
import LapatopaIconActive from '../Assets/Svgs/laptopActive.svg';
import NewsIconActive from '../Assets/Svgs/newspaper-foldedActive.svg';
import RestaurantIconActive from '../Assets/Svgs/forkActive.svg';

const styles = makeStyles((styleProps) => ({
   Section1Grid: {
      backgroundColor: '#F9F9F9',
   },
   Section1: {
      width: '100%',
      padding: '100px 120px 153px 175px',
      [genMediaQuery('sm')]: {
         padding: '112px 50px 140px 50px',
      },
      [genMediaQuery('xs')]: {
         padding: '100px 20px',
      },
   },
   Section1A: {
      '& h1,p': {
         fontFamily: 'Poppins',
      },
   },
   Section1Heading: {
      fontSize: '44px',
      lineHeight: '50px',
      textTransform: 'capitalize',
      color: '#393939',
      fontWeight: '400',
      paddingBottom: '20px',
      [genMediaQuery('xs')]: {
         fontSize: 38,
      },
      [genMediaQuery('xs', 380)]: {
         fontSize: 32,
         lineHeight: '40px',
      },
   },
   Section1SubHeading: {
      color: '#777',
      paddingBottom: 40,
   },
   Input1: {
      width: '100%',
      height: 50,
      paddingLeft: 24,
      background: 'transparent',
      color: '#555',
      WebkitBorderRadius: 0,
      MozBorderRadius: 0,
      borderRadius: 0,
      background: '#fff',
      lineHeight: 50,
      border: '1px solid #e2e2e2',
      fontSize: 16,
      marginBottom: 15,
      fontStyle: 'italic',
      WebkitTransition: 'all 0.5s',
      OTransition: 'all 0.5s',
      MsTransition: 'all 0.5s',
      MozTransition: 'all 0.5s',
      transition: 'all 0.5s',
      '&:focus': {
         outline: 'none',
      },
   },
   LocationInput: {
      position: 'relative',
   },
   FlaticonMap: {
      position: 'absolute',
      top: 27,
      zIndex: 1,
      left: 25,
      fontSize: 20,
      color: '#ff3366',
      '&:before': {
         content: '\f102',
         fontFamily: 'Flaticon',
         fontSize: 16,
         fontStyle: 'normal',
      },
   },
   SelectLocation: {
      '& .css-g1d714-ValueContainer': {
         paddingLeft: 40,
      },
      '&.css-2b097c-container': {
         height: '77%',
      },
      '& .css-yk16xz-control': {
         height: '100%',
      },
   },
   Btn1: {
      color: '#fff',
      background: (styleProps) => styleProps.theme.palette.pink,
      borderRadius: 0,
      '& .MuiIconButton-label': {
         fontSize: 20,
      },
      padding: '10px 30px',
   },
   Section2: {
      transform: 'translateY(-65px)',
      padding: '0px 50px',
      [genMediaQuery('xs')]: {
         paddingTop: '70px',
         transform: 'translateY(0px)',
      },
   },
   Section2CardItem: {
      display: 'flex',
      justifyContent: 'center',
   },
   Section2Card: {
      width: '100%',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: 20,
      '& h3': {
         textAlign: 'center',
      },
      '& img': {
         margin: 'auto',
      },
   },
   Section2Heading: {
      fontSize: '30px',
      lineHeight: '50px',
      textTransform: 'capitalize',
      color: '#393939',
      fontWeight: '400',
      paddingBottom: '20px',
      [genMediaQuery('xs')]: {
         fontSize: 38,
      },
      [genMediaQuery('xs', 380)]: {
         fontSize: 32,
         lineHeight: '40px',
      },
   },
   Section2SubHeading: {
      color: '#777',
      paddingBottom: 40,
   },
   CodeIconInActive: {
      backgroundImage: `url(${CodeIcon})`,
      width: 40,
      height: 40,
   },
   CodeIconHover: {
      backgroundImage: `url(${CodeIconActive})`,
      width: 40,
      height: 40,
   },
   TechIcon: {
      backgroundImage: `url(${LapatopaIcon})`,
      width: 40,
      height: 40,
   },
   TechIconHover: {
      backgroundImage: `url(${LapatopaIconActive})`,
      width: 40,
      height: 40,
   },
   MedicalIcon: {
      backgroundImage: `url(${AidIcon})`,
      width: 40,
      height: 40,
   },
   MedicalIconHover: {
      backgroundImage: `url(${AidIconActive})`,
      width: 40,
      height: 40,
   },
   BuildingIcon: {
      backgroundImage: `url(${HallIconActive})`,
      width: 40,
      height: 40,
   },
   BuildingIconHover: {
      backgroundImage: `url(${HallIconActive})`,
      width: 40,
      height: 40,
   },
   NewsIcon: {
      backgroundImage: `url(${NewsIcon})`,
      width: 40,
      height: 40,
   },
   NewsIconHover: {
      backgroundImage: `url(${NewsIconActive})`,
      width: 40,
      height: 40,
   },
   RestaurantIcon: {
      backgroundImage: `url(${RestaurantIcon})`,
      width: 40,
      height: 40,
   },
   AccountIcon: {
      backgroundImage: `url(${BarsIcon})`,
      width: 40,
      height: 40,
   },
   RestaurantIconHover: {
      backgroundImage: `url(${RestaurantIconActive})`,
      width: 40,
      height: 40,
   },
   AccountIconHover: {
      backgroundImage: `url(${BarsIconActive})`,
      width: 40,
      height: 40,
   },
   IconDiv: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 16,
   },
   IconDivChild: {
      width: '100%',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: 20,
      '& h4': {
         textAlign: 'center',
      },

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&:hover': {
         cursor: 'pointer',
         backgroundColor: (styleProps) =>
            styleProps.theme.palette.pink,
         '& h4': {
            color: '#fff',
         },
         '& p': {
            color: '#fff',
         },
      },
   },
   PictureGrid: {
      backgroundColor: '#F6F6F6',
      paddingBottom: 40,
   },
   PricingGrid: {
      backgroundColor: '#F6F6F6',
      paddingBottom: 40,
   },
   PriceCardGrid: {
      // padding: 20,
   },
   PriceUl: {
      '& li': {
         textAlign: 'center',
      },
   },
   root: {
      '& .MuiCardContent-root': {
         padding: 0,
      },
      '& .MuiCardActions-root': {
         justifyContent: 'center',
      },
   },
}));

export default styles;
