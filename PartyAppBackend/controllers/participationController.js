const Participation = require('../models/Participation');
const Party = require('../models/Party');
const User = require('../models/User');

// Alle Teilnehmer einer Party abrufen
exports.getParticipantsByParty = async (req, res) => {
  try {
    const party = await Party.findById(req.params.partyId).populate('participants');
    if (!party) return res.status(404).json({ message: 'Party nicht gefunden' });

    res.status(200).json(party.participants);
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Teilnehmer', error: err.message });
  }
};

// Alle Partys eines Nutzers abrufen
exports.getPartiesByUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('parties');
    if (!user) return res.status(404).json({ message: 'Nutzer nicht gefunden' });

    res.status(200).json(user.parties);
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Partys', error: err.message });
  }
};

// Nutzer zu einer Party hinzufügen (Teilnahme)
exports.participateInParty = async (req, res) => {
  try {
    const { userId, partyId } = req.body;
    const user = await User.findById(userId);
    const party = await Party.findById(partyId);

    if (!user || !party) {
      return res.status(404).json({ message: 'Nutzer oder Party nicht gefunden' });
    }

    if (party.participants.includes(userId)) {
      return res.status(400).json({ message: 'Nutzer ist bereits Teilnehmer' });
    }

    party.participants.push(userId);
    user.parties.push(partyId);

    await party.save();
    await user.save();

    res.status(200).json({ message: 'Erfolgreich teilgenommen', party });
  } catch (err) {
    res.status(500).json({ message: 'Fehler bei der Teilnahme', error: err.message });
  }
};

// Nutzer von einer Party entfernen (Verlassen)
exports.cancelParticipation = async (req, res) => {
  try {
    const { userId, partyId } = req.body;
    const user = await User.findById(userId);
    const party = await Party.findById(partyId);

    if (!user || !party) {
      return res.status(404).json({ message: 'Nutzer oder Party nicht gefunden' });
    }

    party.participants.pull(userId);
    user.parties.pull(partyId);

    await party.save();
    await user.save();

    res.status(200).json({ message: 'Erfolgreich verlassen', party });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Verlassen der Party', error: err.message });
  }
};

// Teilnahme an einer Party löschen
exports.deleteParticipation = async (req, res) => {
  try {
    const { userId, partyId } = req.params;
    const user = await User.findById(userId);
    const party = await Party.findById(partyId);

    if (!user || !party) {
      return res.status(404).json({ message: 'Nutzer oder Party nicht gefunden' });
    }

    party.participants.pull(userId);
    user.parties.pull(partyId);

    await party.save();
    await user.save();

    res.status(200).json({ message: 'Teilnahme gelöscht' });
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Löschen der Teilnahme', error: err.message });
  }
};
