import React, { useState } from "react";
import axios from 'axios';

const PostDataComponent = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handlePutRequest = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title: 'JA',
            body: 'This is JA section',
            userId: 1 // corrected userId
        })
        .then(response => {
            console.log(response);
            setResponseData(response.data); // Set response data correctly
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
