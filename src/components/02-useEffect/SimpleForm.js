import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./SimpleForm.css";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey');
  }, [] );

  useEffect(() => {
    console.log('formState cambio');
  }, [formState] );

  useEffect(() => {
    console.log('email cambio');
  }, [email] );

  const handleInputChange = ({target}) => {

    setFormState({
        ...formState,
        [target.name]: target.value,
    });

  }

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {(name === 'eevee') && <Message />}
    </>
  );
};

export default SimpleForm;
