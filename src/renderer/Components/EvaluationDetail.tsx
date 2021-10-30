import { useDispatch, useSelector } from 'react-redux';
import { getEvaluationDetailAction } from '../../Redux/Reducers/evaluationsReducer'
import { useEffect } from 'react'
import { RootState } from '../../Interface/interfaceEvaluations';

interface ParentCompProps {
    match: {
        params: {
            id: string
        }
    }
  }

const EvaluationDetail  = ( props : ParentCompProps ) => {

    const { match: { params } } = props;

    const dispatch = useDispatch()
    const detail = useSelector( (store:RootState) => store.evaluations.detail );
    const status = useSelector( (store:RootState) => store.evaluations.status );

    useEffect(() => {
      dispatch(getEvaluationDetailAction());
      window.electron.ipcRenderer.filter_json_ipc(parseInt(params.id));    //llamo a la funcion para pedir los datos
    },[]
  );

    return status === 'success' ? (

        <div style={{ marginLeft: '30vw' }} >
            <h3>{detail[0].title}</h3>
            <h3>{detail[0].results}</h3>
        </div>
    ):<div> Loading.. </div>
}

export default EvaluationDetail
