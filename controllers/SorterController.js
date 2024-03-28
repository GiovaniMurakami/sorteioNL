const axios = require("axios");

module.exports = class SorterController {
    static sort(req, res) {
        res.render("sort/home");
    }
    static async sorter(req, res) {
        const winner = { Name: "Giovani Murakami Lino Rodrigues" };
        res.render("sort/winner", { winner });
        /*fetch("#")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                
            })
            .catch((error) => {
                console.error("Houve um problema com a solicitação:", error);
            });*/
    }
};
