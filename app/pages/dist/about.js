"use strict";
exports.__esModule = true;
var Layout_1 = require("../components/Layout");
var link_1 = require("next/link");
var AboutPage = function () {
    return (React.createElement(Layout_1["default"], { loadSidebar: false },
        React.createElement("div", { className: "row gutter dummy-height" },
            React.createElement("div", { className: "col-12" },
                React.createElement("h1", null, "Why use Crypto Accountant?"),
                React.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement("a", null, "Go home"))))));
};
exports["default"] = AboutPage;
