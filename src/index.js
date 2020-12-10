import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/01-useState/CounterApp';
import CounterCustom from './components/01-useState/CounterCustom';
import FormCustom from './components/02-useEffect/FormCustom';
import SimpleForm from './components/02-useEffect/SimpleForm';
import MultipleHooks from './components/03-examples/MultipleHooks';
//import HooksApp from './HooksApp';
import './index.css';

ReactDOM.render(
  <> 
    <CounterApp />
    <hr />
    <CounterCustom />
    <hr />
    <SimpleForm />
    <hr />
    <FormCustom />
    <hr />
    <MultipleHooks />
  </>,
  document.getElementById('root')
);
