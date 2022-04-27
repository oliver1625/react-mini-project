import React from 'react';

function TableHead() {
    return (
        <div className="table-head">
            <input className='th' type="checkbox" />
            <h3 className='th'>Name</h3>
            <h3 className='th'>Username</h3>
            <h3 className='th'>Email</h3>
            <h3 className='th'>Phone</h3>
            <h3 className='th'>Website</h3>
            <h3 className='th'>Address</h3>
        </div>
    );
}

export default TableHead;
