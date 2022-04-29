import React from 'react';
import AddUserBtn from './AddUserBtn';

function Header( props:any) {
    const { searchHandle, selectUser, handleSearch } = props
    return (
        <header className="">
            <div className="header">
                <h1>Users</h1>
                <div className="header-right">
                    <div className="search-box">
                        <input 
                            value={selectUser}
                            className='search' 
                            type="text" 
                            onChange={e => handleSearch(e)} 
                            placeholder='Search' 
                        />
                        <a href="" className='icon'>
                            <i className="fa fa-search" id='searchIcon'></i> 
                        </a>
                    </div>                   
                    <AddUserBtn />
                </div>
            </div>
        </header>
    );
}

export default Header;
