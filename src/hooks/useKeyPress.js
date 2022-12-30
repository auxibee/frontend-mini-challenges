
import { useEffect } from 'react';
import { useState } from 'react';


const useKeyPress = () => {
    
    const [key, setKey] = useState('')
   

    useEffect(() => {
        const keyDownHandler = (e) => {
            setKey(e.key)
           
        }

        document.addEventListener('keypress', keyDownHandler)

        return () => document.removeEventListener('keypress', keyDownHandler)
    },[key])

    return [key,setKey]
}

export default useKeyPress