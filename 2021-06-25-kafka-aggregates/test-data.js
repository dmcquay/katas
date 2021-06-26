const faker = require("faker");

const userIds = [1, 2, 3];
const postIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateUser = () => {
  return {
    id: faker.random.arrayElement(userIds),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  };
};

const generatePost = () => {
  return {
    id: faker.random.arrayElement(postIds),
    authorId: faker.random.arrayElement(userIds),
    content: faker.random.words(10),
  };
};

module.exports = {
  generateUser,
  generatePost,
};
