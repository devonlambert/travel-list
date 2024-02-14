import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) throw Error('The server did not send a proper response')

                return response.json()
            })
            .then((items) => {
                setData(items)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [url])

    return { data, isPending, error };
}

export default useFetch;