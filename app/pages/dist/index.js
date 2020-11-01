"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Layout_1 = require("../components/Layout");
var react_1 = require("react");
var util_1 = require("../utils/util");
var IndexPage = function () {
    return (react_1["default"].createElement(Layout_1["default"], { loadSidebar: false },
        react_1["default"].createElement("div", { className: "row hero-splash" },
            react_1["default"].createElement("div", { className: "col-12" },
                react_1["default"].createElement("div", { className: "hero-content" },
                    react_1["default"].createElement("img", { src: util_1.Util.getAssetUrl("/img/logo.png") }),
                    react_1["default"].createElement("h1", null, "We make crypto taxes easier!"),
                    react_1["default"].createElement("p", null, "THE ACCOUNTANT THAT GETS THE IRS OFF YOUR BACK"),
                    react_1["default"].createElement("a", { href: "#learnMore" },
                        react_1["default"].createElement("button", null, "LEARN MORE"))))),
        react_1["default"].createElement("div", { className: "row info-splash gutter" },
            react_1["default"].createElement("div", { className: "col-12" },
                react_1["default"].createElement("h2", { id: "learnMore" }, "What we can do for you")),
            react_1["default"].createElement("div", { className: "col-4 splash-card" },
                react_1["default"].createElement("figure", null,
                    react_1["default"].createElement("img", { src: 'https://via.placeholder.com/200x200', alt: "thing1" }),
                    react_1["default"].createElement("figcaption", null, "We handle popular crypto currencies"))),
            react_1["default"].createElement("div", { className: "col-4 splash-card" },
                react_1["default"].createElement("figure", null,
                    react_1["default"].createElement("img", { src: 'https://via.placeholder.com/200x200', alt: "thing1" }),
                    react_1["default"].createElement("figcaption", null, "We handle popular crypto currencies"))),
            react_1["default"].createElement("div", { className: "col-4 splash-card" },
                react_1["default"].createElement("figure", null,
                    react_1["default"].createElement("img", { src: 'https://via.placeholder.com/200x200', alt: "thing1" }),
                    react_1["default"].createElement("figcaption", null, "We handle popular crypto currencies")))),
        react_1["default"].createElement("div", { className: "row list-splash" },
            react_1["default"].createElement("div", { className: "col-12" },
                react_1["default"].createElement("h2", null, "Privacy and Safety is guaranteed"),
                react_1["default"].createElement("ul", { className: "" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("img", { src: "https://via.placeholder.com/50x50" }),
                        "All your data is private."),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("img", { src: "https://via.placeholder.com/50x50" }),
                        "We use top tier security practices."),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("img", { src: "https://via.placeholder.com/50x50" }),
                        "All our fee transactions can be audited"),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("img", { src: "https://via.placeholder.com/50x50" }),
                        "No third parties"))))));
};
IndexPage.getInitialProps = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    success: true
                }];
        });
    });
};
exports["default"] = IndexPage;
