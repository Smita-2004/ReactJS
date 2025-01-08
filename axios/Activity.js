import React, { useState } from "react";
import axios from 'axios';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the page from reloading on submit

        // Clear previous messages
        setMessage('');
        setError(null);

        // POST request to add a new post
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId: 1 // Assuming a static userId
        })
        .then(response => {
            setMessage('Post added successfully!');
            setTitle('');
            setBody('');
        })
        .catch(error => {
            setError('Failed to add post: ' + error.message);
        });
    };

    return (
        <div>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Activity;
