function User(props) {
    const { message } = props;
    const [messageState, setMessageState] = useState(message);

    const handleChange = () => {
        setMessageState("Hello World!");
    };

    return (
        <div>
            <h1>{messageState}</h1>
            <button onClick={handleChange}>Change Message?</button>
        </div>
    );
};

function App() {
    const [mainMessage, setMainMessage] = useState("Hello World!");
    return (
      <>
        <button onClick={() => setMainMessage("Hello Cats!!")}>
          Change Message?
        </button>
        <User message={mainMessage} />
      </>
    );
  }
  