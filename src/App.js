import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import CandidateRouter from './Routers/CandidateRouter';
import { ThemeProvider } from '@material-ui/core';

import theme from './Styles/Theme';
import CompanyRouter from './Routers/CompanyRouter';
import NavBarLayout from './Components/Layouts/NavbarLayout';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Switch>
            <Route path='/candidate' component={CandidateRouter} />
            <Route path='/company' component={CompanyRouter} />
            <NavBarLayout path='/' component={Home} />
         </Switch>
      </ThemeProvider>
   );
};

export default App;
