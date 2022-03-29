// Currying - converting a function with N number arguments to a function with one argument

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = add(1);
add1(5);

add(1)(5);

const addOn = (a) => (b) => a + b;
