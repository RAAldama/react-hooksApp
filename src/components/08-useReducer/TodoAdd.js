import React from "react";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Tarea a realizar"
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />

        <div className="d-grid">
          <button type="submit" className="btn btn-outline-info mt-1 btn-block">
            Agreagr
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoAdd;
