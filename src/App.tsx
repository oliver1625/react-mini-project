import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useState } from 'react';
import Table from './Components/Table';
import Header from './Components/Header';

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="">       
        <Table />
      </main>
    </QueryClientProvider>
  )
}
export default App;
