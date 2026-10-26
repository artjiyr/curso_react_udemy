import {useStante, useEffect} from 'react';

//4 - custom hook

export function useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        }

        fetchData();
    }, [url]);

    return {data}   ;
}