import React, {SetStateAction, useState} from 'react';

const useToggle = (initValue : boolean) => {
    const [value, setValue] = useState(initValue);

    const toggleValue = (value? : boolean) => setValue(currentValue => typeof value === 'boolean' ? value : !currentValue);

    return [value, toggleValue] as [boolean, (value? : boolean) => React.Dispatch<SetStateAction<boolean>>];
}

export default useToggle;
