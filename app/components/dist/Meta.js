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
var head_1 = require("next/head");
var react_1 = require("react");
var util_1 = require("../utils/util");
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta(props) {
        return _super.call(this, props) || this;
    }
    Meta.prototype.render = function () {
        return (react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, this.props.title),
            react_1["default"].createElement("meta", { charSet: "UTF-8" }),
            react_1["default"].createElement("meta", { name: "viewport", content: constants_1.viewport }),
            react_1["default"].createElement("meta", { name: "author", content: constants_1.author }),
            react_1["default"].createElement("meta", { name: "description", content: constants_1.description }),
            react_1["default"].createElement("meta", { name: "keywords", content: constants_1.keywords }),
            react_1["default"].createElement("meta", { name: "robots", content: "index, follow" }),
            react_1["default"].createElement("meta", { property: "og:type", content: "crypto accountancy" }),
            react_1["default"].createElement("meta", { property: "og:title", content: "Crypto Accountant" }),
            react_1["default"].createElement("meta", { property: "og:description", content: constants_1.description }),
            react_1["default"].createElement("meta", { property: "og:image", content: util_1.Util.getAssetUrl("/img/favicon.ico") }),
            react_1["default"].createElement("meta", { property: "og:url", content: "PERMALINK" }),
            react_1["default"].createElement("meta", { property: "og:site_name", content: constants_1.title }),
            react_1["default"].createElement("link", { rel: "shortcut icon", href: util_1.Util.getAssetUrl("/img/favicon.ico") }),
            react_1["default"].createElement("link", { rel: "canonical", href: "https://mcaweb.matc.edu/rinderlm/webdev114/final/" })));
    };
    return Meta;
}(react_1["default"].PureComponent));
exports["default"] = Meta;
