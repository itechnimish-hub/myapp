import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from "./concept/Hooks/CounterComponent";
import CustomApi from "./concept/Hooks/CustomApi";
import Parent from "./concept/Parent";
import List from "./crud/List";
import FunctionalErrorBoundary from "./FunctionalErrorBoundary";
import BugComponent from "./BugComponent";
import Uncontrol from "./concept/Componenttype/Uncontrol";
import Shop from "./concept/Shop";
import Navbar3 from './navbar/Navbar3';
import Memo from './concept/Memo';

import UserList from "./concept/hoc/UserList";
import withFetch from "./concept/hoc/withFetch";
import Validation from './concept/Validation';
import Useeffect from './concept/Hooks/Useeffect';
import Insert from './crud/Insert';
import Counter from './concept/Couter';
import Maincomponent from './contextapi/Maincomponent';



// import ComponentWithError from "./crud/error/ComponentWithError";
// import { ErrorBoundary }
//   from "react-error-boundary";

// const ErrorFallback =
//   ({ error }) => (
//     <div role="alert">
//       <h2>
//         Something went wrong:
//       </h2>
//       <pre>
//         {error.message}
//       </pre>
//     </div>
//   );


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const UserListWithFetch = withFetch(UserList, API_URL);

  return (
    <div>
      {/* <UserListWithFetch /> */}
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}>
        <ComponentWithError />
      </ErrorBoundary> */}
      {/* <Navbar3  data="hello" /> */}
      {/* 
      <Insert />
      <List /> */}
      <Maincomponent />
    </div>
  );
}

export default App;
