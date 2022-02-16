import { useState , useEffect } from "react";

const useFetch = (url) =>{
    const [data , setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(true)
    useEffect( ()=>{
        const controller = new AbortController();
        fetch(url,{signal:controller.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('Could not fetch data')
                }
            })
            .then(data=>{
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                if(err.name ==="AbortError"){
                    console.log('fetch aborted')
                }else{
                   setError(err.message);
                   setIsPending(false)
                }
           
            })
            return () => controller.abort();
    },[url])
    return {data,isPending,error}
}
export default useFetch;