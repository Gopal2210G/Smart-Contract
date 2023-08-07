// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract todo{
    uint8 public count=0;
    mapping (uint8=>string) public todoList;

    function getTodo(string memory item) public  {
        todoList[count++]=item;
    }
}

// 0xd9145CCE52D386f254917e481eB44e9943F39138