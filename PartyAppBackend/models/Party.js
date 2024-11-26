const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema für die Party
const partySchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  location: { type: String, required: false },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Verweis auf den User (Host)
  images: [{ type: String }], // Array von URLs zu Bildern
  videos: [{ type: String }], // Array von URLs zu Videos
  createdAt: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Array von Usern, die an der Party teilnehmen
});

// Erstellen des Party Modells
const Party = mongoose.model('Party', partySchema);

module.exports = Party;
