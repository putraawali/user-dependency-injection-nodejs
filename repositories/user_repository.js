const { DataTypes } = require("sequelize"); // ORM => Object Relational Database

/* Define table users and each function implementation
 * @param: database connection | Dependency Injection
 * @return: object of function implementation
 */
async function UserRepository({ db }) {
    const User = db.define(
        "User",
        {
            user_id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true,
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.TIME,
            },
            updated_at: {
                type: DataTypes.TIME,
            },
        },
        {
            tableName: "users",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );

    return {
        getAll: async function () {
            return User.findAll();
        },
        getById: async function ({ id }) {
            return User.findByPk(id);
        },
    };
}

module.exports = { UserRepository };
