const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Alle Nutzer abrufen
router.get('/users', userController.getAllUsers);

// Nutzer nach ID abrufen
router.get('/user:id', userController.getUserById);

// Nutzer registrieren
router.post('/user', userController.registerUser);

// Nutzer aktualisieren
router.put('/user:id', userController.updateUser);

// Nutzer löschen
router.delete('/user:id', userController.deleteUser);

module.exports = router;
