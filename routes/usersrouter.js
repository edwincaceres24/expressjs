const express = require("express")
const faker = require("faker")
const router = express.Router()

router.get('/', (req, res) => {
  const  users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.firstName(),
      gender: parseInt(faker.name.gender(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(users);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = router;




