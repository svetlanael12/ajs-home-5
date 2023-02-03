import Bowerman from '../classBowerman';

test('Check class Bowerman error health', () => {
  const result = new Bowerman('Путеш', 'Bowman');
  result.damage(160);
  expect(() => { result.damage(120); }).toThrowError('Нельзя нанести урон мертвому персонажу');
});

test('Check class Bowerman methode damage', () => {
  const result = new Bowerman('Путеш', 'Bowman');
  result.damage(120);
  expect(result.health).toBe(10);
});

test('Check class Bowerman methode levelUp', () => {
  const result = new Bowerman('Путеш', 'Bowman');
  result.levelUp();
  expect(result.level).toBe(2);
});

test('Check class Bowerman error health', () => {
  const result = new Bowerman('Путеш', 'Bowman');
  result.damage(150);
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});
