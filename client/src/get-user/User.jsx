import { useState, useEffect, useDebugValue } from 'react';
import './User.css';
import { Pencil, Trash2, Plus } from 'lucide-react';
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export function User (){

    const [users, setUsers] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {

        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);

        } catch (error) {
          console.log("Error while fetching data", error);
        }
      };
      fetchData();
    }, []);

    const deleteUser = async (userId) => {
      await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, {position: "top-right"});
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
    };


    return(
    <div className="user-container">
      <h1>Users List</h1>

      {users.length === 0?(
        <div className="noData">
          <h3>No data to display.</h3>
          <p>Please add a new user.</p>
        </div>
      ):(
        <table className="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <div className="action-buttons">
                      <Link
                        to={`/update/${user._id}`}
                        className="btn-edit"
                        title="Editar usuario"
                        aria-label="Editar usuario"
                      >
                        <Pencil size={17} />
                      </Link>

                      <button
                        className="btn-delete"
                        onClick={() => deleteUser(user._id)}
                        title="Borrar usuario"
                        aria-label="Borrar usuario"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}


      <div className="user-actions-footer">
        <Link to="/add" className="btn-new-user">
          <Plus size={18} />
          <span>New user</span>
        </Link>
      </div>
    </div>
    );
}

export default User