const express = require('express')
const router = express.Router()
const {saveToWatch} = require('./controller')
router.posr('/api/saveToWatch' , saveToWatch)

module.exports = router