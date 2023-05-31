const {User} = require('../models');

const userData = [
    {
        username: 'John',
        email:'john@gmail.com',
        password: 'password123'
    },
    {
        username: 'Jane',
        email:'jane@gmail.com',
        password: 'password456'
    },
    {
        username: 'Jack',
        email:'jack@gmail.com',
        password: 'password789'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
