const axios = require("axios");
const capitalize = require("../helpers/capitalize");

module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }

    static async sorter(req, res) {
        try {
            const config = {
                auth: {
                    username: "navelinknet",
                    password: "p9d7EP9sPpiFvdqP9epw",
                },
            };
            const response = await axios.get(
                "http://192.168.17.113:8000/api/v2/public/",
                config
            );
            const winner = response.data;
            winner.Name = capitalize(winner.Name);
            console.log(winner);
            if (!winner.Status) {
                console.log("é falso");
                SorterController.sorter(req, res);
                return;
            }
            res.render("sort/winner", { winner });
        } catch (error) {
            console.error("Houve um problema com a solicitação:", error);
        }
    }
};
