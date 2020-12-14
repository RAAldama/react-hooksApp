import React from "react";
import CounterApp from "../01-useState/CounterApp";
import CounterCustom from "../01-useState/CounterCustom";
import FormCustom from "../02-useEffect/FormCustom";
import SimpleForm from "../02-useEffect/SimpleForm";
import MultipleHooks from "../03-examples/MultipleHooks";
import FocusScreen from "../04-useRef/FocusScreen";
import RealRef from "../04-useRef/RealRef";
import Layout from "../05-useLayoutEffect/Layout";
import CallbackHook from "../06-memos/CallbackHook";
import MemoHook from "../06-memos/MemoHook";
import Memorize from "../06-memos/Memorize";
import { Padre } from "../07-tarea-memo/Padre";

const OtherHooks = () => {
  return (
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
    </>
  );
};

export default OtherHooks;
