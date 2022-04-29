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

    const handleSelectAll = (e:HandleSelectUserInterface) => {
        setIsCheckAll(!isCheckAll);
        // console.log("0",!isCheckAll)

        setIsCheck(filteredResults.map((item:any) => item.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    }

    const handleClick = (e:HandleSelectUserInterface) => {
        const totalUsers = users.length; 
        const { id, checked } = e.target;
        let selectedUser = [...isCheck,id];
        
        if (!checked) {
            selectedUser = selectedUser.filter(item => item !== id);
        }
        setIsCheck(selectedUser);
        const totalSelectedUser = selectedUser.length;
        setIsCheckAll(totalSelectedUser == totalUsers)
        console.log(totalSelectedUser, totalUsers);
    }
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
