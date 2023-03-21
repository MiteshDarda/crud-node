import {Sequelize} from "sequelize";

// Database

const sequelize = new Sequelize('postgres', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres' 
});

    // CHECKING CONNECTION
try {
    sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    } )
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;