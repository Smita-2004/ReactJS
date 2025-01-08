import React, { useState } from "react";
import axios from 'axios';

const DeleteDataComponent = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleDeleteRequest = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setMessage('Post deleted successfully');// Set response data correctly
        })
        .catch(error => {
            setError(error.message); // Complete the catch block
        });
    };

    return (
        <div>
            <button onClick={handlePutRequest}>Send PUT Request</button>
            {responseData && (
                <div>
                    <h2>Response Data:</h2>
                    <p>ID: {responseData.id}</p>
                    <p>Title: {responseData.title}</p>
                    <p>Body: {responseData.body}</p>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default PostDataComponent;
