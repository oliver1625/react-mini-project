import React from 'react';
import { HandleSelectUserInterface } from '../types';

interface TableHeadProps{
    isCheckAll: boolean,
    handleSelectAll: (e:HandleSelectUserInterface) => void,
}

function TableHead(props: TableHeadProps) {
    const {isCheckAll, handleSelectAll} = props 
    return (
        <div className="table-head">
            <input className='th checkbox'
                type="checkbox" 
                checked={isCheckAll} 
                onChange={handleSelectAll} 
            />
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
