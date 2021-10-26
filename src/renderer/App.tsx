import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import './CSS/list.css'
import { Evaluations } from '../Interface/interfaceEvaluations'

const listEvaluation = () => {


  // useEffect(() => {
  //   //envia la peticion
  //   ipcRenderer.send('anything-asynchronous', 'ping')
  //   // reply, respuesta
  //   ipcRenderer.on('asynchronous-reply', (arg) => {
  //   console.log("Hiii",arg) // prints "Hiii pong"
  //   })
  // });


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
    <div>
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
    </div>
  );
}

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
        <Link to='/list' >lista</Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} exact />
        <Route path="/list" component={listEvaluation} />
      </Switch>
    </Router>
  );
}
