import logo from './logo.svg';
import './App.css';
import { Button, InputGroup, Form } from 'react-bootstrap';
import List from "./Component/List.js";
import { useState } from "react";
import DataList from "./Component/DataList.js";

function App() {
  const [listData, setListData] = useState([]);

  const handleClick = (enterddata) => {
    if (!enterddata || enterddata.trim() === '') {
      alert('Please enter text')
      return
    }
    let newArr = [...listData, { name: enterddata, key: new Date().getTime().toString(), completed: false }];
    setListData(newArr);
    // console.log(listData)
  }

  const handleDelete = (key) => {
    let filteredArray = listData.filter((e) => {
      return e.key !== key;
    })
    setListData(filteredArray);
  }

  const handleCheck = (key, isCheck) => {
    const newArr = listData.map((e) => {
      return e.key === key ? { ...e, completed: isCheck } : e
    });
    setListData(newArr);
    console.log(key, isCheck)
    console.log(newArr);
  }

  const handleSave = (key, name) => {
    if (!name || name.trim() === '') {
      alert('Please enter text')
      return
    }
    const newArr = listData.map((e) => {
      return e.key === key ? { ...e, name: name } : e
    });
    setListData(newArr);
  }

  return (
    <div className='Container-layout'>
      <List handleClick={handleClick} />
      <DataList listData={listData} handleDelete={handleDelete} handleChange={handleCheck} handleSave={handleSave} />
    </div>
  );
}

export default App;
