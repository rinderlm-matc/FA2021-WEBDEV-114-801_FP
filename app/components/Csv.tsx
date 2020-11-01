import * as React from 'react'

import Tax from '../interfaces/models/tax';
import Transaction from '../interfaces/models/transaction';
import { csv } from '../utils/csv';

class Csv extends React.PureComponent {
  fileReader = new FileReader();  
  constructor(props: any) {
    super(props);
    this.state = {
      transactions: {} as Transaction[],
      result: {} as Tax,
      isLoaded : false
    }
  }

  handleFileRead = () => {
    if (this.fileReader.result != null) {
      this.setState({
        transactions : csv.convertToTransactionList(this.fileReader.result.toString())
      });

      this.setState({
        result: csv.calculateTax(this.state.transactions)
      });

      this.setState({ isLoaded: true });
    }
    else {
      alert("error parsing file");
    }    
  }

  transactionFileUpload = (file: File) => {
    this.setState({ isLoaded: false });
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file); 
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <form>
              <input type="file"
                accept=".csv"
                name="upload"
                onChange={e => this.transactionFileUpload(e.target.files[0])}
                title="Enter csv"/>
            </form>
          </div>
          <div className="col-8">
            <h6>Total Volume : {this.state.result.volume}</h6>
            <h6>Total Buys : {this.state.result.buys}</h6>
            <h6>Total Sells : {this.state.result.sells}</h6>
            <h6>Total Fees : {this.state.result.fees}</h6>
          </div>
          <div className="col-12">
          {
            this.state.isLoaded
              ? (
                <div>
                  <table>
                  <thead>
                    <tr>
                      <th>Tx ID</th>
                      <th>Order Tx ID</th>
                      <th>Pair</th>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Order Type</th>
                      <th>Price</th>
                      <th>Cost</th>
                      <th>Fee</th>
                      <th>Vol</th>
                      <th>Margin</th>
                      <th>Ledgers</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.transactions.map((tran: Transaction) =>
                        (
                          <tr key={tran.txid}>
                            <td>{tran.txid}</td>
                            <td>{tran.ordertxid}</td>
                            <td>{tran.pair}</td>
                            <td>{tran.time}</td>
                            <td>{tran.type}</td>
                            <td>{tran.ordertype}</td>
                            <td>{tran.price}</td>
                            <td>{tran.cost}</td>
                            <td>{tran.fee}</td>
                            <td>{tran.vol}</td>
                            <td>{tran.margin}</td>
                            <td>{tran.ledgers}</td>
                          </tr>
                      ))
                    }
                    </tbody>
                  </table>
                </div>
              )
              : (<div></div>)
          }
          </div>
        </div>         
      </React.Fragment>
    );
  }
}

export default Csv
