import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
    const handleClick = () => {
        console.log('I was clicked')
    }
    return (
        <div>
        <div>
            Hi I'm the another version of home component
            </div>
            <Link to="/users">Users</Link>
            <button onClick={handleClick} >Click me</button>
        </div>
    )
}

export default {
    component: Home
} 