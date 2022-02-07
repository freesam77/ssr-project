const express = require("express");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const React = require("react");
const { App } = require("../shared/app.js");
const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
const port = 3000;

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
  const string = ReactDOMServer.renderToString(<App />);
  res.send(template(string));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
