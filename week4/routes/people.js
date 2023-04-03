const express = require('express')
const router = express.Router()
const {
  getPeople,
  createPerson,
  createPostmanPerson,
  updatePostmanPerson,
  deletePerson
} = require('../controllers/people')


let { people } = require('../data')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/api/postman/people',createPostmanPerson )
// router.put('/:id', updatePostmanPerson )
// router.delete('/:id', deletePerson)

// or this way of chain >>

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPostmanPerson)
rpouter.route('/:id').put(updatePostmanPerson).delete(deletePerson)

module.export = router