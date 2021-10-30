// import React from 'react';
import '../CSS/newEvaluation.css'
const newEvaluation = () => {
    return (
        <div className="container">
            <form>
                <h2 style={{ backgroundColor: '#04AA6D', color: 'white', padding: '5px', borderRadius: '5px' }} > Title </h2>
                <label className="field field_v2">
                    <input className="field__input" placeholder="e.j. Linea fiat" />
                    <span className="field__label-wrap">
                        <span className="field__label">Titulo de la evaluacion</span>
                    </span>
                </label>
                <h3 style={{ backgroundColor: '#04AA6D', color: 'white', padding: '5px', borderRadius: '5px' }} > Results </h3>
                <label className="field field_v2">
                    <input className="field__input" placeholder="e.j. Nombre del resultado" />
                    <span className="field__label-wrap">
                        <span className="field__label">Text</span>
                    </span>
                </label>
                <label className="field field_v2">
                    <input className="field__input" placeholder="e.j. Numero" />
                    <span className="field__label-wrap">
                        <span className="field__label">Value</span>
                    </span>
                </label>
                <button style={{ marginLeft: '10px' }} >+</button>
                <br/>
                <button style={{ marginLeft: '10px', marginTop: '10vh' }} > Crear evaluacion </button>
            </form>
        </div>
    )
}

export default newEvaluation
