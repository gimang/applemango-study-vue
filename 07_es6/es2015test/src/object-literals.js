const NAME = '홍길동';
const AGE = 20;
const EMAIL = 'hong@gmail.com';

const PERSON = {
  NAME,
  AGE,
  EMAIL
};

console.log(PERSON);

const DEVICE = {
  name: '아이패드',
  price: 1000000,
  quantity: 1,
  order: function() {
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }

    console.log(`주문 금액 : ${this.amount}`);
    
  },
  discount(rate) {
    if(rate > 0 && rate < 0.8) {
      this.amount = this.quantity * this.price * (1 - rate);
    }

    console.log(`할인 금액 : ${this.amount}`);
  }
}

DEVICE.order();

DEVICE.discount(0.6);