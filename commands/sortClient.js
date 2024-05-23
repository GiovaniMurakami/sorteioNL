const capitalize = require("../helpers/capitalize");
const SorterController = require("../controllers/SorterController");

async function sortClient() {
    try {
        const config = {
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        "navelinknet" + ":" + "p9d7EP9sPpiFvdqP9epw"
                    ).toString("base64"),
            },
        };
        const response = await fetch(
            "http://ec2-18-188-82-166.us-east-2.compute.amazonaws.com",
            config
        );

        if (!response.ok) {
            throw new Error(
                "Erro ao fazer a solicitação: " +
                    response.status +
                    " " +
                    response.statusText
            );
        }

        const winner = await response.json();
        winner.Name = capitalize(winner.Name);
        return winner;
    } catch (error) {
        console.error("Ocorreu um erro com a solicitação: ", error);
    }
}

module.exports = {
    sortClient,
};
