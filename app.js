const { BaseController } = require("./controllers/base_controller");
const { BaseModel } = require("./repositories/base_repository");
const { BaseServices } = require("./services/base_service");

async function Server({ app, db }) {
    let models = await BaseModel({ db });
    let service = BaseServices({ models });
    BaseController({ app, service });
}

module.exports = { Server };
