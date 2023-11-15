import YourButton from "./YourButton";
import { useState } from 'react';


type Props = {}

export default function ButtonCounter({}: Props) {
    const [count, setCount] = useState(0);

    const addToCount = (value:number):void => {
        setCount(count + value);
    }

    const buttonValues = [1, 10, 100, 1000];
    return (
        <div>
            <h1>Count: {count} </h1>
            {/* <YourButton buttonValue={1} handleClick={addToCount} />
            <YourButton buttonValue={10} handleClick={addToCount} />
            <YourButton buttonValue={100} handleClick={addToCount} />
            <YourButton buttonValue={1000} handleClick={addToCount} /> */}
            {buttonValues.map(val => <YourButton buttonValue={val} handleClick={addToCount} key={val} />)}
        </div>
    )
}