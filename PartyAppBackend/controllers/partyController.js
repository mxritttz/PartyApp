// controllers/partyController.js
const Party = require('../models/Party');

// Alle Partys abrufen
exports.getAllParties = async (req, res) => {
  try {
    const parties = await Party.find(); // Abrufen aller Partys
    res.status(200).json(parties); // Partys in JSON-Format zurückgeben
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Partys', error: err.message });
  }
};

// Party nach ID abrufen
exports.getPartyById = async (req, res) => {
  try {
    const party = await Party.findById(req.params.id); // Party nach ID suchen
    if (!party) return res.status(404).json({ message: 'Party nicht gefunden' });
    res.status(200).json(party); // Party zurückgeben
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Party', error: err.message });
  }
};

// Party erstellen
exports.createParty = async (req, res) => {
  const { name, date, location } = req.body; // Erforderliche Felder
  try {
    const newParty = new Party({ name, date, location });
    await newParty.save(); // Party speichern
    res.status(201).json({ message: 'Party erfolgreich erstellt', party: newParty });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Erstellen der Party', error: err.message });
  }
};

// Party aktualisieren
exports.updateParty = async (req, res) => {
  try {
    const updatedParty = await Party.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedParty) return res.status(404).json({ message: 'Party nicht gefunden' });
    res.status(200).json({ message: 'Party erfolgreich aktualisiert', party: updatedParty });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Aktualisieren der Party', error: err.message });
  }
};

// Party löschen
exports.deleteParty = async (req, res) => {
  try {
    const deletedParty = await Party.findByIdAndDelete(req.params.id);
    if (!deletedParty) return res.status(404).json({ message: 'Party nicht gefunden' });
    res.status(200).json({ message: 'Party erfolgreich gelöscht' });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Löschen der Party', error: err.message });
  }
};
