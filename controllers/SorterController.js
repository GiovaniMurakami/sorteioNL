const sortClient = require("../commands/sortClient");

module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }

    static async sorter(req, res) {
        const winner = await sortClient.sortClient();
        if (winner) {
            res.render("sort/winner", { winner });
        }
        SorterController.sorter();
    }
};
