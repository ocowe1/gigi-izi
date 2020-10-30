const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path")

dotenv.config();

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.queues = new Map(); 

//bot.queues.set(chave, valor);

const commandFiles = fs.readdirSync(path.join(__dirname,"/commands")).filter(filename => filename.endsWith(".js"));

for(var filename of commandFiles){
    const command = require(`./commands/${filename}`)
    bot.commands.set(command.name, command);
}

bot.login(process.env.TOKEN);

bot.on("ready", function(){
    console.log("estou conectado");
});

bot.on("message", (msg) => {

    if(!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift();
    try{
        bot.commands.get(command).execute(bot, msg, args);
    }catch(e){
        return msg.reply("desculpa, eu acabei de nascer, não sei de muita coisa ainda")
    }

})