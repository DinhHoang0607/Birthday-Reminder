import "./App.css";
import Users from "./components/Users";
import data from "./components/data";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState(data);

  const handleSubmit = () => {
    setUsers([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>
        <Users users={users} setUsers={setUsers}/>
        <button onClick={handleSubmit}>Click</button>
      </section>
    </main>
  );
}

export default App;
