import sequelize from "./sequelize";
import { DataTypes } from "Sequelize";

const User = sequelize.define('User', {
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull:false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER
    }
});

const userTable = (values) => {

    console.log(values);


    User.sync({force:true})
    .then((res) => {
        console.log(res);
        values.map((value) => {
            User.create({userName: value.name, age: value.age});
        })
    })
    .catch((e) => {
        console.log("Error While Adding values into the table", e);
    })
}

export { User, userTable};