import Magician from '../magician';

test('Check class Magician error health', () => {
  const result = new Magician('Путеш');
  result.damage(220);
  expect(() => { result.damage(120); }).toThrowError('Нельзя нанести урон мертвому персонажу');
});

test('Check class Magician methode damage', () => {
  const result = new Magician('Путеш');
  result.damage(120);
  expect(result.health).toBe(28);
});

test('Check class Magician methode levelUp', () => {
  const result = new Magician('Путеш');
  result.levelUp();
  expect(result.level).toBe(2);
});

test('Check class Magician error health', () => {
  const result = new Magician('Путеш');
  result.damage(220);
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});
