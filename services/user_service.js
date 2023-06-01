function UserService({ models }) {
    return {
        getAll: async function () {
            return await models.user.getAll();
        },
        getById: async function ({ id }) {
            let response = {
                data: null,
                error: null,
            };

            try {
                let result = await models.user.getById({ id });
                if (result != null) {
                    response.data = result;
                } else {
                    response.error = "Data not found";
                }
            } catch (error) {
                return (response.error = error);
            }

            return response;
        },
    };
}

module.exports = { UserService };
