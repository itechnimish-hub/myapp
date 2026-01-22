import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function List() {

    const [Data, setData] = useState([]);
    const [search, setSearch] = useState("");
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage] = useState(5);  // show 5 data per page

    // Get data
    useEffect(() => {
        axios.get("http://localhost:3000/blog").then(res => {
            setData(res.data);
        });
    }, []);

    // Delete Data
    function Deletedata(id) {
        axios.delete(`http://localhost:3000/blog/${id}`).then(() => {
            alert(" Blog Deleted Successfully");
            setData(Data.filter(item => item.id !== id)); // update UI instantly
        });
    }

    // Filter Data 
    const filteredData = Data.filter(item =>
        (item.Title ? item.Title.toLowerCase() : "").includes(search.toLowerCase()) ||
        (item.Description ? item.Description.toLowerCase() : "").includes(search.toLowerCase())
    );
    // Pagination Logic
    // const lastIndex = currentPage * postPerPage;
    // const firstIndex = lastIndex - postPerPage;
    // const currentPosts = filteredData.slice(firstIndex, lastIndex);
    // console.log(currentPosts)
    // const totalPages = Math.ceil(filteredData.length / postPerPage);
    // console.log(totalPages)
    return (
        <div>
            <br /><br />

            <input
                type="text"
                placeholder="Search by title or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)
                }
            />

            <br /> <br />

            <table border="1">
                <thead>
                    <tr>
                        <th>ID </th>
                        <th> Title </th>
                        <th> Description </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item, i) =>
                            <tr key={item.id} >
                                <td>{i + 1} </td>
                                < td > {item.Title} </td>
                                < td > {item.Description} </td>
                                < td >
                                    <button onClick={() => Deletedata(item.id)}> Delete </button>
                                    < Link to={"/update/" + item.id} >
                                        <button>Edit </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* 
            <div style={{ marginTop: "10px" }}>
                {
                    [...Array(totalPages).keys()].map(num =>
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num + 1)}
                            style={{ margin: "3px", background: currentPage === num + 1 ? "lightgreen" : "" }}
                        >
                            {num + 1}
                        </button>
                    )
                }
            </div> */}
        </div>
    );
}
