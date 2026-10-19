import './App.css';
import User from './get-user/User.jsx'
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
  ]);

  return (
    <main className="app">
      <h1 className="app-title">Users list</h1>
      <p className="app-description">
        Manage and view registered users.
      </p>

      <section className="user-section">
        <RouterProvider router={route}></RouterProvider>
      </section>
    </main>
  );
}

export default App
