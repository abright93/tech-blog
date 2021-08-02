const seedUser = require('../seeds/user-seeds');
const sequelize = require('../config/connection');
const seedPost = require('../seeds/post-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();