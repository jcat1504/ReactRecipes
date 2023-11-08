class Message extends React.component {
    render() {
        return <h1>{`Hey, ${this.props.message}`}</h1>
    }
}

const App = () => {
    return (
        <div>
            <Message message="Why are you reading this?" />
        </div>
    )
}
