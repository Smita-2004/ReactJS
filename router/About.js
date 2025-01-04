import React from "react";
function About(){
    const queryParams = new URLSearchParams(window.location.search);
    const method = queryParams.get('method');
    return <h1> The method is method </h1>;
}
export default Contact;