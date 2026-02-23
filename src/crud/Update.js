import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();
    let { id } = useParams();

    function getData() {

        fetch('http://localhost:3000/blog/' + id)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setTitle(res.Title)
                setDescription(res.Description)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    function updateData() {
        let item = { Title, Description }
        fetch('http://localhost:3000/blog/' + id, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                alert('Blog Updated Successfully')
                navigate('/');
            })
        })

        // console.warn(item)

    }

    return (
        <div>
            <h1>Update Form</h1>
            <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} />
            <input type="button" value="Update" onClick={updateData} />
        </div>
    );
}

export default Update;
