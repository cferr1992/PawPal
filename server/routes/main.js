const router = require('express').Router()
const Animal = require('../models/animal.js')

router.get('/animals', (req, res, next) => {
  const perPage = 9

  const page = req.query.page || 1

  let filter = {}
  
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