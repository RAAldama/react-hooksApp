import { useState } from 'react';
import '../02-useEffect/SimpleForm.css';
import MultipleHooks from '../03-examples/MultipleHooks';

const RealRef = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>Example UseRef</h1>
            <hr />

            {show && <MultipleHooks />}

            <button className="btn btn-outline-info mt-2" onClick={handleClick}>
                Mostrar/Ocultar
            </button>
        </div>
    )
}

export default RealRef
