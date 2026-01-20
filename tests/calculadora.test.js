const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deve retornar 'Error'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Error");
});

test("somar 100 + 'banana' deve retornar 'Error'", () => {
  const resultado = calculadora.somar(100, "banana");
  expect(resultado).toBe("Error");
});
