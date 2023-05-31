//create comment data
const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Node.js is the best!",
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: "Whats everyone's thought on HTML!",
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: "I love CSS!",
        user_id: 2,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;