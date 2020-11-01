export default class Transaction {
  txid!: string;
  ordertxid!: string;
  pair!: string;
  time!: Date;
  type!: string;
  ordertype!: string;
  price!: number;
  cost!: number;
  fee!: number;
  vol!: number;
  margin!: number;
  misc?: string;
  ledgers?: string;
}