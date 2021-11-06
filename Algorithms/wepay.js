// function func(a) {
//   if (a <= 0) {
//       return 1;
//   }
//   if (a >= 14) {
//       return 0;
//   }
//   if (a % 2 == 0) {
//       return a;
//   } else {
//       return (func(a-1) + func(a - 2));
//   }
// }

// console.log(func(7))

// const array = [1,2,3,4,5,6,7,8,9,10,11,12];
// let x = 7
// let a = 0;
// let idx = 0;
// while (a < x) {
//     if (array[idx] % 2 === 0) {
//         a += array[idx]
//     }
//     idx += 1;
// }
// console.log(a + ", " + idx);

class Sample {
  constructor() {
      this.a = 1;
      this.b = 1;
  }

  functionOne(a) {
      this.b = this.b + a;
      console.log(this.a, this.b)
  }

  functionTwo(b) {
      for (let i = 0; i < this.b; i++) {
          this.a += b;
      }
      console.log(this.a, this.b)
  }

  print() {
      console.log(this.a + ", " + this.b);
  }
}

let x = 5;
let y = 4;
let z = 0;

const s = new Sample();
s.functionOne(x);
s.functionTwo(y);
s.functionOne(z);
s.print();

