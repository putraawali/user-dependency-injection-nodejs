const { UserService } = require("./user_service");

function BaseServices({ models }) {
    return {
        user: UserService({ models }),
    };
}

module.exports = { BaseServices };
