const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'ales@gmail.com',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'jwill@gmail.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'ibod@gmail.com',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier@gmail.com',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley@gmail.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larno@gmail.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnaplet@gmail.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo@gmail.com',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongai@gmail.com',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
