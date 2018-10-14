const router = require('express').Router()
const Animal = require('../models/animal.js')

router.get('/animals', (req, res, next) => {

  const perPage = 9
  const page = req.query.page || 1
  let filter = {}
  
  if (req.query.breed) {
    filter.breed = req.query.breed;
  }

  const sort = {};
  switch(req.query.sort) {
    case "lowest":
      sort.name = "asc"
      break;
    case "highest":
      sort.name = "desc"
      break;
  }

  Animal
    .find(filter)
    .sort(sort)
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

router.get('/animals/:animalid', (req, res, next) => {
  let animalId = req.params.animalid


})

module.exports = router