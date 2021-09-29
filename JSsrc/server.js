"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var App_1 = __importDefault(require("./App"));
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static("public"));
app.use(function (rec, res) {
    var html = (0, server_1.renderToString)(react_1["default"].createElement(App_1["default"], null));
    res.send("\n    <!DOCTYPE html>\n<html lang='en'>\n  <head>\n    <meta charset='utf-8' />\n    <link rel=\"icon\" href=\"images/favicon.ico\" />\n    <meta name='viewport' content='width=device-width, initial-scale=1' />\n    <title>Andramedian Design-Mohammad Amin Mohammadi</title>\n  </head>\n  <body>\n    <div id='root'>" + html + "</div>\n    <script src='main.js' async></script>\n  </body>\n</html>\n    ");
});
app.listen(port, function () { return console.log("http://localhost:" + port); });
//# sourceMappingURL=server.js.map