import express  from "express"; 
import sequelize from "./sequelize";
import {userTable} from "./userTable";
import deleteUser from "./deleteUser";
const port = 3000;
const app = express();
app.use(express.json()); // middleware to Pars data and get Body

sequelize; // Connect To Database

// API Calls

app.get('', (req, res) => {
    res.send("Hello");
})

app.post('/addUser', (req, res) => {
    userTable(req.body);
    res.send("Send data in the form of array EXAMPLE : [ { name: 'rohan', age: '32' } ]");
})

app.post('/deleteUser', (req, res) => {
    deleteUser(req.body);
    res.send("Send Only name of the user PLEASE");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})


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

