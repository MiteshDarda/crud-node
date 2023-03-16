import sequelize from "./sequelize";
import { User } from "./userTable";

function deleteUser(value) {

    User.destroy({
        where:{ id : value.id}
    })
    .then(() => {
        console.log("Deleted");
    })
    .catch((e) => {
        console.log("error Occored while deleting with data", value, e)
    })

}

export default deleteUser;