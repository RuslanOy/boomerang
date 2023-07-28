const { User } = require('../db/models');

async function insertUser(nickname) {
  try {
    const user = await User.create({ name: nickname });
    console.log(user);
  } catch ({ message }) {
    console.log(message);
  }
}


module.exports = insertUser;
