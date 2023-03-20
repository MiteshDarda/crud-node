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
      type: DataTypes.INTEGER,
      allowNull: false
    }
});

const userTable = async (values) => {

    let p = new Array;
    const t = await sequelize.transaction()
    await User.sync({force:true})
    try{
        const users = await User.bulkCreate([...values])
    }
    catch(error){
        console.log("ERROR CANNOT CREATE NEW USERS, INCOMPLETE DATA");
    }
}

export { User, userTable};