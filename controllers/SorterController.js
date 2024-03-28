const axios = require("axios");

module.exports = class SorterController {
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
                res.render("sort/winner", { winner });
            })
            .catch((error) => {
                console.error("Houve um problema com a solicitação:", error);
            });
    }
};
