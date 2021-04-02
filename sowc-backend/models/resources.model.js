import Sequelize from "sequelize";
import { sequelize } from "../database/dbConnect.js";

// Create a database connection to resources

const Resources = sequelize.define('', {
    resource_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.CHAR(255),
        allowNull: true
    },
    topic: {
        type: Sequelize.CHAR(255),
        allowNull: true
    },
    author: {
        type: Sequelize.CHAR(100),
        allowNull: true
    },
    publication_date: {
        type: Sequelize.CHAR(50),
        allowNull: true
    },
    key_words: {
        type: Sequelize.CHAR(255),
        allowNull: true
    },
    resource_link: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'all-resources',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "resource_id" }
        ]
    }]
});

export default Resources;