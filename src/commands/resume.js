const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id)

    if(!queue){
        return msg.reply("não existe nenhuma música sendo reproduzida anjo.");
    }

    queue.dispatcher.resume();

};

module.exports = {
    name: "resume",
    help: "Continuar tocando música.",
    execute
}