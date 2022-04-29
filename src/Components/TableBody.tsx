import React from 'react';
import { HandleSelectUserInterface, User } from '../types'

interface TableBodyProps{
    isCheck: string[],
    handleClick: (e:HandleSelectUserInterface) => void,
    data: User[]
}

function TableBody(props: TableBodyProps) {
    const {data, isCheck, handleClick} = props
    return (
        <>
            {   
                data?.map((item) => (
                    <div className="table-body" key={item.id}>
                        <input 
                        className='td checkbox' 
                        type="checkbox" 
                        id={item.id} 
                        checked={isCheck.includes(item.id)} 
                        onChange={handleClick} 
                        />
                        <p className='td'>{item.name}</p>
                        <p className='td'>{item.username}</p>
                        <p className='td'>{item.email}</p>
                        <p className='td'>{item.phone}</p>
                        <p className='td'>{item.website}</p>
                        <p className='td'>{item.address.street}</p>
                    </div>
                ))
            }
        </>

    );
}

export default TableBody;
