"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTable_1 = require("./userTable");
function deleteUser(value) {
    try {
        userTable_1.User.destroy({
            where: { id: value.id }
        });
    }
    catch (error) {
        console.log("UNABLE TO DELETE USER");
    }
}
exports.default = deleteUser;
//# sourceMappingURL=deleteUser.js.map