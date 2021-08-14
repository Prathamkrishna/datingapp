import React, {useState} from 'react';

function useGenderPicker(bac){
    console.log(bac);
    const [value, setValue] = useState(bac);
    
    return value;
}

export default useGenderPicker;