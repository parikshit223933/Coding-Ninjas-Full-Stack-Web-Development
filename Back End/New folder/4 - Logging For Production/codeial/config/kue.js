const kue = require('kue');

const queue = kue.createQueue();

module.exports = queue;