import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
                    <Link to="/contact" style={styles.link}>Contact</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/services" style={styles.link}>Services</Link>
                </li>
            </ul>
        </nav>
    );
};

// Styling for Navbar
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

function App() {
    return (
        <Router>
            <Navbar /> {/* Use Navbar component here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
    );
}

export default Navigation1;
