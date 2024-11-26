const express = require('express');
const router = express.Router();
const partyController = require('../controllers/partyController');

// Alle Partys abrufen
router.get('/parties', partyController.getAllParties);

// Party nach ID abrufen
router.get('/party/:id', partyController.getPartyById);

// Party erstellen
router.post('/party', partyController.createParty);

// Party aktualisieren
router.put('/party/:id', partyController.updateParty);

// Party löschen
router.delete('/party/:id', partyController.deleteParty);

module.exports = router;
