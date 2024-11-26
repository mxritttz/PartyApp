const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema für das Medium (Bild oder Video)
const mediaSchema = new Schema({
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  type: { type: String, enum: ['image', 'video'], required: true },
  url: { type: String, required: true }, // URL des Mediums
  createdAt: { type: Date, default: Date.now }
});

// Erstellen des Media Modells
const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
