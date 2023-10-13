import axios from 'axios'
import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { Context, server } from '../main';
import { Link } from 'react-router-dom'

export const Header = () => {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
    const logoutHandler = async () => {
        setLoading(true);
        try {
            await axios.get(`${server}/users/logout`, { withCredentials: true, });
            toast.success("Logged out Successfully");
            setIsAuthenticated(false);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
            setIsAuthenticated(true);
            setLoading(false);
        }
    };

    return (
        <nav className='header'>
            <div>
                <h2>Todo App.</h2>
            </div>
            <article>
                <Link to={"/"}> Home</Link>
                <Link to={"/profile"}> Profile</Link>
                {isAuthenticated ? (
                    <button disabled={loading} onClick={logoutHandler} className='btn'>Logout</button>)
                    : (<button className='btn'>Login</button>
                    )}
            </article>
        </nav>);
}
