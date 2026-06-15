import React, { useState } from 'react';

export default function Map_fun(props) {
    const [Search, setSearch] = useState({
        list: [
            { name: 'abc', email: 'abc@gmail.com', age: 23 },
            { name: 'xyz', email: 'xyz@gmail.com', age: 25 },
            { name: 'pqr', email: 'pqr@gmail.com', age: 45 },
            { name: 'pqr', email: 'pqr@gmail.com', age: 45 }
        ]
    });

    return <div>

        <h1>Email: {props.data}</h1>
        <br /><br />
        <table border='1'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    Search.list.map((item, i) =>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
}
