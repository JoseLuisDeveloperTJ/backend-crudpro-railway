import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', '1234', {
    host: process.env.DB_HOST || 'localhost' ,
    dialect: 'mysql',
    database: process.env.DB_NAME || 'almacen',
    password: process.env.DB_PASSWORD || '1234',
    username: process.env.DB_USER || 'root'
  });

  export default sequelize;