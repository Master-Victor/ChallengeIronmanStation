import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './CSS/list.css'
import { Evaluations } from '../Interface/interfaceEvaluations'
import { useDispatch } from 'react-redux';
import { getEvaluationAction } from '../Redux/Reducers/evaluationsReducer'
import { useEffect } from 'react'
import newEvaluation from './Components/newEvaluation';
import Menu from './Components/Menu';
import './CSS/atom.css'
//import { getEvaluationAction } from '../Redux/Reducers/evaluationsReducer';
declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[x: string]: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		require: any;
	}
}

const listEvaluation = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvaluationAction())
  },[]
);

  const mockData: Evaluations = {
    evaluation: [{
      id: 1,
      title: 'test 1',
      results: [
        {
          label: 'String',
          value: 2
        },
        {
          label: 'valor',
          value: 3
        }
      ]
    },
    {
      id: 2,
      title: 'test 2',
      results: [
        {
          label: 'String',
          value: 2
        },
        {
          label: 'valor',
          value: 3
        }
      ]
    }
    ]
  }

  return (
    <div style={{paddingLeft:'30vw', margin: '1%'}} >
      <h1>Evaluaciones</h1>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th># Result</th>
        </tr>
        {
          mockData.evaluation.map(x => {
            return (<tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.results.map(y => <div key={y.value} >{y.label}</div>)}</td>
            </tr>)
          })
        }
      </table>
    <button onClick={ ()=> { window.electron.ipcRenderer.myReact() } } >peticion react state</button>
    </div>
  );
}

const Hello = () => {
  return (

    <div id="main">
        <div id="atom">
            <div className="orbit">
                <div className="path">
                    <div className="electron"></div>
                </div>
            </div>
            <div className="orbit">
                <div className="path">
                    <div className="electron"></div>
                </div>
            </div>
            <div className="orbit">
                <div className="path">
                    <div className="electron"></div>
                </div>
            </div>
            <div className="orbit">
                <div className="path">
                    <div className="electron"></div>
                </div>
            </div>
            <div id="nucleus"></div>
        </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path="/" component={Hello} exact />
        <Route path="/list" component={listEvaluation} />
        <Route path="/new" component={newEvaluation} />
      </Switch>
    </Router>
  );
}
