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
var react_1 = require("react");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    Footer.prototype.render = function () {
        return (react_1["default"].createElement("footer", null,
            react_1["default"].createElement("div", { className: "footer-nav" },
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" }, "Home")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" }, "About")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" }, "Privacy Policy")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" }, "Customer Portal")))),
            react_1["default"].createElement("div", { className: "footer-details" },
                react_1["default"].createElement("h4", null, "Crypto Accountant"),
                react_1["default"].createElement("p", null,
                    "123 Fake Street ",
                    react_1["default"].createElement("br", null),
                    "City of Fake, FK, 19023 ",
                    react_1["default"].createElement("br", null),
                    "tel. 243 X39 20P1")),
            react_1["default"].createElement("div", { className: "footer-copyright" },
                react_1["default"].createElement("p", null, this.props.copyright))));
    };
    return Footer;
}(react_1["default"].PureComponent));
exports["default"] = Footer;
