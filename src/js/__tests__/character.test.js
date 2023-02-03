import Character from '../classCharacter';

test('Check class Character error long name', () => {
  expect(() => { new Character('Путешественник', 'Swor'); }).toThrowError('Имя слишком длинное.');
});

test('Check class Character error short name', () => {
  expect(() => { new Character('Ма', 'Swor'); }).toThrowError('Имя слишком короткое.');
});

test('Check class Character error type', () => {
  expect(() => { new Character('Эльф', 'Swor'); }).toThrowError('Некорректный тип');
});

test('Check class Character getter name', () => {
  const result = new Character('Путеш', 'Bowman');
  expect(result.name).toBe('Путеш');
});

test('Check class Character getter type', () => {
  const result = new Character('Путеш', 'Bowman');
  expect(result.type).toBe('Bowman');
});
