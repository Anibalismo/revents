import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App';


const rootEl = document.getElementById('root');

function render(){
  ReactDOM.render(<App />,rootEl)
}

if(module.hot){
  module.hot.accept(App, function(){
    setTimeout(render)
  })
}

render();