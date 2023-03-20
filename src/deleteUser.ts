import sequelize from "./sequelize";
import { User } from "./userTable";

function deleteUser(value) {

    try{
        User.destroy({
            where:{ id : value.id}
        })
    }
    catch(error){
        console.log("UNABLE TO DELETE USER");
    }

}

export default deleteUser;