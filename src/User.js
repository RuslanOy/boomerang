class User {
  constructor({ name, score = 0 }) {
    this.name = name;
    this.score = score;
  }
}

module.exports = User;