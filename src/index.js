import React from 'react';
import ReactDOM from 'react-dom';
/*
import CounterApp from './components/01-useState/CounterApp';
import CounterCustom from './components/01-useState/CounterCustom';
import FormCustom from './components/02-useEffect/FormCustom';
import SimpleForm from './components/02-useEffect/SimpleForm';
import MultipleHooks from './components/03-examples/MultipleHooks';
import FocusScreen from './components/04-useRef/FocusScreen';
import RealRef from './components/04-useRef/RealRef';
import Layout from './components/05-useLayoutEffect/Layout';
import CallbackHook from './components/06-memos/CallbackHook';
import MemoHook from './components/06-memos/MemoHook';
import Memorize from './components/06-memos/Memorize';
import { Padre } from './components/07-tarea-memo/Padre';
import TodoApp from './components/08-useReducer/TodoApp';
*/
import MainApp from './components/09-useContext/MainApp';
import './index.css';

//import HooksApp from './HooksApp';
//import './components/08-useReducer/intro-reducer';

ReactDOM.render(
  /*
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
    <hr />
    <FocusScreen />
    <hr />
    <RealRef />
    <hr />
    <Layout />
    <hr />
    <Memorize />
    <hr />
    <MemoHook />
    <hr />
    <CallbackHook />
    <hr />
    <Padre />
    <hr />
    <TodoApp />
    <hr />
  </>,
  */

  <MainApp />,
  document.getElementById('root')
);
