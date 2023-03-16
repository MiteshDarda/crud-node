"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTable_1 = require("./userTable");
function deleteUser(value) {
    userTable_1.User.destroy({
        where: { id: value.id }
    })
        .then(() => {
        console.log("Deleted");
    })
        .catch((e) => {
        console.log("error Occored while deleting with data", value, e);
    });
}
exports.default = deleteUser;
//# sourceMappingURL=deleteUser.js.map