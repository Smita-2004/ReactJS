import React, { useState } from "react";
import axios from "axios";

const FetchUserComponent = () => {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchUser = () => {
        // Clear previous results
        setUserData(null);
        setError(null);

        // Fetch user details from the API
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                setUserData(response.data); // Store the user data on success
            })
            .catch(() => {
                setError("User not found or invalid ID"); // Display error if user not found
            });
    };

    return (
        <div>
            <h2>Fetch User Details</h2>
            <div>
                <label>Enter User ID:</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                    required
                />
                <button onClick={handleFetchUser}>Fetch User</button>
            </div>

            {userData && (
                <div>
                    <h3>User Details</h3>
                    <p><strong>ID:</strong> {userData.id}</p>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>City:</strong> {userData.address.city}</p>
                </div>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default FetchUserComponent;
