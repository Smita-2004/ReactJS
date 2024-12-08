// import React,{useState} from "react";
// import './Formvalidation.css';

// const Formvalidation = () =>{
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmpassowrd:  '',

//     })
//     const [errors,setErrors] = useState({})
//     const 


//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         const validationFormErrors= {}
//         if(!formData.username.trim()){
//             validationErrors.username = ""
//         }

//         if(!formData.email.trim()){
//             validationErrors.email = "email is required"
//         }
//         else if(!/\S+@\S+\.\S+/.test(formData.email){
//             validationErrors.email="email not valid";
//         }

//     }
//     }


import React, { useState } from "react";
import './Formvalidation.css';

const Formvalidation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '', // Fixed typo from 'confirmpassowrd' to 'confirmpassword'
    });

    const [errors, setErrors] = useState({});

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to validate form inputs
    const validate = () => {
        let validationErrors = {};
        if (!formData.username) validationErrors.username = "Username is required";
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!formData.password) validationErrors.password = "Password is required";
        if (formData.password.length < 6) validationErrors.password = "Password must be at least 6 characters";
        if (formData.confirmpassword !== formData.password) validationErrors.confirmpassword = "Passwords do not match";

        return validationErrors;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form data submitted:", formData);
            // Proceed with form submission or any other action
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                />
                {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Formvalidation;
