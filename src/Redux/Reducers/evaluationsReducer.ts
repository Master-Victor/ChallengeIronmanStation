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
            label: 'valor',
            value: 3
          }
        ]
      }]
}

const initialState = {
    data,
    status: 'idle'
}

//type
const LOADING = 'LOADING'
const EVALUATION_EXITO = 'EVALUATION_EXITO';
const EVALUATION_ERROR = 'EVALUATION_ERROR';


//reducer

export default function evaluationReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case LOADING:
            return {...state, status: 'loading'}
        case EVALUATION_EXITO:
            return {...state, data: action.payload, status: 'success'}
        case EVALUATION_ERROR:
            return {...state, data: [], status: 'error'}            
        default:
            return {...state}
    }
}

//action

export const RegisterUsuarioActionEmail = () => async( dispatch: Dispatch ) =>{
    dispatch({
        type:LOADING
    })
    try{
        dispatch({
            type: EVALUATION_EXITO,
            payload: {
                evaluation: {
                    // uid: user,
                    // email: email
                }
            }
        })
        localStorage.setItem('usuario', JSON.stringify({
            // uid: user,
            // email: email
        }))
    }catch(error){
        console.log(error)
        dispatch({
            type: EVALUATION_ERROR
        })
    }
}