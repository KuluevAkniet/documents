const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'API Documentation', 
      version: '1.0.0', 
      description: 'Documentation for API using Swagger', 
    },
    servers: [
      {
        url: 'http://localhost:3000', 
      },
    ],
  },

  apis: ['./src/routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = { swaggerSpec, swaggerUi };
