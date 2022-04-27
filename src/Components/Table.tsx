import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table() {
    return (
        <div className="table">
            <TableHead />
            <TableBody />
        </div>
    );
}

export default Table;
