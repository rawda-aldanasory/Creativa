import React, {useEffect, useState} from "react";

function useEffectCounter(){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(`Button clicked ${counter} times`);
      }, [counter]);


    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )


}

export default useEffectCounter;