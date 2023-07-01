const openai = require('./config/openai')
const colors = require("colors")
const readLineSync = require('readline-sync')
async function main(){
    console.log(colors.bold.green('Welcome to the new session in chatbot'))
    const chathistory = [];
    while(true){
        const userInput = readLineSync.question(colors.yellow('You: '))
        try{
            const messages = chathistory.map(([role,content])=>({role,content}))
            messages.push({role:'user', content: userInput})
            const chatCompletion = await openai.createChatCompletion({
                model:'gpt-3.5-turbo',
                messages:messages,
            })
            const responseTxt = chatCompletion.data.choices[0].message.content

            if(userInput.toLowerCase() === 'exit'){
            console.log(colors.green('Bot: ')+responseTxt)
                return;
            }
            console.log(colors.green('Bot: ')+responseTxt)
            chathistory.push(['user',userInput])
            chathistory.push(['assistant',responseTxt])
        }
        catch(err){
            console.error(colors.red(err))
        }
    }
    
}

main()