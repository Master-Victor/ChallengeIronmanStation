import { Line } from 'react-chartjs-2';
import { useState, useCallback } from 'react';
// import { defaults } from 'react-chartjs-2';
import debounce from 'lodash.debounce';

// defaults.animation = false;

const Chart_TEST_js = () => {

    const [ data, setData ] = useState([ 0, 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 ]);
    const datos = [ 0, 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0, 0, 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 0, 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 0, 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0 , 1/4 , 1/2 , 1 , 1/2 , 1/4 , 0 , -1/4 , -1/2 , -1 , -1/2 , -1/4, 0  ];
    let i = 0;


    const changeData = () => { 

            setData([ datos[i], datos[i+1], datos[i+2], datos[i+3], datos[ i + 4 ], datos[ i + 5 ], datos[ i + 6 ], datos[ i + 7 ], datos[ i + 8 ], datos[ i + 9 ] , datos[ i + 10 ] , datos[ i + 11 ] , datos[ i + 12 ] ]);
            i++;
            if( (datos.length - 12) < i ){
                i=0;
            }
        debouncedChangeHandler();
        
    }

    const debouncedChangeHandler = useCallback(
        debounce(changeData, 250)
        , []);

    return (
        <div style={{ marginLeft: '30vw' }} >
            <h1>test chartjs</h1>
            <Line
                data={{
                    labels: [ '0' ,'1', '2', '3', '5', '6', '7', '8', '9', '10', '11' ],
                    datasets: [{
                        label: 'Evaluacion',
                        data: data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.4
                      }]
                }}
                height={200}
                width={300}
            >
            </Line>
            <button onClick={ debouncedChangeHandler } >play</button>
            <button onClick={ debouncedChangeHandler.cancel } >pause</button>
        </div>
    )
}

export default Chart_TEST_js
