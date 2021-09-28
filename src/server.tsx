import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use((rec, res) => {
  const html = renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link rel="icon" href="images/favicon.ico" />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>Andramedian Design-Mohammad Amin Mohammadi</title>
  </head>
  <body>
    <div id='root'>${html}</div>
    <script src='main.js' async></script>
  </body>
</html>
    `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
