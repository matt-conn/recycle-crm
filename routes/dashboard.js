const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, dashboardController.getDashboard)

// router.post('/createTodo', dashboardController.createTodo)

// router.put('/markComplete', dashboardController.markComplete)

// router.put('/markIncomplete', dashboardController.markIncomplete)

// router.delete('/deleteTodo', dashboardController.deleteTodo)

module.exports = router