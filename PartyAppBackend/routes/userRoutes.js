const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// Alle Nutzer abrufen
userRouter.get('/users', userController.getAllUsers);

// Nutzer nach ID abrufen
userRouter.get('/user/:id', userController.getUserById);

// Nutzer registrieren
userRouter.post('/user', userController.registerUser);

// Nutzer aktualisieren
userRouter.put('/user/:id', userController.updateUser);

// Nutzer löschen
userRouter.delete('/user/:id', userController.deleteUser);

module.exports = userRouter;
