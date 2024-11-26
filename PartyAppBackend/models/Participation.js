const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema für die Teilnahme
const participationSchema = new Schema({
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  joinedAt: { type: Date, default: Date.now }
});

// Erstellen des Participation Modells
const Participation = mongoose.model('Participation', participationSchema);

module.exports = Participation;
