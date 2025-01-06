import React from "react";
import { useParams } from "react-router-dom";

const Profile = ()=>{
    const {userId} = useParams();
    return(
        <div>
            <h1>Profile Page</h1>
            <p>User ID:{userId}</p>
        </div>
    );
}
export default Profile;