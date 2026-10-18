import './User.css';

export function User (){
    return(
    <table className="user-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Yayla</td>
          <td>yayla@example.com</td>
          <td>123 Main Street, Monclova</td>
        </tr>
      </tbody>
    </table>
    );
}

export default User