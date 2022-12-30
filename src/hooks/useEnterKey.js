
import { useEffect } from 'react';

const useEnterKey = (callback) => {
    
    useEffect(() => {
        const keyDownHandler = (e) => {
          if (e.key === "Enter") {
            
            callback(e);
            e.preventDefault()
          }
        };
        document.addEventListener("keydown", keyDownHandler);
    
        return () => {
          document.removeEventListener("keydown", keyDownHandler);
        };
      }, [callback]);
}
 
export default useEnterKey;