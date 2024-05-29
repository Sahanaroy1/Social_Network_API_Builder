const users = [
    { username: 'Adam', email: 'adam@gmail.com' },
    { username: 'Leonardo', email: 'leo2@yahoo.com' },
    { username: 'Grace', email: 'grace3@aol.com' },
    { username: 'Helen', email: 'helenst@gmail.com' },
    { username: 'Ruby', email: 'ruby5@outlook.com' }
];

const thoughts = [
    { thoughtText: 'What does it mean to be free?', username: 'Adam' },
    { thoughtText: 'What do you want more than anything else?', username: 'Leonardo' },
    { thoughtText: 'What is the best way to start your day?', username: 'Grace' },
    { thoughtText: 'What is a true friend?', username: 'Helen' },
    { thoughtText: 'What legacy do you hope to leave?', username: 'Ruby' }
];

const reactions = [
    { reactionBody: 'You get to do whatever you want!', username: 'Adam' },
    { reactionBody: 'I want to be famous and very well-liked, of course!', username: 'Grace' },
    { reactionBody: 'I like to start my day with the biggest cup of coffee that I can find.', username: 'Leonardo' },
    { reactionBody: 'A true friend is someone that has your back no matter what.', username: 'Ruby' },
    { reactionBody: 'I want to be remembered for being generous to those who are less fortunate so that they can pass it on.', username: 'Helen' }
];

module.exports = { users, thoughts, reactions };