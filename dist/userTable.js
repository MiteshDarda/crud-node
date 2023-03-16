"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTable = exports.User = void 0;
const sequelize_1 = __importDefault(require("./sequelize"));
const Sequelize_1 = require("Sequelize");
const User = sequelize_1.default.define('User', {
    id: {
        type: Sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize_1.DataTypes.INTEGER
    }
});
exports.User = User;
const userTable = (values) => {
    console.log(values);
    User.sync({ force: true })
        .then((res) => {
        console.log(res);
        values.map((value) => {
            User.create({ userName: value.name, age: value.age });
        });
    })
        .catch((e) => {
        console.log("Error While Adding values into the table", e);
    });
};
exports.userTable = userTable;
//# sourceMappingURL=userTable.js.map