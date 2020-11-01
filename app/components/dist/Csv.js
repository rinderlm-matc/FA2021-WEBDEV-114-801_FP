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
var React = require("react");
var csv_1 = require("../utils/csv");
var Csv = /** @class */ (function (_super) {
    __extends(Csv, _super);
    function Csv(props) {
        var _this = _super.call(this, props) || this;
        _this.fileReader = new FileReader();
        _this.handleFileRead = function () {
            if (_this.fileReader.result != null) {
                _this.setState({
                    transactions: csv_1.csv.convertToTransactionList(_this.fileReader.result.toString())
                });
                _this.setState({
                    result: csv_1.csv.calculateTax(_this.state.transactions)
                });
                _this.setState({ isLoaded: true });
            }
            else {
                alert("error parsing file");
            }
        };
        _this.transactionFileUpload = function (file) {
            _this.setState({ isLoaded: false });
            _this.fileReader = new FileReader();
            _this.fileReader.onloadend = _this.handleFileRead;
            _this.fileReader.readAsText(file);
        };
        _this.state = {
            transactions: {},
            result: {},
            isLoaded: false
        };
        return _this;
    }
    Csv.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement("form", null,
                        React.createElement("input", { type: "file", accept: ".csv", name: "upload", onChange: function (e) { return _this.transactionFileUpload(e.target.files[0]); }, title: "Enter csv" }))),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h6", null,
                        "Total Volume : ",
                        this.state.result.volume),
                    React.createElement("h6", null,
                        "Total Buys : ",
                        this.state.result.buys),
                    React.createElement("h6", null,
                        "Total Sells : ",
                        this.state.result.sells),
                    React.createElement("h6", null,
                        "Total Fees : ",
                        this.state.result.fees)),
                React.createElement("div", { className: "col-12" }, this.state.isLoaded
                    ? (React.createElement("div", null,
                        React.createElement("table", null,
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "Tx ID"),
                                    React.createElement("th", null, "Order Tx ID"),
                                    React.createElement("th", null, "Pair"),
                                    React.createElement("th", null, "Time"),
                                    React.createElement("th", null, "Type"),
                                    React.createElement("th", null, "Order Type"),
                                    React.createElement("th", null, "Price"),
                                    React.createElement("th", null, "Cost"),
                                    React.createElement("th", null, "Fee"),
                                    React.createElement("th", null, "Vol"),
                                    React.createElement("th", null, "Margin"),
                                    React.createElement("th", null, "Ledgers"))),
                            React.createElement("tbody", null, this.state.transactions.map(function (tran) {
                                return (React.createElement("tr", { key: tran.txid },
                                    React.createElement("td", null, tran.txid),
                                    React.createElement("td", null, tran.ordertxid),
                                    React.createElement("td", null, tran.pair),
                                    React.createElement("td", null, tran.time),
                                    React.createElement("td", null, tran.type),
                                    React.createElement("td", null, tran.ordertype),
                                    React.createElement("td", null, tran.price),
                                    React.createElement("td", null, tran.cost),
                                    React.createElement("td", null, tran.fee),
                                    React.createElement("td", null, tran.vol),
                                    React.createElement("td", null, tran.margin),
                                    React.createElement("td", null, tran.ledgers)));
                            })))))
                    : (React.createElement("div", null))))));
    };
    return Csv;
}(React.PureComponent));
exports["default"] = Csv;
