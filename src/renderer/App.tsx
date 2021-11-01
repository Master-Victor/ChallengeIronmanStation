import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import listEvaluation from './Components/listEvaluation';
import newEvaluation from './Components/newEvaluation';
import Menu from './Components/Menu';
import EvaluationDetail from './Components/EvaluationDetail';

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[x: string]: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		require: any;
	}
}


const inicio = () => {
  return (
    <div style={{ paddingLeft: '40vw', paddingTop: '20vh' }} >
    <img src="https://c.tenor.com/o3bjq1qTCBwAAAAC/jesus-baila.gif" />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path="/" component={inicio} exact />
        <Route path="/list" component={listEvaluation} />
        <Route path="/new" component={newEvaluation} />
        <Route path="/detail/:id" component={EvaluationDetail} />
      </Switch>
    </Router>
  );
}
