"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var constants_1 = require("../constants");
var Footer_1 = require("../components/Footer");
var Meta_1 = require("../components/Meta");
var Nav_1 = require("../components/Nav");
var react_1 = require("react");
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(props) {
        var _this = _super.call(this, props) || this;
        _this.acceptCookie = function () {
            _this.setState({ isCookieAccepted: !_this.state.isCookieAccepted });
        };
        _this.state = {
            "isCookieAccepted": false
        };
        return _this;
    }
    Layout.prototype.render = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Meta_1["default"], { title: constants_1.title }),
            react_1["default"].createElement(Nav_1["default"], null),
            this.props.loadSidebar
                ?
                    (react_1["default"].createElement("main", null,
                        react_1["default"].createElement("div", { className: "content" }, this.props.children),
                        react_1["default"].createElement("div", { className: "sidebar" },
                            react_1["default"].createElement("h2", null, "Crypto News"),
                            react_1["default"].createElement("article", null,
                                react_1["default"].createElement("h3", null, "Bitcoin"),
                                react_1["default"].createElement("p", null, "Prices going up")))))
                :
                    (react_1["default"].createElement("main", null,
                        react_1["default"].createElement("div", { className: "splash" }, this.props.children))),
            !this.state.isCookieAccepted
                ?
                    (react_1["default"].createElement("div", { className: "cookie-consent" },
                        react_1["default"].createElement("p", null,
                            "This is a statically exported ",
                            react_1["default"].createElement("a", { href: "https://www.nextjs.com", target: "_blank" }, "NextJs"),
                            " project.\u00A0 It was build in Typescript superset, React HTML rendering, Sass CSS compilation, and Mongo database backend. You can browse the project files at my public github\u00A0",
                            react_1["default"].createElement("a", { href: "https://github.com/rinderlm-matc/FA2021-WEBDEV-114-801_FP", target: "_blank" }, "repository"),
                            "."),
                        react_1["default"].createElement("p", { className: "cookie-accept", onClick: this.acceptCookie }, "x")))
                : (react_1["default"].createElement("div", null)),
            react_1["default"].createElement(Footer_1["default"], { copyright: constants_1.copyright })));
    };
    return Layout;
}(react_1["default"].PureComponent));
exports["default"] = Layout;
