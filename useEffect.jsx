function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("https://apiexample.com/booksarefornerds")
        .then((response)=> response.json())
        .then((data) => setBooks(data));
    }, []);

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    );
}