require('dotenv').config(); 
const { DataSource } = require('typeorm');
const DocumentEntity = require('./entity/document.entity.js');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false, 
  logging: true,
  entities: [DocumentEntity],
});

const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('🔥 Подключение к базе данных установлено!');
  } catch (error) {
    console.error('❌ Ошибка при подключении:', error);
    throw error;
  }
};

module.exports = { connectDatabase, AppDataSource };




