const axios = require("axios");
const capitalize = require("../helpers/capitalize");

module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }

    static async sorter(req, res) {
        console.log(process.env.API_USERNAME);
        try {
            const config = {
                auth: {
                    username: process.env.API_USERNAME,
                    USERNAME,
                    password: process.env.API_PASSWORD,
                },
            };
            const response = await axios.get(process.env.API_ADRESS, config);
            const winner = response.data;
            winner.Name = capitalize(winner.Name);
            if (!winner.Status) {
                SorterController.sorter(req, res);
                return;
            }
            res.render("sort/winner", { winner });
        } catch (error) {
            console.error("Houve um problema com a solicitação:", error);
        }
    }
};
