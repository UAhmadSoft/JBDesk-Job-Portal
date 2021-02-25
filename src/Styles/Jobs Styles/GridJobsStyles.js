import { makeStyles } from '@material-ui/core';
import { genMediaQuery } from '../reuseables/MediaQueries';

const styles = makeStyles((styleProps) => ({
   GridContainer: {
      padding: '60px 50px',
      [genMediaQuery('xs')]: {
         padding: '60px 30px',
      },
   },
}));

export default styles;
