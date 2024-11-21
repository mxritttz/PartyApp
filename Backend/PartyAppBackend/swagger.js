// swagger.js
const swaggerAutogen = require('swagger-autogen')();
const path = require('path');

const outputFile = path.join(__dirname, 'swagger-output.json'); // Path to output the Swagger JSON file
const endpointsFiles = [
  path.join(__dirname, 'routes/userRoutes.js'),  // Add all the route files to be documented
  path.join(__dirname, 'routes/partyRoutes.js'),
  path.join(__dirname, 'routes/participationRoutes.js'),
];

const doc = {
  info: {
    title: 'PartyApp API',
    description: 'API documentation for PartyApp',
  },
  host: 'localhost:5000', // Your server URL
  schemes: ['http'], // Can also be ['https']
};

swaggerAutogen(outputFile, endpointsFiles, doc);
