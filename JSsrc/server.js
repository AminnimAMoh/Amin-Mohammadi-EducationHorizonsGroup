"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const App_1 = __importDefault(require("./App"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use((rec, res) => {
    const html = (0, server_1.renderToString)(react_1.default.createElement(App_1.default, null));
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
//# sourceMappingURL=server.js.map