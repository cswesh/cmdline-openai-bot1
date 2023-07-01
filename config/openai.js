const {Configuration, OpenAIApi} = require("openai")
const dotenv = require("dotenv")
dotenv.config()

const configuration = new Configuration({
    apiKey: "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"
})

const openai = new OpenAIApi(configuration)
//console.log(openai)
module.exports = openai;