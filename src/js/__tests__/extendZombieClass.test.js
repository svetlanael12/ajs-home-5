import Zombie from '../classZombie';

test('Check class Zombie error health', () => {
  const result = new Zombie('Путеш', 'Bowman');
  result.damage(120);
  expect(() => { result.damage(120); }).toThrowError('Нельзя нанести урон мертвому персонажу');
});

test('Check class Zombie methode damage', () => {
  const result = new Zombie('Путеш', 'Bowman');
  result.damage(120);
  expect(result.health).toBe(-8);
});

test('Check class Zombie methode levelUp', () => {
  const result = new Zombie('Путеш', 'Bowman');
  result.levelUp();
  expect(result.level).toBe(2);
});

test('Check class Zombie error health', () => {
  const result = new Zombie('Путеш', 'Bowman');
  result.damage(120);
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});
