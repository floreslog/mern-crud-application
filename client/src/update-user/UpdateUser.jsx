import '../add-user/AddUser.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export function UpdateUser (){
    const users = {
        name:"",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);

    const navigate = useNavigate();

    const {id} = useParams();

    const inputHandler = (e) => {
        const {name, value} = e.target
        console.log(name, value);

        setUser({...user, [name]: value});
    };

    useEffect (() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) =>{
            setUser(response.data);
        })
        .catch((error) =>{
            console.log("Error: ", error);
        })
    },[id]);

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/user/${id}`, user)
        .then((response) => {
            toast.success(response.data.message, { position: "top-right" });
            navigate("/");
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
    };

    return(
        <div className="add-user">

            <Link to="/" type="button" className="btn-back">Back</Link>

            <h2 className="add-user__title">Update User</h2>

            <form className="add-user__form" onSubmit={submitForm}>
                <div className="add-user__field">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value= {user.name}
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
                    value= {user.email}
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
                    value= {user.address}
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

export default UpdateUser