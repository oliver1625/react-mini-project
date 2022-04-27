import React from 'react';

function Header() {
    return (
        <header className="">
            <div className="container">
                <div className="header">
                    <h1>Users</h1>
                    <div className="">
                        <input className='search' type="text" placeholder='Search' />
                        <button className="btn-primary">+ New User</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
