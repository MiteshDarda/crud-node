import sequelize from "./sequelize";
import { User } from "./userTable";

const deleteUser = async (value) => {

    try{
        await User.destroy({
            // where:{ id : value.id}
            where: value // as value = {id: 'NUM'}
        })
    }
    catch(error){
        console.log("UNABLE TO DELETE USER");
    }

}

export default deleteUser;