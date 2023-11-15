import { useState } from 'react';

type Props = {
    buttonText: string
}

export default function MyButton({ buttonText }: Props) {
    console.log('This function is being executed');
    // let count = 1
    let [count, setCount] = useState(1);
    return (
        <div>
            <button onClick={() => setCount(++count)}>{buttonText}</button>
            <span> Count: {count}</span>
        </div>
    )
}