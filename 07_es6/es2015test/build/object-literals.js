'use strict';

var NAME = '홍길동';
var AGE = 20;
var EMAIL = 'hong@gmail.com';

var PERSON = {
  NAME: NAME,
  AGE: AGE,
  EMAIL: EMAIL
};

console.log(PERSON);

var DEVICE = {
  name: '아이패드',
  price: 1000000,
  quantity: 1,
  order: function order() {
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }

    console.log('\uC8FC\uBB38 \uAE08\uC561 : ' + this.amount);
  },
  discount: function discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = this.quantity * this.price * (1 - rate);
    }

    console.log('\uD560\uC778 \uAE08\uC561 : ' + this.amount);
  }
};

DEVICE.order();

DEVICE.discount(0.6);