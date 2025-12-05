import React from "react";
import useFetch from "./useFetch";

export default function CustomApi() {
    const data = useFetch("https://jsonplaceholder.typicode.com/users");

    if (!data) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>Users</h1>
            {data.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}
