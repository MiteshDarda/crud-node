"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./sequelize"));
const userTable_1 = require("./userTable");
const deleteUser_1 = __importDefault(require("./deleteUser"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware to Pars data and get Body
sequelize_1.default; // Connect To Database
// API Calls
app.get('', (req, res) => {
    res.send("Hello");
});
app.post('/addUser', (req, res) => {
    (0, userTable_1.userTable)(req.body);
    res.send("Send data in the form of array EXAMPLE : [ { name: 'rohan', age: '32' } ]");
});
app.post('/deleteUser', (req, res) => {
    (0, deleteUser_1.default)(req.body);
    res.send("Send Only name of the user PLEASE");
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//same data for addUser API
// [
//     {
//         "userName": "Rohan",
//         "age": "32"
//     },
//     {
//         "userName": "Angel",
//         "age": "19"
//     },
//     {
//         "userName": "Eren",
//         "age": "22"
//     },
//     {
//         "userName": "Golu",
//         "age": "65"
//     }
// ]
//# sourceMappingURL=index.js.map