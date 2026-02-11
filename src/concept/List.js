import React, { useState, useEffect, memo } from 'react';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

function List() {

    const [Search, setSearch] = useState(
        [
            {
                "id": "092e",
                "Title": "gfgfg",
                "Description": "gfgfgf"
            },
            {
                "id": "56e1",
                "Title": "test",
                "Description": "acv"
            },
            {
                "id": "56e2",
                "Title": "Hello12",
                "Description": "world"
            }
        ]);

    console.log("hello");

    return <div>
        {/* <br /><br /> */}
        {/* <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button> */}
        <table >
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    Search.map((item, i) =>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{item.Title}</td>
                            <td>{item.Description}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>

}
export default memo(List);