const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connecter");
});

bot.login ("NDE2NjUzMTgwNDY2NzU3NjM0.DXHmrQ.Ab4bNavUkCfyuXT3eTG1c1rRlUE");


bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - préfix + help \n - préfix + créateur \n préfix + créationbot");
    }
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
    if (message.content === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");

    }
    if (message.content === "yo"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");

    }
    if (message.content === "Bonjour"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");

    }
    if (message.content === "bonjour"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");

    }
    if (message.content === "*créationbot"){
        message.reply("Création du bot le 23/02/2018 à 20h13 ");
        console.log("Commande Salut effectué");

    }
        if (message.content === "*créateur"){
            message.reply("Mon créateur et Galack. :)");
            console.log("Commande Salut effectué");


    }
});
