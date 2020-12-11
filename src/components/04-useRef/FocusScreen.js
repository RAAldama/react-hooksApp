import { useRef } from 'react';
import '../02-useEffect/SimpleForm.css';

const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input className ="form-control focusScreen" placeholder="Su nombre" ref={inputRef}/>

            <button className="btn btn-outline-primary" onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
