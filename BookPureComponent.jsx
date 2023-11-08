import React from 'react';

const BookProfile = memo(function BookProfile({ title, author, genre }) {
    return (
        <>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>
        </>
    );
});

export default function BookRegForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    return (
        <>
        <label>
            Title:
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            Author:
            <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
            Genre:
            <input value={genre} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <hr />
        <BookProfile title={title} author={author} genre={genre} />
        </>
    );
}