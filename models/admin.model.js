import Sequelize from "sequelize";
import { sequelize } from "../database/dbConnect.js";

// Create a database connection

const Admin = sequelize.define('', {
    admin_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    admin_name: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    admin_gender: {
        type: Sequelize.CHAR(6),
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telephone_number: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    email_address: {
        type: Sequelize.CHAR(255),
        allowNull: false,
        primaryKey: true
    },
    address: {
        type: Sequelize.CHAR(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'admins',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "email_address" }
        ]
    }]
});

export default Admin;