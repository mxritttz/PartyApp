const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Pfad zur DB-Verbindungsdatei
const partyRoutes = require('./routes/partyRoutes');
const userRoutes = require('./routes/userRoutes');
const participationRoutes = require('./routes/participationRoutes');
const mediaRoutes = require('./routes/mediaRoutes');

// Initialisierung
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// DB-Verbindung herstellen
connectDB();

// Routen einbinden
app.use('/parties', partyRoutes);
app.use('/users', userRoutes);
app.use('/participations', participationRoutes);
app.use('/media', mediaRoutes);

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
