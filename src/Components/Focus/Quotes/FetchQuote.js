import React,{useState,useEffect} from "react"

function FetchQuote() {
    const [quote,setQuote] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getQuote();
        const intervalID = setInterval(() => {
            getQuote()
        }, 24 * 60 * 60 * 1000);
        return ()=>{
            clearInterval(intervalID);
    }
    },[])

    function getQuote() {
        fetch('http://quotes.rest/qod.json?category=inspire')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setQuote(data.contents.quotes[0].quote);
        })
    }
return(
    <>
    <p>"{quote}</p>
    </>
)
}
export default FetchQuote;