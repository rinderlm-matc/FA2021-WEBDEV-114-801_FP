"use strict";
exports.__esModule = true;
exports.csv = void 0;
var tax_1 = require("../interfaces/models/tax");
var transaction_1 = require("../interfaces/models/transaction");
var csv = /** @class */ (function () {
    function csv() {
    }
    csv.convertToTransactionList = function (content) {
        var transactions;
        transactions = [];
        var lines = content.split(/\n/);
        if (lines != null) {
            // skipping first row of csv
            for (var i = 1; i < lines.length; i++) {
                var stripped = lines[i].replace(/['"]+/g, '');
                var values = stripped.split(/,/);
                var transaction = new transaction_1["default"]();
                transaction.txid = values[0];
                transaction.ordertxid = values[1];
                transaction.pair = values[2];
                transaction.time = values[3];
                transaction.type = values[4];
                transaction.ordertype = values[5];
                transaction.price = values[6];
                transaction.cost = values[7];
                transaction.fee = values[8];
                transaction.vol = values[9];
                transaction.margin = values[10];
                transaction.misc = values[11];
                transaction.ledgers = values[12];
                transactions.push(transaction);
            }
        }
        return transactions;
    };
    csv.calculateTax = function (transactions) {
        var tax;
        tax = new tax_1["default"]();
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].vol != undefined) {
                tax.volume += +transactions[i].vol;
            }
            if (transactions[i].type === 'buy')
                tax.buys++;
            else
                tax.sells++;
            if (transactions[i].fee !== undefined)
                tax.fees += +transactions[i].fee;
        }
        console.log(tax.sells);
        return tax;
    };
    return csv;
}());
exports.csv = csv;
