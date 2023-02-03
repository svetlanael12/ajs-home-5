import Daemon from '../classDaemon';

test('Check class Daemon error health', () => {
  const result = new Daemon('Путеш', 'Bowman');
  result.damage(230);
  expect(() => { result.damage(120); }).toThrowError('Нельзя нанести урон мертвому персонажу');
});

test('Check class Daemon methode damage', () => {
  const result = new Daemon('Путеш', 'Bowman');
  result.damage(120);
  expect(result.health).toBe(28);
});

test('Check class Daemon methode levelUp', () => {
  const result = new Daemon('Путеш', 'Bowman');
  result.levelUp();
  expect(result.level).toBe(2);
});

test('Check class Daemon error health', () => {
  const result = new Daemon('Путеш', 'Bowman');
  result.damage(230);
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});
