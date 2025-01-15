import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Navbar Component
const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/about" style={styles.link}>About</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/todos" style={styles.link}>Todos</Link>
                </li>
            </ul>
        </nav>
    );
};

// Home Component
const Home = () => {
    return <h2>Welcome to the Home Page</h2>;
};

// About Component
const About = () => {
    return <h2>About Us</h2>;
};

// Todos Component
const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from API
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('An error occurred while fetching data');
                setLoading(false);
            });
    }, []);

    // Display loading, error, or the list of todos
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

// Styles for Navbar
const styles = {
    nav: {
        background: '#333',
        padding: '10px',
    },
    ul: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    li: {
        marginRight: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
};

// App Component
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/todos" element={<Todos />} />
            </Routes>
        </Router>
    );
};

export default Activity11;
