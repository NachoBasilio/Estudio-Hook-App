import { useEffect, useState } from "react";


export default function useFetch(url) {
    const [state, setstate] = useState(
        {
            data: null,
            loading: true,
            error: null
        }
    );

    const getFetch = async () => {
        setstate({
            data: null,
            loading: true,
            error: null
        })
        const resp = await fetch(url)
        const data = await resp.json()
        setstate({
            data: data,
            loading: false,
            error: null
        })

    }
    useEffect(() => {
        getFetch()
    }, [url]);

    return {...state}
}
