import { useEffect, useState } from "react"

const useFetch = endpoint => {
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}${endpoint}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => setError(err)) // Error guardate en set data
    }, [endpoint])

    return [data, error] // Retornamos un array con 2 valores, data y error
}

export default useFetch;