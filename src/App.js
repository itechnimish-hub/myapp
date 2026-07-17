import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterComponent from "./concept/Hooks/CounterComponent";
import CustomApi from "./concept/Hooks/CustomApi";
import Parent from "./concept/Parent";
// import List from "./crud/List";
import FunctionalErrorBoundary from "./FunctionalErrorBoundary";
import React, { useState } from 'react';

import Shop from "./concept/Shop";
import Navbar3 from './navbar/Navbar3';

import UserList from "./concept/hoc/UserList";
import withFetch from "./concept/hoc/withFetch";
import Validation from './concept/Validation';
import Useeffect from './concept/Hooks/Useeffect';
import Insert from './crud/Insert';
import Counter from './concept/Couter';
import Maincomponent from './contextapi/Maincomponent';
import Update from './crud/Update';
import Usecallback from './concept/Callback/Usecallback';
import StateUpdate from './concept/Componenttype/StateUpdate';
import Control from './concept/Componenttype/Control';
import Map_fun from './concept/Map_fun';
import List from './concept/List';
import Navbar1 from './navbar/Navbar1';
import Navbar from './navbar/Navbar';
import AdminPanel from './concept/Condition/AdminPanel';
import Style from './css/Style';
import Child from './concept/Callback/Child';
import Product from './redux/component/Product';
import Cart from './redux/component/Cart';

// import ComponentWithError from "./crud/error/ComponentWithError";
// import { ErrorBoundary } from "react-error-boundary";
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

  // const [person, setPerson] = useState({ name: "aakash", email: "a@gmial.com", age: 30 });

  // const API_URL = "https://jsonplaceholder.typicode.com/users";
  // const UserListWithFetch = withFetch(UserList, API_URL);
  // const UserListWithFetch1 = withFetch(UserList, API_URL1);
  return (
    <>
      {/* <Navbar /> */}
      {/* 
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="update/" element={<Update />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes> */}
      {/* <UserListWithFetch /> */}
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}>
        <ComponentWithError />
      </ErrorBoundary> */}
      {/* <Navbar3 /> */}
      {/* <Maincomponent /> */}
      {/* <UserListWithFetch /> */}
      {/* <Map_fun data={email} /> */}
      {/* <Control /> */}

      <Product />
      <hr />
      <Cart />
    </>
  );
}

export default App;
