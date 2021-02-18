// // & Size of ViewPorts
// const xs = '575';

const genMediaQuery = (viewPort, specificSize) => {
   const xs = '425';
   const sm = '768';
   const md = '992';
   const lg = '1200';
   switch (viewPort) {
      case 'xs':
         return `@media (max-width  : ${specificSize || xs}px )`;

      case 'sm':
         return `@media (max-width  : ${specificSize || sm}px)`;

      case 'md':
         return `@media (max-width  : ${specificSize || md}px)`;

      case 'lg':
         return `@media (max-width  : ${specificSize || lg}px)`;

      // case 'xl':
      //    return `@media (max-width  : ${specificSize || xl}px)`;
      default:
         return `@media (max-width  : ${specificSize || lg}px)`;
   }
};

const genHeightQuery = (viewPort, specificSize) => {
   const normal = '692';
   const iPhoneX = '812';
   const iPad = '1024';
   const iPadPro = '1366';
   switch (viewPort) {
      case 'normal':
         return `@media (max-height  : ${specificSize || normal}px )`;

      case 'iPhoneX':
         return `@media (max-height  : ${specificSize || iPhoneX}px)`;

      case 'iPad':
         return `@media (max-height  : ${specificSize || iPad}px)`;

      case 'iPadPro':
         return `@media (max-height  : ${specificSize || iPadPro}px)`;

      // case 'xl':
      //    return `@media (max-height  : ${specificSize || xl}px)`;
      default:
         return `@media (max-height  : ${specificSize || normal}px)`;
   }
};

// & Sample Queries
// * genBothQueries('xs','normal')
// * genBothQueries('xs','iPad')
// * genBothQueries('sm','normal')
// * genBothQueries('sm','iPad')
// * genBothQueries('sm','iPadPro')

const genBothQueries = (width, height, widthSize, heightSize) => {
   const xs = '425';
   const sm = '768';
   const md = '992';
   const lg = '1200';

   const heightSizes = {
      normal: '692',
      iPhoneX: '812',
      iPad: '1024',
      iPadPro: '1366',
   };

   switch (width) {
      case 'xs':
         return `@media (max-width  : ${
            widthSize || xs
         }px ) and (min-height : ${
            heightSize || heightSizes[height]
         }px)`;

      case 'sm':
         return `@media (max-width  : ${
            widthSize || sm
         }px ) and (min-height : ${
            heightSize || heightSizes[height]
         }px)`;

      case 'md':
         return `@media (max-width  : ${
            widthSize || md
         }px ) and (min-height : ${
            heightSize || heightSizes[height]
         }px)`;

      case 'lg':
         return `@media (max-width  : ${
            widthSize || lg
         }px ) and (min-height : ${
            heightSize || heightSizes[height]
         }px)`;

      default:
         return `@media (max-width  : ${widthSize || lg}px)`;
   }
};

export { genMediaQuery, genHeightQuery, genBothQueries };
