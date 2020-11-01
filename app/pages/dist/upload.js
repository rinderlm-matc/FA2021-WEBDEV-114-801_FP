"use strict";
exports.__esModule = true;
var Layout_1 = require("../components/Layout");
var csv_1 = require("../utils/csv");
var UploadPage = function (props) {
    var fileReader;
    alert(JSON.stringify(props));
    var handleFileRead = function (e) {
        if (fileReader.result != null) {
            props.Transactions =
                csv_1.csv.convertToTransactionList(fileReader.result.toString());
            console.log("number of transactions " + props.Transactions.length);
            console.log("number of transactions " + props.Transactions[0].txid);
            props.IsLoaded = true;
        }
        else {
            alert("error parsing file");
        }
    };
    var transactionFileUpload = function (file) {
        props.IsLoaded = false;
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };
    return (React.createElement(Layout_1["default"], { loadSidebar: false },
        React.createElement("div", { className: "row gutter" },
            React.createElement("div", { className: "col-12" },
                React.createElement("h1", null, "Upload Your Transaction")))));
};
exports["default"] = UploadPage;
