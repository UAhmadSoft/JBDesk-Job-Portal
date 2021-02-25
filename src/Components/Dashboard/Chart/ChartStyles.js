import { genMediaQuery } from './MediaQueries';

const Style = {
   Chart: {
      '& canvas': {
         //    width  :''
         width: '773px !important',
         height: '386px !important',
         [genMediaQuery('lg')]: {
            width: '638px !important',
            height: '319px !important',
         },
         [genMediaQuery('md')]: {
            width: '638px !important',
            height: '319px !important',
         },
         [genMediaQuery('sm')]: {
            width: '638px !important',
            height: '319px !important',
         },
         [genMediaQuery('xs')]: {
            width: '343px !important',
            height: '171px !important',
         },
      },
   },
};

export default Style;
