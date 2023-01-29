import useEventListener from './useEventListener';

const useClickOutside = (ref : any, callBack : any) => {
    useEventListener('click', (e : any) => {
        if (ref.current == null || ref.current.contains(e.target)) 
            return;
        
        callBack(e);
    }, document);
}

export default useClickOutside;
