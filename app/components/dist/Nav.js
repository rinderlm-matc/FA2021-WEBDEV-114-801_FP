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
var link_1 = require("next/link");
var react_1 = require("react");
var util_1 = require("../utils/util");
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        _this.state =
            {
                responsive: "",
                pages: [
                    {
                        index: 3,
                        title: "PROFILE",
                        route: "/profile"
                    },
                    {
                        index: 2,
                        title: "ABOUT",
                        route: "/about"
                    },
                    {
                        index: 1,
                        title: "HOME",
                        route: "/"
                    },
                ]
            };
        return _this;
    }
    Nav.prototype.render = function () {
        return (react_1["default"].createElement("header", null,
            react_1["default"].createElement("nav", null,
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement("a", { className: "logo" },
                        react_1["default"].createElement("img", { src: util_1.Util.getAssetUrl("/img/logo.png") }))),
                react_1["default"].createElement("input", { className: "menu-btn", type: "checkbox", id: "menu-btn" }),
                react_1["default"].createElement("label", { className: "menu-icon", htmlFor: "menu-btn" },
                    react_1["default"].createElement("span", { className: "nav-icon" })),
                react_1["default"].createElement("ul", { className: "menu" }, 
                // @ts-ignore
                this.state.pages.map(function (page) {
                    return (react_1["default"].createElement("li", { key: page.index, className: "click-color-fade" },
                        react_1["default"].createElement(link_1["default"], { href: page.route }, page.title)));
                })))));
    };
    return Nav;
}(react_1["default"].PureComponent));
exports["default"] = Nav;
