import { useState, useEffect } from 'react';
import './User.css';
import { Pencil, Trash2, Plus } from 'lucide-react';
import axios from "axios";
import { Link } from "react-router-dom";

export function User (){

    const [users, setUsers] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {

        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);

        } catch (error) {
          console.log("Error while fetching data", error)
        }
      };
      fetchData();
    }, []);


    return(
    <div className="user-container">
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
                    <button
                      className="btn-edit"
                      onClick=""
                      title="Editar usuario"
                      aria-label="Editar usuario"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      className="btn-delete"
                      onClick=""
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