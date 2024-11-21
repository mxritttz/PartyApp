const User = require('../models/User');

// Alle Nutzer abrufen
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Abrufen aller Nutzer
    res.status(200).json(users); // Nutzer in JSON-Format zurückgeben
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Nutzer', error: err.message });
  }
};

// Nutzer nach ID abrufen
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Nutzer nach ID suchen
    if (!user) return res.status(404).json({ message: 'Nutzer nicht gefunden' });
    res.status(200).json(user); // Nutzer zurückgeben
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Abrufen des Nutzers', error: err.message });
  }
};

// Nutzer registrieren (Create)
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body; // Entsprechend den Anforderungen im Request-Body
  try {
    const existingUser = await User.findOne({ email }); // Prüfen, ob der Nutzer bereits existiert
    if (existingUser) return res.status(400).json({ message: 'E-Mail bereits registriert' });

    const newUser = new User({ username, email, password }); // Neuer Nutzer wird erstellt
    await newUser.save(); // Nutzer speichern

    res.status(201).json({ message: 'Nutzer erfolgreich registriert', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Fehler bei der Registrierung', error: err.message });
  }
};

// Nutzer aktualisieren (Update)
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Nutzer mit neuen Daten aktualisieren
    if (!updatedUser) return res.status(404).json({ message: 'Nutzer nicht gefunden' });

    res.status(200).json({ message: 'Nutzer erfolgreich aktualisiert', user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Aktualisieren des Nutzers', error: err.message });
  }
};

// Nutzer löschen (Delete)
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id); // Nutzer nach ID löschen
    if (!deletedUser) return res.status(404).json({ message: 'Nutzer nicht gefunden' });

    res.status(200).json({ message: 'Nutzer erfolgreich gelöscht' });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Löschen des Nutzers', error: err.message });
  }
};
