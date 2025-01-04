// import React from 'react';
// import {Link} from 'react-router-dom';

// function Home(){
//     const userId = 123;

//     return(
//         <div>
//             <h1>Home Page</h1>
//             <Link to={'/profile/${userId}'}>Go to profil with user ID</Link>
//         </div>
//     );
// }
// export default Home;

import React from "react";

function Home(){
    const queryParams = new URLSearchParams(window.location.search);
    const name= queryParams.get('name');
    return <h1>Welcome, {name}</h1>;
}
export default Home;