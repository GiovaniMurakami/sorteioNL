const capitalize = require("../helpers/capitalize");
const axios = require("axios");
const SorterController = require("../controllers/SorterController");

async function sortClient() {
    try {
        const config = {
            auth: {
                username: process.env.API_USERNAME,
                password: process.env.API_PASSWORD,
            },
        };
        const response = await axios.get(process.env.API_ADRESS, config);
        const winner = response.data;
        winner.Name = capitalize(winner.Name);
        return winner;
    } catch (error) {
        console.error(
            "Ocorreu um erro com a solicitação: ",
            error.response.status
        );
    }
}

module.exports = {
    sortClient,
};
