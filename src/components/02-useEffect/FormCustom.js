import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./SimpleForm.css";

const FormCustom = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with Hook</h1>
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

      <div className="form-group">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Contraseña"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormCustom;
