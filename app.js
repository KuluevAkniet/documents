const express = require('express'); 
const documentRoutes = require("./src/routes/document.routes");
const { connectDatabase } = require('./src/database/connect');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./swagger');

require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000; 
app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", documentRoutes)

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Не удалось подключиться к базе данных', err);
    process.exit(1); 
  });

