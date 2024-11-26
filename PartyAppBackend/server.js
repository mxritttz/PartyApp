const express = require('express');
const cors = require('cors'); // Importiere CORS
const swaggerUi = require('swagger-ui-express');
const userRouter = require('./routes/userRoutes');
const swaggerAutogen = require('swagger-autogen')();

const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Pfad zur DB-Verbindungsdatei
const partyRoutes = require('./routes/partyRoutes');
const userRoutes = require('./routes/userRoutes');
const participationRoutes = require('./routes/participationRoutes');
const mediaRoutes = require('./routes/mediaRoutes');

const app = express();

// Definiere CORS-Optionen für localhost:5000
const corsOptions = {
  origin: 'http://localhost:5000', // Erlaube nur localhost:5000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Alle CRUD-Operationen
  allowedHeaders: ['Content-Type', 'Authorization'], // Erlaubte Header
};
app.use(bodyParser.json());


// Nutze CORS mit den definierten Optionen
//app.use(cors(corsOptions));

// Definiere den Pfad für die Swagger-Dokumentation
const outputFile = './swagger_output.json'; // Ausgabedatei für die Swagger-Dokumentation
const endpointsFiles = ['./routes/userRoutes.js', './routes/partyRoutes.js']; // Deine Routen-Dateien

// Generiere die Swagger-Dokumentation
swaggerAutogen(outputFile, endpointsFiles).then(() => {
  const swaggerDocument = require(outputFile);

  // Nutze swagger-ui-express, um die Dokumentation bereitzustellen

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(userRouter)
  app.use(partyRoutes)
  app.use(participationRoutes)
  app.use(mediaRoutes)

  connectDB();

  // Rest deiner Server-Konfiguration
  app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
  });
});
