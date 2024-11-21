const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participatinController');

// Teilnahme an einer Party
router.post('/party/:partyId/participate', participationController.participateInParty);

// Absage von einer Party
router.post('/party/:partyId/cancel', participationController.cancelParticipation);

module.exports = router;
