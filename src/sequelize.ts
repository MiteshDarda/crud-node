import {Sequelize} from "sequelize";

// Database

const sequelize = new Sequelize(`${process.env.DATABASE}`, `${process.env.USER_NAME}`, `${process.env.PASSWORD}`, {
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