import { Line } from 'react-chartjs-2';
import { useState } from 'react'
//import debounce from 'lodash.debounce';

const Chart_TEST_js = () => {

    const [ data, setData ] = useState([0, 1, 0 , -1, 0, 1, 0, -1]);
    const datos = [0, 1, 0 , -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0 , -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0 , -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1];
    let i = 0;

    const changeData = () => { 
        setData([ datos[i], datos[i+1], datos[i+2], datos[i+3], datos[ i + 4 ], datos[ i + 5 ], datos[ i + 6 ] ]);
        setTimeout( () =>  changeData(),1000);
        i++;
        if( (datos.length - 8) < i ){
            i=0;
        }
    }

    return (
        <div style={{ marginLeft: '30vw' }} >
            <h1>test chartjs</h1>
            <Line
                data={{
                    labels: [ '0' ,'1', '2', '3', '5', '6', '7' ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                      }]
                }}
                height={200}
                width={300}
            >
            </Line>
            <button onClick={ changeData } >cambiar</button>
        </div>
    )
}

export default Chart_TEST_js
