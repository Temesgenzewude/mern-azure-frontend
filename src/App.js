import { useEffect } from "react";
import "./App.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  console.log('API URL:', process.env.REACT_APP_API_URL);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/get-users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>READ</h1>

      {users &&
        users.length > 0 &&
        users.map((user) => {
          return (
            <div>
              <h3>
                {user.name} {user.lastName}
              </h3>
            </div>
          );
        })}

      <button onClick={() => navigate("create")}>Create</button>
    </div>
  );
}

export default App;
