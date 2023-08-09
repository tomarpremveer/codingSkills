import React from 'react';

export default function HomePage() {
    const handleClick = () => {
        console.log('i was clicked');
    };

    return (
        <>
            <div>this is the home page</div>
            <button onClick={handleClick}>Click Me</button>
        </>
    );
}
