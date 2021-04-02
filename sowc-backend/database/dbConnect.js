import Sequelize from "sequelize";
import dbConfig from "./config.js";

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false
});

sequelize.authenticate().then(() => {
    console.log("Connection Successfull...")
}).catch(err => {
    console.log("Connection Failed!", err);
});