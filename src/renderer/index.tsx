import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from '../Redux/store';

render(
    <Provider store={configureStore} >
        <App />
    </Provider>
, document.getElementById('root'));
