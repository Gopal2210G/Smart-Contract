
import React, {useEffect, useState} from 'react';
import { ethers }  from 'ethers';
import abi from './abi.json';

function App() {
  const[contract, setContract]=useState();
  const [todoCount, setTodoCount]=useState(0);
  const [inputItem, setInputItem]= useState();
  const [inputListItem, setInputListItem]= useState();
  const [inputListItemRes, setInputListItemRes]= useState();

  const contractExecution=async()=>{
    const provider=new ethers.BrowserProvider(window.ethereum);
    const singer=await provider.getSigner();
    const contract=new ethers.Contract("0x5d31B6882392A58538Be6656DF90F00E06eC8069",abi,singer);
    setContract(contract)

  }  
  const getTodoCount=async()=>{
    if(contract){
      const res =await contract.count();
      setTodoCount(Number(res))
    }
    // setTodoCount(res)
  }

  useEffect(()=>{
    contractExecution();
    // getTodoCount();
  },[])

  const handleChange=(e)=>{
    setInputItem(e.target.value)
  }

  const handleSubmit= async()=>{
    const res=await contract.getTodo(inputItem);
  }

  const handleGetTodoList= async()=>{
    const res=await contract.todoList(inputListItem);
    setInputListItemRes(res);
  }

  const handleTodoList = (e)=>{
    setInputListItem(e.target.value);
  }

  return (

    <div>
      <button className='Count1' onClick={getTodoCount}>Get the Count</button>
      <h1 className='Count'>Count of todo :- {todoCount}</h1>
      <div  className='value'>
        Enter the input value:
        <input className='box' onChange={handleChange}></input>
        <button className='Count1' onClick={handleSubmit}>Submit</button>
      </div>
      <div>
      <input className='box' onChange={handleTodoList}></input>
        <button className='Count1' onClick={handleGetTodoList}>Get Todolist of contract</button>
        <h3>{inputListItemRes}</h3>
      </div>
    </div>
  )
}

export default App;
