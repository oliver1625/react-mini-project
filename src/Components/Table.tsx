import React, { useEffect } from 'react';
import { useState } from "react";
import { User, HandleSelectUserInterface } from '../types';

import TableBody from './TableBody';
import TableHead from './TableHead';
import Header from './Header';
import useUsers from '../useQuery/useQuery';


function Table() {
    const { status, data:users } = useUsers();

    const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
    const [isCheck, setIsCheck] = useState<string[]>([]);
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    console.log(users);
    
    useEffect(() =>{
        setData(users?.sort((a: User,b :User) => {
            if(a.username < b.username) { return -1; }
            if(a.username > b.username) { return 1; }
            return 0;
        }));
        
        setFilteredResults(users?.sort((a :User, b :User) => {
            if(a.username < b.username) { return -1; }
            if(a.username > b.username) { return 1; }
            return 0;
        }));
        
    },[users])

    useEffect(() => {
        if (!isCheckAll) {
            setIsCheck([]);
        }
        
    },[isCheckAll])

    const handleSelectAll = (e:HandleSelectUserInterface) => {
        setIsCheckAll((prev) => !prev);
        setIsCheck(filteredResults.map((item:any) => item.id));
    }

    const handleClick = (e:HandleSelectUserInterface) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    }

    // const[selectUser, setSelectUser] = useState();

    const searchItems = (e: any) => {
        const searchValue = e.target.value;
        console.log(searchValue);
        if (searchValue !== '') {
            const filteredData = users.filter(({name,username,email,address,website,phone} :User) => {
                return (
                    name.toLowerCase().includes(searchValue.toLowerCase()) 
                    || username.toLowerCase().includes(searchValue.toLowerCase())
                    || email.toLowerCase().includes(searchValue.toLowerCase())
                    || address?.street.toLowerCase().includes(searchValue.toLowerCase())
                    || website.toLowerCase().includes(searchValue.toLowerCase())
                    || phone.toLowerCase().includes(searchValue.toLowerCase())
                )
                // return name[0].toLowerCase() === (searchValue.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(users)
        }
    }


    return (
        <div className="table">
            <Header
                handleSearch={searchItems}
                // selectUser={selectUser}
            />
            <div className="table-responsive">
                <div className="table-wrapper">
                    <TableHead  handleSelectAll={handleSelectAll} isCheckAll={isCheckAll} />
                    { status === "loading" ? <h1>Loading</h1>
                    : <TableBody data={filteredResults} handleClick={handleClick} isCheck={isCheck} /> }
                </div>
            </div>
        </div>
    );
}

export default Table;
