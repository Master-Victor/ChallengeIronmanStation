import { useDispatch, useSelector } from 'react-redux';
import { getEvaluationDetailAction } from '../../Redux/Reducers/evaluationsReducer'
import { useEffect } from 'react'
import { RootState } from '../../Interface/interfaceEvaluations';
import { Link } from 'react-router-dom';

interface ParentCompProps {
    match: {
        params: {
            id: string
        }
    }
  }

const EvaluationDetail  = ( props : ParentCompProps ) => {

    const { match: { params } } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvaluationDetailAction());
        window.electron.ipcRenderer.filter_json_ipc(parseInt(params.id));
      },[]
    );

    const detail = useSelector( (store:RootState) => store.evaluations.detail );
    const status = useSelector( (store:RootState) => store.evaluations.status );

    return (status === 'success' && detail[0] !== undefined ) ? (
        <div style={{ marginLeft: '50vw', marginTop: '20vh' }} >
            <h2 style={{ marginLeft: '-15vw', background: 'green', color: 'white', maxWidth: '55vw', padding: '5px' }} > Title: </h2>
            <h3 style={{ marginLeft: '-10vw' }} >{ detail[0].title }</h3>
            <h2 style={{ marginLeft: '-15vw', background: 'green', color: 'white', maxWidth: '55vw', padding: '5px' }} > Resultados: </h2>
            <h3 style={{ marginLeft: '-10vw' }} >{ detail[0].results.map( x => <span key={x.value} >{x.label}: {x.value} </span> ) }</h3>
            <Link to='/list' >volver</Link>
        </div>
    ):<div> Loading.. </div>
}

export default EvaluationDetail
