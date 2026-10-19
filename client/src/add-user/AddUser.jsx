import './AddUser.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function AddUser (){
    const users = {
        name:"",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);

    const navigate = useNavigate();

    const inputHandler = (e) => {
        const {name, value} = e.target
        console.log(name, value);

        setUser({...user, [name]: value});
    };

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user", user)
        .then((response) => {
            console.log("User created sucessfully.");
            navigate("/");
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
    };

    return(
        <div className="add-user">

            <Link to="/" type="button" className="btn-back">Back</Link>

            <h2 className="add-user__title">Add User</h2>

            <form className="add-user__form" onSubmit={submitForm}>
                <div className="add-user__field">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={inputHandler}
                    name="name"
                    placeholder="Enter full name"
                    required
                />
                </div>

                <div className="add-user__field">
                <label htmlFor="email">E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={inputHandler}
                    name="email"
                    placeholder="Enter email address"
                    required
                />
                </div>

                <div className="add-user__field">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    onChange={inputHandler}
                    name="address"
                    placeholder="Enter address"
                    required
                />
                </div>

                <button className="add-user__submit" type="submit">
                Submit
                </button>
            </form>
        </div>
    );
}

export default AddUser