function UserList({ abc }) {
    return (
        <ul>
            {
                abc.map((item, i) =>
                    <li>{item.name} {item.username}</li>
                )
            }

        </ul>
    );
}

export default UserList;
