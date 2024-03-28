const axios = require("axios");
const capitalize = require("../helpers/capitalize");

/* module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }
    static async sorter(req, res) {
        fetch("http://192.168.17.113/sorteio-api/sorteio/api/v1/winner.php")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const winner = data;
                console.log(winner);
                if (winner.Status) {
                    res.render("sort/winner", { winner });
                }
                SorterController.sorter;
            })
            .catch((error) => {
                console.error("Houve um problema com a solicitação:", error);
            });
    }
}; */

module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }
    static async sorter(req, res) {
        try {
            const response = await axios.get(
                "http://192.168.17.113/sorteio-api/sorteio/api/v1/winner.php"
            );
            const winner = response.data;
            winner.Name = capitalize(winner.Name);
            if (!winner.Status) {
                SorterController.sorter;
                return;
            }
            res.render("sort/winner", { winner });
        } catch (error) {
            console.error("Houve um problema com a solicitação:", error);
        }
    }
};
