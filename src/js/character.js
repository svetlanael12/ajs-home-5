export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  get name() {
    return this._name;
  }

  get type() {
  	return this._type;
  }

  set name(value) {
    if (value.length <= 2) {
      throw new Error('Имя слишком короткое.');
    }
    if (value.length >= 10) {
    	throw new Error('Имя слишком длинное.');
    }
    this._name = value;
  }

  set type(value) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.includes(value)) {
      this._type = value;
      return this._type;
    }
    throw new Error('Некорректный тип');
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    let percent;
    this.level += 1;
    percent = this.attack * 20 / 100;
    this.attack += percent;
    percent = this.defence * 20 / 100;
    this.defence += percent;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Нельзя нанести урон мертвому персонажу');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
