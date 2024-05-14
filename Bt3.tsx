import React, { Component } from 'react';

type User = {
  name: string;
  id: number;
  address: string;
};

interface Props {
  users: User[];
}

export default class Bt3 extends Component<Props> {
  render() {
    const users = [
      {
        name: "Duy",
        id: 1,
        address: "Khu 1",
      },
      {
        name: "Duy2",
        id: 2,
        address: "Khu 12",
      },
    ];
    return (
      <div>
        <h4>Bai 3</h4>
        {
          users.map(item =>(
            <div>
              <p>Ten : {item.name}</p>
              <p>Id :{item.id}</p>
              <p>Adress : {item.address}</p>
            </div>
          ))
        }
      </div>
    );
  }
}
