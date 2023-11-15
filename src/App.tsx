// import React from 'react';
import MyButton from "./MyButton"
import ButtonCounter from "./ButtonCounter"
import PostsDisplay from "./PostsDisplay"

type Props = {}

export default function App({}: Props) {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>My name is Brian {2 + 2}</h2>
            <ol>
                <li>Chicago</li>
                <li>Champaign</li>
                <li>Pamplona</li>
            </ol>
            <MyButton buttonText={'Test 123'} />
            <MyButton buttonText={'Cool Button'}/>
            <MyButton buttonText={'Click Me'}/>
            <MyButton buttonText={'See More'}/>
            <ButtonCounter />
            <PostsDisplay />
        </div>
        // React.createElement(
        //     'div', 
        //     null, 
        //     [
        //         React.createElement('h1', null, 'Hello World'), 
        //         React.createElement('h2', null, 'My name is Brian'),
        //         React.createElement('ol', null, [
        //             React.createElement('li', null, 'Red'), 
        //             React.createElement('li', null, 'Blue'),
        //             React.createElement('li', null, 'Green'),
        //         ]),
        //         React.createElement(MyButton)
        //     ]
        // )
    )
}
