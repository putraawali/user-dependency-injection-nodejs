const { UserRepository } = require("./user_repository");

async function BaseModel({ db }) {
    return {
        user: await UserRepository({ db }),
    };
}

module.exports = { BaseModel };
