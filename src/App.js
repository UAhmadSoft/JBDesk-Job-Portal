import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import CandidateRouter from './Routers/CandidateRouter';

const App = () => {
   return (
      <Switch>
         <Route path='/candidate' component={CandidateRouter} />
         <Route exact path='/' component={Home} />
      </Switch>
   );
};

export default App;
