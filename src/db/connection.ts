import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', '1234', {
    host: process.env.DB_HOST || 'localhost' ,
    dialect: 'mysql',
    database: process.env.DB_NAME || 'almacen'
  });

  export default sequelize;