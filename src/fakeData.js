import { faker } from '@faker-js/faker';

const generateFakeUsers = (numUsers = 10) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push({
      id: i + 1,
      name: faker.person.fullName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      group: faker.helpers.arrayElement(['Office', 'Managers', 'Head Office']),
      status: faker.helpers.arrayElement(['Active', 'Inactive', 'Locked']),
      createdOn: faker.date.past().toLocaleDateString(),
    });
  }
  return users;
};

export default generateFakeUsers;
