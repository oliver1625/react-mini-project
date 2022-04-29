import React from 'react';
import AddUserBtn from './AddUserBtn';

function Header( props:any) {
    const { searchHandle, selectUser, handleSearch } = props
    return (
        <header className="">
            <div className="header">
                <h1>Users</h1>
                <div className="">
                    <div className="search-wrapper">
                        <input 
                            value={selectUser}
                            className='search' 
                            type="text" 
                            onChange={e => handleSearch(e)} 
                            placeholder='Search' 
                        />
                        <i id='searchIcon' className="fa fa-search"></i> 
                    </div>                   
                    <AddUserBtn />
                </div>
            </div>
        </header>
    );
}

export default Header;
