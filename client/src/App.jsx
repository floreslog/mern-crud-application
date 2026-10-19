import './App.css';
import User from './get-user/User.jsx'
import AddUser from './add-user/AddUser.jsx'
import UpdateUser from './update-user/UpdateUser.jsx'
import { RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User/>
    },
    {
      path: "/add",
      element: <AddUser/>
    },
    {
      path: "/update/:id",
      element: <UpdateUser />
    },
  ]);

  return (
    <main className="app">
      <section className="user-section">
        <RouterProvider router={route}></RouterProvider>
      </section>
    </main>
  );
}

export default App
