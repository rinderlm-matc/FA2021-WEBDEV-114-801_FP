import Tax from "../interfaces/models/tax";
import Transaction from "../interfaces/models/transaction";

export class csv {

  static convertToTransactionList(content: string): Transaction[] {
    let transactions: Transaction[];
    transactions = [];
    let lines = content.split(/\n/);
    if (lines != null) {
      // skipping first row of csv
      for (let i = 1; i < lines.length; i++) {

        let stripped = lines[i].replace(/['"]+/g, '');
        let values = stripped.split(/,/);
        let transaction = new Transaction();
        transaction.txid = values[0];
        transaction.ordertxid = values[1];
        transaction.pair = values[2];
        transaction.time = values[3] as unknown as Date;
        transaction.type = values[4];
        transaction.ordertype = values[5];
        transaction.price = values[6] as unknown as number;
        transaction.cost = values[7] as unknown as number;
        transaction.fee = values[8] as unknown as number;
        transaction.vol = values[9] as unknown as number;
        transaction.margin = values[10] as unknown as number;
        transaction.misc = values[11];
        transaction.ledgers = values[12];
        transactions.push(transaction);
      }
    }
    return transactions;
  }

  static calculateTax(transactions: Transaction[]): Tax {
    let tax: Tax;
    tax = new Tax();
    for (let i = 0; i < transactions.length; i++)
    { 
      if (transactions[i].vol != undefined) {
        tax.volume += +transactions[i].vol;
      }   

      if (transactions[i].type === 'buy') tax.buys++;
      else tax.sells++;

      if(transactions[i].fee !== undefined)
        tax.fees += +transactions[i].fee;
    }
    console.log(tax.sells);
    return tax;
  }
}