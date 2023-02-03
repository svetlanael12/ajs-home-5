import Swordsman from '../classSwordsman';

test('Check class Swordsman error health', () => {
  const result = new Swordsman('Путеш', 'Bowman');
  result.damage(120);
  expect(() => { result.damage(120); }).toThrowError('Нельзя нанести урон мертвому персонажу');
});

test('Check class Swordsman methode damage', () => {
  const result = new Swordsman('Путеш', 'Bowman');
  result.damage(120);
  expect(result.health).toBe(-8);
});

test('Check class Swordsman methode levelUp', () => {
  const result = new Swordsman('Путеш', 'Bowman');
  result.levelUp();
  expect(result.level).toBe(2);
});

test('Check class Swordsman error health', () => {
  const result = new Swordsman('Путеш', 'Bowman');
  result.damage(120);
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});
