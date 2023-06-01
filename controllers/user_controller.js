async function UserController({ app, service }) {
    app.get("/", async (req, res) => {
        let result = await service.user.getAll();
        res.json({
            message: "Success get data",
            data: result,
        });
    });

    app.get("/:id", async (req, res) => {
        const { id } = req.params;
        let result = await service.user.getById({ id });
        res.json({
            message: "Success get data",
            ...result,
        });
    });
}

module.exports = { UserController };
