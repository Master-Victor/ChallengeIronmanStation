import {AnyAction, Dispatch} from 'redux'
import { Evaluations } from '../../Interface/interfaceEvaluations';
//Initial Data

const data : Evaluations  = {
    evaluation: [{
        id: 9999,
        title: 'Loading',
        results: [
          {
            label: 'Loading',
            value: 2
          },
          {
            label: 'Loading',
            value: 3
          }
        ]
      }]
}

const initialState = {
    data,
    status: 'idle',
    getData: false
}

//type
const LOADING = 'LOADING'
const EVALUATION_EXITO = 'EVALUATION_EXITO';
const EVALUATION_ERROR = 'EVALUATION_ERROR';


//reducer

export default function evaluationReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case LOADING:
            return {...state, status: 'loading', getData: true}
        case EVALUATION_EXITO:
            return {...state, data: action.payload, status: 'success', getData: false}
        case EVALUATION_ERROR:
            return {...state, data: [], status: 'error'}            
        default:
            return {...state}
    }
}

//action

export const getEvaluationAction = () => async( dispatch: Dispatch/*, getState : any*/ ) =>{
    dispatch({
        type:LOADING
    })
    window.electron.ipcRenderer.on('send-json-evaluations', ( arg:{} ) => {
        // eslint-disable-next-line no-console
        console.dir(arg);
        try{
            dispatch({
                type: EVALUATION_EXITO,
                payload: arg
            })
        }catch(error){
            console.log(error)
            dispatch({
                type: EVALUATION_ERROR
            })
        }
      });     
}