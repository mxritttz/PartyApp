const mongoose = require('mongoose');
require('dotenv').config(); // Ermöglicht das Laden von Umgebungsvariablen aus einer .env-Datei

const connectDB = async () => {
  try {
    // Verbindung zur MongoDB (entweder lokal oder über Atlas, falls die URL gesetzt ist)
    const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/partyapp';

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Dies ist ausreichend für Mongoose 6.x und höher
    });

    console.log('Datenbankverbindung erfolgreich!');
    console.log('MongoDB Connection State:', mongoose.connection.readyState);

  } catch (err) {
    console.error('Datenbankverbindung fehlgeschlagen:', err.message);
    process.exit(1); // Beendet die Anwendung bei einem Fehler
  }
};

module.exports = connectDB;
