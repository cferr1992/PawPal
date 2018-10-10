// const mongoose = require('mongoose');

// const Animal = mongoose.model('animal');

// module.exports = app => {
//   app.get('/api/animal', async (req, res) => {
//     const animal = await Animal.select({
//       recipients: false
//     });

//     res.send(animal);
//   });

// }

const router = require('express').Router()
const faker = require('faker')
const Product = require('../models/product')

router.get('/animals', (req, res, next) => {
  const perPage = 9

  const page = req.query.page || 1

  Animal
    .find()
    .sort()
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, animals) => {
      if (err)
        return next(err)

        Animal.count(filter, (error, count) => {
          if (error)
            return next(error);

        let pages = Math.ceil(count / perPage)
        res.json({pages, animals});
        })
    })

})

module.exports = router