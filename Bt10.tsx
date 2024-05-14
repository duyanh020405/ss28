import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      stt: 1,
      name: "Thiet ke Header",
      user: "Nguyen Van A",
      status: true,
      created_at: new Date(),
      delete: false
    },
    {
      stt: 2,
      name: "Thiet ke Manin",
      user: "Nguyen Van B",
      status: true,
      created_at: new Date(),
      delete: false
    }
  ])

  const changeStatus = (index:any) => {
    const newTodos = [...todos];
    newTodos[index].status = !newTodos[index].status;
    setTodos(newTodos);
  };

 

  return (
    <div style={{ backgroundColor: "grey", width: 1000 }}>
        <h4>Bai 10</h4>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>User</th>
            <th>Status</th>
            <th>Created_at</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={index}>
              <td>{item.stt}</td>
              <td>{item.name}</td>
              <td>{item.user}</td>
              <td>{item.status ? "true" : "false"}</td>
              <td>{item.created_at.toString()}</td>
              <td><button onClick={() => changeStatus(index)}>Change Status</button></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
