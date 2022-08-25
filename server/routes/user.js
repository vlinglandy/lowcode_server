const router = require('koa-router')()
const {
  register,getOne
} = require('../controller/user')
router.prefix('/user')

router.post('/register',  register)

router.post('/getOne', getOne)

module.exports = router