import React from "react";
const { render } = require("react-dom");

const App = () => {
    return (
      <div>
        <h1>Adopt Me!</h1>
      </div>
    );
  };

  render(<App />, document.getElementById("root"));