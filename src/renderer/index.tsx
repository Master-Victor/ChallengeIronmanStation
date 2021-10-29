import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from '../Redux/store';
// const { ipcRenderer : typeElectron } = window.require("electron").
// declare interface typeElectron {

//         myReact() : void
//   }
//   ipcRenderer.myReact();

render(
    <Provider store={configureStore} >
        <App />
    </Provider>
, document.getElementById('root'));
