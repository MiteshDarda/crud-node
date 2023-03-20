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
    for await(const value of values){
        try{
            p.push(await User.create({userName: value.name, age: value.age}));
        }
        catch{
            p.push(Promise.reject());
            break;
        }
    }
    
    Promise.all(p)
    .then( res => {
        console.log("INSIDE THEN", res, p);
    })
    .catch (err => {
        console.log("INSIDE CATCH");
        t.rollback();
    });
}

export { User, userTable};