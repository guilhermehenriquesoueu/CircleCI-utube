import Product from '../src/model/product';
import sell from '../src/service/sellProduct';

//Quantidade vendida pode ser de 1 ou mais unidades
test('deve validar baxa de estoque da venda de uma unidade', () => {
  let product = new Product('Celular', 500.00, 900.00, 10);
  sell(product, 1);
  expect(product.stock).toBe(9);
});

test('deve aceitar a venda de mais do que uma unidadde', () => {
  let product = new Product('Celular', 500.00, 900.00, 10);
  sell(product, 3);
  expect(product.stock).toBe(7);
});