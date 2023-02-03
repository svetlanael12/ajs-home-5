import Undead from '../classUndead';

test('Check class Undead error health', () => {
  const result = new Undead('Путеш', 'Bowman');
  result.damage(170);
  expect(() => { result.damage(120); }).toThrowError('Нельзя нанести урон мертвому персонажу');
});

test('Check class Undead methode damage', () => {
  const result = new Undead('Путеш', 'Bowman');
  result.damage(120);
  expect(result.health).toBe(10);
});

test('Check class Undead methode levelUp', () => {
  const result = new Undead('Путеш', 'Bowman');
  result.levelUp();
  expect(result.level).toBe(2);
});

test('Check class Undead error health', () => {
  const result = new Undead('Путеш', 'Bowman');
  result.damage(150);
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});
