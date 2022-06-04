import React, { useEffect, useState } from "react";
const { render } = require("react-dom");

const App = () => {

    const [resp, setResp] = useState();
    const [users, setUsers] = useState("No users!");

    useEffect(() => {
        getRequest();
        getUsers();
    }, []);

    const getRequest = async () => {
        const fetchResponse = await fetch('https://test-server-heroku.herokuapp.com');
        const response = await fetchResponse.text();
        console.log(response);
        setResp(response);
    }

    const getUsers = async () => {
      const fetchResponse = await fetch('https://test-server-heroku.herokuapp.com/users');
      const response = await fetchResponse.json();
      console.log(response);
      setUsers(response);
  }

    return (
      <div>
        <h1>{resp ? 'Server up!': 'Server down!' }</h1>
        { users ? JSON.stringify(users) : 'no users!'}
      </div>
    );
  };

  render(<App />, document.getElementById("root"));