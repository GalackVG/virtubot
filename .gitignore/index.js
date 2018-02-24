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
        message.channel.sendMessage("Liste des commandes: \n - *help \n - *créateur \n - *infos \n - *créationbot");
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
            message.reply("Mon créateur est Galack. :)");
            console.log("Commande Salut effectué");const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connecter");
});

bot.login ("NDE2NjUzMTgwNDY2NzU3NjM0.DXHmrQ.Ab4bNavUkCfyuXT3eTG1c1rRlUE");


bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - *help \n - *créateur \n - *infos \n - *créationbot");
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
    if (message.content === prefix + "infos"){
        var embed = new Discord.RichEmbed()
            .setTitle("Information de VituBot")
            .setDescription("VirtuBot à été crée par Galack")
            .addField("*help","Toutes les commandes", true)
            .addField("Plus d'infos"," Vous pouvez contactez Galack sur Facebook => (https://www.facebook.com/GalackNXP)", true)
            .setColor("0x2E64FE")
            .setFooter("Passe un bon moment parmis nous! :D")
        message.channel.sendEmbed(embed);
    }
   
});

bot.on('message', message => {
    if (message.content === '*shout'){
        message.channel.send('ℋ𝓪𝓬𝓴𝒆𝓭 𝓫𝔂 𝓥𝓲𝓻𝓽𝓾𝓪𝓵𝓲𝓽𝔂-𝓖𝓱𝓸𝓼𝓽.𝒆𝓾')
    
    }

    bot.on('message', message => {
        if (message.content === ('ℋ𝓪𝓬𝓴𝒆𝓭 𝓫𝔂 𝓥𝓲𝓻𝓽𝓾𝓪𝓵𝓲𝓽𝔂-𝓖𝓱𝓸𝓼𝓽.𝒆𝓾'){
               message.channel.send('@everyone Viens nous rejoindre discord.gg/rR9Ndfk :heart: virtuality-ghost.eu :heart: Forum N°1 du partage en ligne #GalackLeBoss')
        
        }

    })
    
    bot.on('message', message => {
        if (message.content === '@everyone Viens nous rejoindre discord.gg/rR9Ndfk :heart: virtuality-ghost.eu :heart: Forum N°1 du partage en ligne #GalackLeBoss'){
            message.channel.send('@everyone Viens nous rejoindre discord.gg/rR9Ndfk :heart: virtuality-ghost.eu :heart: Forum N°1 du partage en ligne #GalackLeBoss')
        
    }   
},)})


    }
    if (message.content === prefix + "infos"){
        var embed = new Discord.RichEmbed()
            .setTitle("Information de VirtuBot")
            .setDescription("VirtuBot a été crée par Galack")
            .addField("*help","Toutes les commandes", true)
            .addField("Plus d'infos"," Vous pouvez contactez Galack sur Facebook => (https://www.facebook.com/GalackNXP)", true)
            .setColor("0x2E64FE")
            .setFooter("Passe un bon moment parmis nous! :D")
        message.channel.sendEmbed(embed);
    }
   
});
