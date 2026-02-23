import React, { useState, useEffect } from 'react';

import axios from "axios";
// install npm i axios

export default function List() {

    const [Data, setData] = useState([]);

    // Get data
    useEffect(() => {
        axios.get("http://localhost:3000/blog").then(res => {
            setData(res.data);
        });
    }, []);

    return (
        <div>

            <br /><br />


            <br /><br />
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((item, i) =>
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{item.Title}</td>
                                <td>{item.Description}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
