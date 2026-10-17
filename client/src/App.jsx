import './App.css';
import User from './get-user/User.jsx'

function App() {
  return (
    <main className="app">
      <h1 className="app-title">Users list</h1>
      <p className="app-description">
        Manage and view registered users.
      </p>

      <section className="user-section">
        <User />
      </section>
    </main>
  );
}

export default App
