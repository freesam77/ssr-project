const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
const port = 3000;

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

const template = (content) =>
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div id="app">
    ${content}
    </div>
    <script src="/index.js"></script>
    </body>
    </html>`;

app.get("/", (req, res) => {
  const string = ReactDOMServer.renderToString(<SimpleComponent />);
  res.send(template(string));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
