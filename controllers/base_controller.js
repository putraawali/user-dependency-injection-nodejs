const { UserController } = require("./user_controller");

function BaseController({ app, service }) {
    UserController({ app, service });
}

module.exports = { BaseController };
