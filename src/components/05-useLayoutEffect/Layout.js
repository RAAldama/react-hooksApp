import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./Layout.css";

const Layout = () => {
  const { counter, increase } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSide, setBoxSide] = useState({});

  useLayoutEffect( () => {
      
    setBoxSide(pTag.current.getBoundingClientRect());

  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <h2>Breaking Bad quotes</h2>
      <hr />

      <blockquote className="blockquote text-end layout">
        <p ref={pTag}>{quote}</p>
      </blockquote>

      <pre>
          {JSON.stringify(boxSide, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={() => increase(1)}>
        Siguiente frase
      </button>
    </div>
  );
};

export default Layout;
