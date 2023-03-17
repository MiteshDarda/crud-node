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

    const t = await sequelize.transaction()
    await User.sync({force:true})
    await values.map(async (value) => {
        try{
            console.log("TRYY");
            await User.create({userName: value.name, age: value.age})
        }catch(error){
            console.log("ERROR");
            await t.rollback();
        }
    })
    // await t.commit();
    console.log(t);
}

export { User, userTable};