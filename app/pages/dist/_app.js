"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../public/css/app.scss");
require("font-awesome/css/font-awesome.min.css");
require("reflect-metadata");
var constants_1 = require("../constants");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    // importing css override for deployment
    if (constants_1.isProd)
        require('../public/css/production.scss');
    return React.createElement(Component, __assign({}, pageProps));
}
exports["default"] = App;
