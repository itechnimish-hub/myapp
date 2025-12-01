import UserList from "./concept/hoc/UserList";
import withFetch from "./concept/hoc/withFetch";




function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const UserListWithFetch = withFetch(UserList, API_URL);

  return (
    <div>
      <h2>Users Data:</h2>
     <UserListWithFetch />
    

    </div>
  );
}

export default App;
