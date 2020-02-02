import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import Game from './Components/Game';
import store from './Redux/store';

ReactDOM.render(
<Provider store={store}>
    <Game />
</Provider>, document.getElementById('root'));

