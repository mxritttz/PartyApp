const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Multer-Setup für Dateiuploads
const upload = multer({ dest: 'uploads/' });

// Einfache Route für das Hochladen von Medien
router.post('/upload', upload.single('media'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Kein Medium hochgeladen.' });
  }
  res.status(200).json({
    message: 'Medium erfolgreich hochgeladen!',
    file: req.file
  });
});

// Alle hochgeladenen Medien abrufen
router.get('/media/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename);
  
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ message: 'Datei nicht gefunden' });
    }
  });
});

// Ein Medium ersetzen (neue Datei hochladen)
router.put('/media/:filename', upload.single('media'), (req, res) => {
  const oldFilename = req.params.filename;
  const oldFilePath = path.join(__dirname, '../uploads', oldFilename);

  // Prüfen, ob die alte Datei existiert, und löschen
  fs.unlink(oldFilePath, (err) => {
    if (err) {
      return res.status(404).json({ message: 'Alte Datei nicht gefunden' });
    }

    // Neue Datei speichern
    if (!req.file) {
      return res.status(400).json({ message: 'Kein Medium hochgeladen.' });
    }

    res.status(200).json({
      message: 'Medium erfolgreich ersetzt!',
      file: req.file
    });
  });
});

// Ein Medium löschen
router.delete('/media/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename);

  // Datei löschen
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(404).json({ message: 'Datei nicht gefunden' });
    }

    res.status(200).json({ message: 'Medium erfolgreich gelöscht!' });
  });
});

module.exports = router;
