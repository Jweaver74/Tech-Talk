const {User} = require('../models');

const userData = [
    {
        username: 'John',
        email:'john@john.com',
        password: 'password123'
    },
    {
        username: 'Jane',
        email:'jane@jane.com',
        password: 'password456'
    },
    {
        username: 'Jack',
        email:'jack@jack.com',
        password: 'password789'
    },
];

const seedUsers = () => user.bulkCreate(userData);

module.exports = seedUsers;
