import React, { useState } from 'react';

const books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelo' },
    { id: 2, title: '1Q84', author: 'Haruki Murakami'},
    { id: 3, title: 'The Hobbit', author: 'JRR Tolkien'}
];

const App = () => {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleBookClick = bookId => {
        const selectedBook = books.find((book) => book.id === bookId);
        setSelectedBook(selectedBook);
    };

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <button onClick={() => handleBookClick(book.id)}>
                            {book.title}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedBook && (
                <div>
                    <h2>Selected Book</h2>
                    <h3>{selectedBook.title}</h3>
                    <p>Author {selectedBook.author}</p>
                </div>
            )}
        </div>
    );
};

export default App;