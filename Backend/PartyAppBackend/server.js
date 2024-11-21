const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const partyRoutes = require('./routes/partyRoutes');
const participationRoutes = require('./routes/participationRoutes');

// Import Swagger UI Express
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); // Path to the generated Swagger JSON file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Route (Swagger UI)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routen einbinden
app.use('/api/users', userRoutes);
app.use('/api/parties', partyRoutes);
app.use('/api/participations', participationRoutes);

// DB-Verbindung herstellen
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
