function Button(props) {
    const onClick = () => {
        alert('Button clicked yay');
    }
    return (
        <button onClick={onClick}>
            {props.label}
        </button>
    );
}

<Button label="Here is a button" />