const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema für den User
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Erstellen des User Modells
const User = mongoose.model('User', userSchema);

module.exports = User;
