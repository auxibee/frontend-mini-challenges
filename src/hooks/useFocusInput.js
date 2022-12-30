
import { useRef } from 'react';
import { useEffect } from 'react';

const useFocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    } )
    return inputRef
}
 
export default useFocusInput;