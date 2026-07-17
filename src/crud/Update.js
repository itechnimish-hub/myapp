import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    // Get Single Blog Data
    const getData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:3000/blog/${id}`
            );

            setTitle(res.data.Title);
            setDescription(res.data.Description);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Update Blog Data
    const updateData = async () => {
        try {
            const item = { Title, Description };

            await axios.put(
                `http://localhost:3000/blog/${id}`,
                item

            );

            alert("Blog Updated Successfully");
            navigate("/");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            <h1>Update Form</h1>

            <input
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type="button"
                value="Update"
                onClick={updateData}
            />
        </div>
    );
}

export default Update;