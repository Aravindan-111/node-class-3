const express = require('express');
const route = express.Router();

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

// Users API Routes
route.get('/', (req, res, next) => {
  console.log('Users Get method called !!');
  res.send(users);
});

route.post('/', (req, res, next) => {
  console.log('Users Post method called !!');
  console.log(req.body);
  // insert one
  res.send({ ...req.body });
});

route.put('/', (req, res, next) => {
  console.log('Users put method called !!');
  next();
});

route.delete('/:id', (req, res, next) => {
  console.log('Users delete method called !!');
  next();
});

module.exports = route;
