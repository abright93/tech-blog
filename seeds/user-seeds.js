const { User } = require('../models');

const userData = [{
    name: 'Alex',
    password: "Moon"
  },
  {
    name: 'Tierra',
    password: "Purplemink"
  },
  {
    name: 'Sage',
    password: "Pinkslippers"
}]

const seedUsers = () => User.bulkCreate(userdata, 
  {individualHooks: true,
  returning: true,
});
module.exports = seedUsers;