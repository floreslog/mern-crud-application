import './AddUser.css';
import { Link } from "react-router-dom";

export function AddUser (){

    return(
        <div className="add-user">

            <Link to="/" type="button" className="btn-back">Back</Link>

            <h2 className="add-user__title">Add User</h2>

            <form className="add-user__form">
                <div className="add-user__field">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
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