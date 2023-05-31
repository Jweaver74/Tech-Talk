// Purpose: To seed the database with post data
const {Post} = require('../models');

const postData = [
    {
        title: 'Tech Blog',
        post_text: 'This is a tech blog',
        user_id: 1
    },
    {
        title: 'Tech Blog 2',
        post_text: 'This is a tech blog 2',
        user_id: 2
    },
    {   
        title: 'Tech Blog 3',
        post_text: 'This is a tech blog 3',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;