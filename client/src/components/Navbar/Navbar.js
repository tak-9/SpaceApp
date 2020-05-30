import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from 'axios';
import { useHistory } from 'react-router';
// import { UserProvider, useUserContext } from "../../utils/userLoginContext"

function Navbar() {

    const [username, setUsername] = useState()
    // const [state, dispatch] = useUserContext();

    const history = useHistory();

    const logout = e => {
        e.preventDefault();

        axios.get('/api/users/logout').then((res) => {

            if (res.data.success) {
                setUsername(null);
                // dispatch({ type: "logged out", username: "" })
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
                localStorage.removeItem('loggedIn')
                localStorage.removeItem('username')

                history.push("/");
            }
        }).catch(err => {
            if (err) throw err;
            console.log(err)
        })
    }

    return (
        <div className="container-fluid">
        </div>
    )
}

export default Navbar;