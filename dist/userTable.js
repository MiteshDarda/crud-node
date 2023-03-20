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
        type: Sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.User = User;
const userTable = async (values) => {
    let p = new Array;
    const t = await sequelize_1.default.transaction();
    await User.sync({ force: true });
    // for await(const value of values){
    //     try{
    //         p.push(await User.create({userName: value.name, age: value.age}));
    //     }
    //     catch{
    //         break;
    //     }
    // }
    // console.log([...values]);
    try {
        const users = await User.bulkCreate([...values]);
        // console.log(users);
    }
    catch (error) {
        console.log("ERROR CANNOT CREATE NEW USERS, INCOMPLETE DATA");
    }
    // let data = await Promise.all(p)
    // console.log("CONSOLE", data);
};
exports.userTable = userTable;
//# sourceMappingURL=userTable.js.map