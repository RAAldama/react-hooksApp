import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error: null});
    const isMounted = useRef(true);

    useEffect( () => {

        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect( () => {
        setState({data: null, loading: true, error: null})

        fetch(url).then(ans => 
            ans.json()
        ).then(data => {

            if(isMounted.current){
                setState({
                    data,
                    loading: false,
                    error: null,
                })
            }else{
                console.log('setSate no fue llamado');
            }

        }).catch( () => {
            setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la información'
            })
        })

    }, [url]);

    return state;
}
