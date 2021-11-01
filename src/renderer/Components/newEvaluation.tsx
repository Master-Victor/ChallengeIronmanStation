// import React from 'react';
import '../CSS/newEvaluation.css'
import { Evaluation } from '../../Interface/interfaceEvaluations';
import { createEvaluationAction } from '../../Redux/Reducers/evaluationsReducer';
import { useDispatch } from 'react-redux';

const newEvaluation = () => {

    const dispatch = useDispatch();

    return (
        <div className="container">
            <form
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        title: { value: string };
                        text: { value: string };
                        value: { value: number };
                    };
                    let evaluation: Evaluation = {
                        id: 0,
                        title: target.title.value,
                        results: [
                            {
                                label: target.text.value,
                                value: target.value.value
                            }
                        ]
                    };
                    dispatch( createEvaluationAction() );
                    window.electron.ipcRenderer.add_json_ipc(evaluation);
                }}
            >
                <h2 style={{ backgroundColor: '#04AA6D', color: 'white', padding: '5px', borderRadius: '5px' }} > Title </h2>
                <label className="field field_v2">
                    <input className="field__input" placeholder="e.j. Linea fiat" type="title" name="title" />
                    <span className="field__label-wrap">
                        <span className="field__label">Titulo de la evaluacion</span>
                    </span>
                </label>
                <h3 style={{ backgroundColor: '#04AA6D', color: 'white', padding: '5px', borderRadius: '5px' }} > Results </h3>
                <label className="field field_v2">
                    <input className="field__input" placeholder="e.j. Nombre del resultado" type="text" name="text" />
                    <span className="field__label-wrap">
                        <span className="field__label">Text</span>
                    </span>
                </label>
                <label className="field field_v2">
                    <input className="field__input" placeholder="e.j. Numero" type="value" name="value" />
                    <span className="field__label-wrap">
                        <span className="field__label">Value</span>
                    </span>
                </label>
                <br />
                <button style={{ marginLeft: '10px', marginTop: '10vh' }} type="submit"> Crear evaluacion </button>
            </form>
        </div>
    )
}

export default newEvaluation
