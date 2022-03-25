import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://aqueous-sea-70326.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])
    return [foods, setFoods]
}

export default useFetch