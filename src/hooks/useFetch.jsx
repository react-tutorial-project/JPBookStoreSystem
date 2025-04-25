import { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [ error, setError ] = useState(null);
    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);
        fetch(url , {
            signal,
            method 
        })
        .then(res => {
            if(!res.ok) {
                throw Error('Something Went Wrong');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setError(null);
            setLoading(false);
        })
        .catch(e => {
            setError(e.message);
        })
        return () => {
            abortController.abort();
        }
    },[url]);
    return {
        data, loading, error
    };
}
export default useFetch;