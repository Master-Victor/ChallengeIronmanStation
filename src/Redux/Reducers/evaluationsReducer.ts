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
    detail: {}
}

//type
const LOADING = 'LOADING'
const EVALUATION_EXITO = 'EVALUATION_EXITO';
const EVALUATION_ERROR = 'EVALUATION_ERROR';
const DETALLE_EVALUATION_EXITO = 'DETALLE_EVALUATION_EXITO';
const CREADO_EXITO = 'CREADO_EXITO';

//reducer

export default function evaluationReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case LOADING:
            return { ...state, status: 'loading', detail: {} }
        case EVALUATION_EXITO:
            return { ...state, data: action.payload, status: 'success' }
        case DETALLE_EVALUATION_EXITO:
            return { ...state, status: 'success', detail: action.payload }
        case CREADO_EXITO:
            return { ...state, data: action.payload, status: 'success' }                 
        case EVALUATION_ERROR:
            return { ...state, data: [], status: 'error' }            
        default:
            return { ...state }
    }
}

//action

export const getEvaluationAction = () => async( dispatch: Dispatch/*, getState : any*/ ) =>{
    dispatch({
        type:LOADING
    })
    window.electron.ipcRenderer.on('send-json-evaluations', ( arg: Evaluations ) => {
        // eslint-disable-next-line no-console
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

export const getEvaluationDetailAction = () => async( dispatch: Dispatch/*, getState : any*/ ) =>{
    dispatch({
        type:LOADING
    })
    window.electron.ipcRenderer.once('filter-json-evaluations', (dato : [] ) => {
        // eslint-disable-next-line no-console
        try{
            dispatch({
                type: DETALLE_EVALUATION_EXITO,
                payload: dato
            })
        }catch(error){
            console.log(error)
            dispatch({
                type: EVALUATION_ERROR
            })
        }
      });     
}

export const createEvaluationAction = () => async( dispatch: Dispatch/*, getState : any*/ ) =>{
    dispatch({
        type:LOADING
    })
    window.electron.ipcRenderer.once('add-json-evaluations', ( data : Evaluations ) => {
        // eslint-disable-next-line no-console
        try{
            dispatch({
                type: CREADO_EXITO,
                payload: data
            })
        }catch(error){
            console.log(error)
            dispatch({
                type: EVALUATION_ERROR
            })
        }
      });     
}