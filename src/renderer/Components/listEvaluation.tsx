//import { Evaluations } from '../../Interface/interfaceEvaluations';
import { useDispatch, useSelector } from 'react-redux';
import { getEvaluationAction } from '../../Redux/Reducers/evaluationsReducer'
import { useEffect } from 'react'
import '../CSS/list.css'
import { RootState } from '../../Interface/interfaceEvaluations';
import { Link } from 'react-router-dom';

const listEvaluation = () => {

    const dispatch = useDispatch()
    const dataList = useSelector( (store:RootState) => store.evaluations.data.evaluation );
    const status = useSelector( (store:RootState) => store.evaluations.status );

    console.log(dataList);

    useEffect(() => {
      dispatch(getEvaluationAction());
      window.electron.ipcRenderer.read_json_ipc();    //llamo a la funcion para pedir los datos
    },[]
  );
  
    return (status === 'success') ? (
      <div style={{paddingLeft:'30vw', margin: '1%'}} >
        <h1>Evaluaciones</h1>
        <table id="customers">
        <tbody>
          <tr>
            <th>ID</th>
            <th>  Title</th>
            <th># Result</th>
          </tr>
          {
            dataList.map(x => {
              return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>  <Link to={`/detail/${x.id}`}  > {x.title} </Link>  </td>
                <td>{x.results.map(y => <div key={y.value} >{y.label}</div>)}</td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    ):<div style={{paddingLeft:'30vw', margin: '1%'}} >Loading...</div>
  }

export default listEvaluation;