"use strict";
exports.__esModule = true;
var Csv_1 = require("../components/Csv");
var Layout_1 = require("../components/Layout");
var ProfilePage = function () {
    return (React.createElement(Layout_1["default"], { loadSidebar: false },
        React.createElement("div", { className: "row gutter dummy-height" },
            React.createElement("div", { className: "col-12" },
                React.createElement("h1", null, "Upload Your Transaction"),
                React.createElement(Csv_1["default"], null)))));
};
exports["default"] = ProfilePage;
