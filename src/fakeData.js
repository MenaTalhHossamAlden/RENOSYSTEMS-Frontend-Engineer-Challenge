import { faker } from '@faker-js/faker';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
};
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
      color: getRandomColor(),
    });
  }
  return users;
};

export default generateFakeUsers;
