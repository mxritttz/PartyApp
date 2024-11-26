const fs = require("fs");
const path = require("path");

// Basis-Ordner erstellen
const baseDir = path.join(__dirname, "PartyAppBackend");

// Projektstruktur
const folders = [
  "controllers",
  "routes",
  "models",
  "middleware",
  "uploads", // Für Bilder/Videos
];

// Dateien mit Beispieldaten
const files = {
  "index.js": `
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Statische Datei-Route

// Routes
const partyRoutes = require('./routes/partyRoutes');
app.use('/parties', partyRoutes);

// Server starten
app.listen(PORT, () => console.log(\`Server läuft auf http://localhost:\${PORT}\`));
  `,
  "routes/partyRoutes.js": `
const express = require('express');
const router = express.Router();
const partyController = require('../controllers/partyController');

// Party-Endpoints
router.get('/', partyController.getAllParties);
router.post('/', partyController.createParty);

module.exports = router;
  `,
  "controllers/partyController.js": `
exports.getAllParties = (req, res) => {
  res.json({ message: 'Liste aller Partys', parties: [] });
};

exports.createParty = (req, res) => {
  const { title, description, location, images } = req.body;
  res.status(201).json({ message: 'Party erstellt', party: { title, description, location, images } });
};
  `,
  "models/Party.js": `
// Beispiel-Datenmodell für eine Party
class Party {
  constructor(title, description, location, images = [], videos = []) {
    this.title = title;
    this.description = description;
    this.location = location;
    this.images = images;
    this.videos = videos;
    this.participants = [];
  }

  addParticipant(user) {
    this.participants.push(user);
  }
}

module.exports = Party;
  `,
  "middleware/auth.js": `
// Beispiel-Middleware für Authentifizierung
module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Kein Token bereitgestellt' });

  // Dummy-Validierung
  if (token === 'test-token') {
    next();
  } else {
    res.status(401).json({ message: 'Ungültiger Token' });
  }
};
  `,
};

// Ordner erstellen
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

// Dateien und Ordner anlegen
folders.forEach((folder) => {
  const folderPath = path.join(baseDir, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
});

Object.entries(files).forEach(([filename, content]) => {
  const filePath = path.join(baseDir, filename);
  fs.writeFileSync(filePath, content.trim());
});

console.log("Backend-Projektstruktur erstellt!");
