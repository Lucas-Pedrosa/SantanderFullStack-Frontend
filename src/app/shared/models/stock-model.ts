class Stock {

  id: number;
  name: string;
  price: number;
  variation: number;
  date: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.variation = 0;
    this.date = '';
  }
}

export default Stock;
