import {Routes,Route} from "react-router-dom";

import UserList from "../pages/UserList";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<UserList />}
      />

      <Route
        path="/create"
        element={<CreateUser />}
      />

      <Route
        path="/edit/:id"
        element={<EditUser />}
      />
    </Routes>
  );
}