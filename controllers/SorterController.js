const sortClient = require("../commands/sortClient");
const Winner = require("../models/winner");

module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }

    static async sorter(req, res) {
        const winner = await sortClient.sortClient();
        if (winner.Status === true) {
            try {
                const saveWinner = {
                    name: winner.Name,
                    code: winner.ID,
                };
                await Winner.create(saveWinner);
            } catch (e) {
                console.log(e);
            }
            res.render("sort/winner", { winner });
            return;
        }
        await SorterController.sorter(req, res);
    }

    static async list(req, res) {
        let showWinners;
        try {
            const winners = await Winner.findAll();
            showWinners = winners.map((r) => r.dataValues) || [];
        } catch (e) {
            console.log(e);
        }
        res.render("sort/list", { showWinners });
    }
};
