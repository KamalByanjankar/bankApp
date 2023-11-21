// store jwt token in local storage

import { useEffect, useState } from "react"

function useLocalStorage(defaultValue, key){
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);

        return localValue !== null ? JSON.parse(localValue) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export {useLocalStorage}