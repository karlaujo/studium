import React,{useState,useEffect} from "react"
import { getQuote } from "./quoteAPI";

function FetchQuote() {
    const [quote,setQuote] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getQuote()
        .then((data) => setQuote(data))
    }, [])

    return(
        <>
        <h4>"{quote}"</h4>
        </>
    )
}
export default FetchQuote;
