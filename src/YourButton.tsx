

type Props = {
    buttonValue: number,
    handleClick: (value:number)=>void
}

export default function YourButton({ buttonValue, handleClick }: Props) {
    console.log(`The YourButton (${buttonValue}) function is being executed`);
    return (
        <button onClick={() => handleClick(buttonValue)} style={{borderColor:'blue', margin: '10px'}} >
            +{buttonValue}
        </button>
    )
}