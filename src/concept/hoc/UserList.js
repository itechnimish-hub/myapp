function UserList({ abc }) {
    return (
        <ul>
            {abc.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;
