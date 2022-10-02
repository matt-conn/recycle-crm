const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard')
const { ensureAuth, ensureGuest } = require('../middleware/auth')


// dashboard routes
router.get('/companies', dashboardController.getCompanies)
router.post('/createCompany', dashboardController.createCompany)

router.get('/people', dashboardController.getPeople)
router.post('/createPerson', dashboardController.createPerson)

router.get('/tickets', dashboardController.getTickets)
router.post('/createTicket', dashboardController.createTicket)

router.get('/collection', dashboardController.getCollection)



module.exports = router