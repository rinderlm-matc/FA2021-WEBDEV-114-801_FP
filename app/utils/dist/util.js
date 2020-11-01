"use strict";
exports.__esModule = true;
exports.Util = void 0;
var constants_1 = require("../constants");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getAssetUrl = function (path) {
        return constants_1.isProd ? constants_1.baseStaticPath + path : path;
    };
    Util.getDatabaseConnection = function () {
    };
    return Util;
}());
exports.Util = Util;
