function useFetch(url, opts) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    console.log("heeeeeeeeeeeeeeee")
    useEffect(() => {
        setLoading(true)
        fetch(url, opts)
            .then((res) => {
            setResponse(res.data)
            
            setLoading(false)
        })
            .catch(() => {
                setHasError(true)
                setLoading(false)
            })
    }, [ url ])
    return [ response, loading, hasError ]
}



// calling sample 
// const [response, loading, hasError] = useFetch("api/data")
//     return (<>
//             {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))}
//         </>)