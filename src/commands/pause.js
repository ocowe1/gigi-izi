const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id)

    if(!queue){
        return msg.reply("não existe nenhuma música sendo reproduzida anjo.");
    }

    queue.dispatcher.pause();

};

module.exports = {
    name: "pause",
    help: "Pausar a música atual.",
    execute
}