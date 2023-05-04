const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/loginController')
router.route('/')
  .get(dashboardController.getDashboard)
  .post();

module.exports = router;