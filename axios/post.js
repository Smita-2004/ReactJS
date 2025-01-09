  import React, { useState } from "react";
import axios from 'axios';

const PostDataComponent = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handlePostRequest = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
        .then(response => {
            console.log(response);
            setResponseData(response.data); // Set response data
        })
        .catch(error => {
            setError(error.message);
        });
    };

    return (
        <div>
            <button onClick={handlePostRequest}>Send Post Request</button>
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
