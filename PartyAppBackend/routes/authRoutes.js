const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

// Alle Teilnehmer einer Party abrufen
router.get('/party/:partyId', participationController.getParticipantsByParty);

// Alle Partys eines Nutzers abrufen
router.get('/user/:userId', participationController.getPartiesByUser);

// Nutzer zu einer Party hinzufügen (Teilnahme)
router.post('/join', participationController.participateInParty);

// Nutzer von einer Party entfernen (Verlassen)
router.post('/leave', participationController.removeParticipation);

// Teilnahme an einer Party löschen
router.delete('/:userId/party/:partyId', participationController.deleteParticipation);

module.exports = router;
