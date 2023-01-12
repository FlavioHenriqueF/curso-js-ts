function* generateOne() {
  //Código qualquer...
  yield "Value 1";
  //Código qualquer...
  yield "Value 2";
  //Código qualquer...
  yield "Value 3";
}

function* generateTwo() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* generateThree() {
  yield 0;
  yield 1;
  yield 2;
}

function* generateFour() {
  yield* generateThree();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generateFour();

function* generateFive() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do return");
  };

  yield function () {
    console.log("vim do y2");
  };
}

const g5 = generateFive();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();
