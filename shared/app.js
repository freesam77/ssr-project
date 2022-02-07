import React from "react";

const SimpleComponent = () => (
  <div
    style={{
      color: "red",
      border: "1px solid black",
      padding: "5px",
      display: "inline-block",
    }}
  >
    Aussie BB sucks
    <button
      onClick={() => {
        console.log("I agree");
      }}
    >
      Test Button
    </button>
  </div>
);

export const App = () => <SimpleComponent />;
