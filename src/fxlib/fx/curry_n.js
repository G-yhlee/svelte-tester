export const curry = f => function curried(...args) {
    return args.length >= f.length ? f(...args) : (...args2) => curried(...args, ...args2);
  }
  
//   const c_add = curry((a, b, c) => a + b + c);
//   c_add(1, 2, 3);
//   c_add(1)(2, 3);
//   c_add(1, 2)(3);
//   c_add(1)(2)(3);