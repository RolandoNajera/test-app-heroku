import React, { useEffect, useState } from "react";
const { render } = require("react-dom");

const App = () => {

    const [resp, setResp] = useState("");

    useEffect(() => {
        getRequest();
    }, []);

    const getRequest = async () => {
        const fetchResponse = await fetch('https://test-server-heroku.herokuapp.com');
        const response = await fetchResponse.text();
        console.log(response);
        setResp(response);
    }

    return (
      <div>
        <h1>Adopt Me!</h1>
        {resp}
      </div>
    );
  };

  render(<App />, document.getElementById("root"));