import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Update from './Update';

export default function List1() {

    const [Data, setData] = useState([]);


    // Get data
    useEffect(() => {
        axios.get("http://localhost:3000/blog").then(res => {
            setData(res.data);
        });
    }, []);


    function Deletedata(id) {
        axios.delete(`http://localhost:3000/blog/${id}`).then(() => {
            alert(" Blog Deleted Successfully");
            setData(Data.filter(item => item.id !== id)); // update UI instantly
        });
    }
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((item, i) =>
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{item.Title}</td>
                                <td>{item.Description}</td>
                                <td >
                                    <button onClick={() => Deletedata(item.id)}> Delete </button>
                                    <Link to={"/update/" + item.id} >
                                        <button>Edit </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
