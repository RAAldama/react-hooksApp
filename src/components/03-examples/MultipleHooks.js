import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/SimpleForm.css";

const MultipleHooks = () => {

  const {counter, increase} = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  //Se usa un ternario (CONDICION && SUCEDE ESTO)
  //La doble negación (!!) convierte un null en falso
  const {author, quote} = !!data && data[0];

  return (
    <div>
      <h1>Custom Hooks!</h1>
      <h2>Breaking Bad quotes</h2>
      <hr />

      {
        loading ? (
            <div className="alert alert-info text-center">Loading...</div>
        ) : (
            <blockquote className="blockquote text-end">
                <p>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        )
      }

      <button className="btn btn-primary" onClick={() => increase(1)}>
          Siguiente frase
      </button>

    </div>
  );
};

export default MultipleHooks;
