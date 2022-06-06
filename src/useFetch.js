 import { useState, useEffect } from "react";
 
 const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
     
    useEffect(() => {
        const abortCont = new AbortController();
 
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){ //error coming back from the server
                        throw Error('Could not fetch data for that resource');
                    }
                    return res.json();
                })  
                .then(data => {
                    setData(data);
                    setIsPending(false); 
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError')
                    {
                        console.log('fetch aborted');
                    }
                    else{
                        // auto catches network / connection error
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);
        //abort the fetch
        return () => abortCont.abort();
    }, [url]); 
    // here this[] empty dependency array make sure that this hook only runs function after the first initial rander
    // whenever url changes this function is going to rerun  

    return { data, isPending, error}
 }

 export default useFetch;



//  recap
// this episode talks about two-way data binding ( a very important concept in reactjs, usually used in form element )
// 1. assign a dynamic value to 'value' attribute of input/textarea/select element. 
// example
// const [name, setName] = useState('mario')
// <input value={name}></input>
// 2. listen 'change' event with a handler (anonomous function) to set value, for example
// <input onChange={e=>setValue(e.target.name)}>
// thats it !!!